import { component } from '@loom-js/core';

import { type Post } from '../../providers/posts';
import { User } from '../../providers/user';

export type PostSummaryProps = Pick<Post, 'id' | 'title'> & { user?: User };

export const PostSummary = component<PostSummaryProps>(
    (html, { id, title, user }) => {
        const postLink = `/posts/${id}`;

        return html`
            <li class="clickable-list-item">
                <a href=${postLink} class="clickable-list-button">
                    <h5 class="clickable-list-title u-trim-1">
                        <span class="">${user?.username}</span>
                        <span class="clickable-list-title-sep">|</span>
                        <span class="">${title}</span>
                    </h5>
                </a>
            </li>
        `;
    }
);
