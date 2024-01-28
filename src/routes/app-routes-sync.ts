import { router, sanitizeLocation } from '@loom-js/core';

import { PostDetail } from '../components/content/post-detail';
import { Posts } from '../components/content/posts';
import { Profile } from '../components/content/profile';

export const AppRoutesSync = () => {
    return router(({ value: location }) => {
        const { pathname } = sanitizeLocation(location);
        const postDetailRegex = /^\/posts(?:\/(\w+[\w|-]*))$/;

        console.log({ pathname });
        switch (true) {
            case pathname === '/profile':
                return Profile();
            case pathname === '/posts':
                return Posts();
            case /^\/posts(?:\/(\w+[\w|-]*))$/.test(pathname):
                const match = pathname.match(postDetailRegex);
                const postId = match?.[1];

                return PostDetail({ id: postId });
            default:
                window.history.replaceState({}, 'redirect', '/profile');
                return Profile();
        }
    });
};
