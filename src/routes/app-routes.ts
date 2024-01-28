import {
    lazyImport,
    onRouteUpdate,
    sanitizeLocation,
    type TemplateTagValue
} from '@loom-js/core';

const LazyProfile = () => import('../components/content/profile');
const LazyPosts = () => import('../components/content/posts');
const LazyPostDetail = () => import('../components/content/post-detail');

export const AppRoutes = () => {
    const { effect: lazyRouteEffect, update: updateLazyImport } =
        lazyImport<TemplateTagValue>('app-route', () =>
            Promise.resolve(undefined)
        );

    onRouteUpdate(({ value: location }) => {
        const { pathname } = sanitizeLocation(location);
        let importer: (valueInput: TemplateTagValue) => void;
        const postDetailRegex = /^\/posts(?:\/(\w+[\w|-]*))$/;
        const profileImporter = async () => {
            const { Profile } = await LazyProfile();
            return Profile();
        };

        switch (true) {
            case pathname === '/profile':
                importer = profileImporter;
                break;
            case pathname === '/posts':
                importer = async () => {
                    const { Posts } = await LazyPosts();
                    return Posts();
                };
                break;
            case postDetailRegex.test(pathname):
                const match = pathname.match(postDetailRegex);
                const postId = match?.[1];

                importer = async () => {
                    const { PostDetail } = await LazyPostDetail();
                    return PostDetail({ id: postId });
                };
                break;
            default:
                window.history.replaceState({}, 'redirect', '/profile');
                importer = profileImporter;
        }

        updateLazyImport(importer);
    });

    return lazyRouteEffect(({ value: lazyComponent }: { value: any }) => {
        return lazyComponent as TemplateTagValue;
    });
};
