import { component, onRoute } from '@loom-js/core';

import { friendsActivity } from '../../activities/friends-activity';
import { postActivity } from '../../activities/post-activity';
import { usePost } from '../../hooks/use-post';
import { type Post } from '../../providers/posts';

export interface PostDetailProps {
    id?: Post['id'];
}

export const PostDetail = component<PostDetailProps>(
    (html, { id, onCreated, onUnmounted }) => {
        const { effect: postEffect, reset: resetPost } = postActivity;
        const { effect: friendsEffect } = friendsActivity;

        onCreated(() => usePost({ id }));
        onUnmounted(() => resetPost());

        return html`<>
            <a $click=${onRoute} class="link" href="/posts">
                Back to Posts
            </a>
            <article class="card">
                <div class="text">
                    Posted by:
                    ${friendsEffect(({ value: friends }) =>
                        postEffect(
                            ({ value: post }) =>
                                friends.find(
                                    (friend) => friend.id === post?.userId
                                )?.username
                        )
                    )}
                </div>
                <div class="text">
                    Created on:
                    ${postEffect(({ value: _post }) => new Date().toDateString())}
                </div>
                <p class="u-margin-block-start-20">
                    ${postEffect(({ value: post }) => post?.body)}
                </p>
            </article>
        </>`;
    }
);
