import { component, onRoute } from '@loom-js/core';

import { friendsActivity } from '../../activities/friends-activity';
import { postsActivity } from '../../activities/posts-activity';
import { PostSummary } from './post-summary';

export const Posts = component((html) => {
    const { effect: postsEffect } = postsActivity;
    const { effect: friendsEffect } = friendsActivity;

    return html`
        <div>
            <a $click=${onRoute} class="link" href="/profile">
                Back to Profile
            </a>
            <ul class="clickable-list">
                ${friendsEffect(({ value: friends }) =>
                    postsEffect(({ value: posts }) => {
                        if (!posts.length) {
                            console.log('loading posts');
                            return 'Loading Posts...';
                        }

                        return posts.map(({ id, title, userId }) => {
                            const user = friends.find(
                                (friend) => friend.id === userId
                            );
                            return PostSummary({ id, title, user });
                        });
                    })
                )}
            </ul>
        </div>
    `;
});
