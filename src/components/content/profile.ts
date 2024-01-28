import { component, onRoute } from '@loom-js/core';

import { postsActivity } from '../../activities/posts-activity';
import { userActivity } from '../../activities/user-activity';

export const Profile = component((html) => {
    const { effect: userEffect, value: getUserValue } = userActivity;
    const { effect: postsEffect } = postsActivity;
    const copyUserId = () => {
        const user = getUserValue();
        user && window.navigator.clipboard.writeText(user.username);
    };

    return html`
        <div class="card">
            <div class="user-profile">
                <span class="avatar">
                    ${userEffect(() => {
                        return 'CN';
                    })}
                </span>
                <span class="user-profile-info">
                    <span class="name">
                        ${userEffect(({ value: user }) => user?.name)}
                    </span>
                    <div class="interactive-text-output u-padding-inline-0">
                        <span class="text" id="copy-username">
                            Copy Username
                        </span>
                        <div class="u-flex u-cross-child-start u-gap-8">
                            <button
                                $click=${copyUserId}
                                aria-labelledby="copy-username"
                                class="interactive-text-output-button"
                            >
                                <span
                                    aria-hidden="true"
                                    class="icon-duplicate"
                                ></span>
                            </button>
                        </div>
                    </div>
                </span>
                <span class="user-profile-sep"></span>
                <span class="user-profile-empty-column"></span>
                <span class="user-profile-info">
                    <span class="text">
                        Bio: ${userEffect(({ value: user }) => user?.bio)}
                    </span>
                    <span class="u-margin-block-start-8 text">
                        Email: ${userEffect(({ value: user }) => user?.email)}
                    </span>
                    <span class="u-margin-block-start-8 text" id="friend-posts">
                        Friend Posts:
                        <a
                            $click=${onRoute}
                            aria-labelledby="friend-posts"
                            class="link"
                            href="/posts"
                        >
                            ${postsEffect(({ value: posts }) => posts.length)}
                        </a>
                    </span>
                </span>
            </div>
        </div>
    `;
});
