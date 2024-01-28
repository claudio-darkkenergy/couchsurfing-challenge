import { component, router, sanitizeLocation } from '@loom-js/core';

import content from '../../content/index.json';

export const PageTitle = component((html) => {
    return html`
        <h1 class="heading-level-1">
            ${router(({ value: location }) => {
                const { pathname } = sanitizeLocation(location);

                switch (true) {
                    case pathname === '/':
                        return content.profile?.pageTitle;
                    case ['/profile', '/posts'].includes(pathname):
                        return content[pathname.slice(1)]?.pageTitle;
                    default:
                        return content.postDetail?.pageTitle.replace(
                            '{title}',
                            'Post Title'
                        );
                }
            })}
        </h1>
    `;
});
