import { component } from '@loom-js/core';
import classNames from 'classnames';

import { useFriends } from '../../hooks/use-friends';
import { usePosts } from '../../hooks/use-posts';
import { useUser } from '../../hooks/use-user';
import { AppRoutes } from '../../routes/app-routes';
import styles from './content.module.css';

interface ContentProps {
    id: string;
}

export const Content = component<ContentProps>(
    (html, { id = '1', onCreated }) => {
        onCreated(() => {
            useUser({ id });
            useFriends();
            usePosts();
        });

        return html`
            <section
                class=${classNames(
                    'container u-margin-block-start-8',
                    styles.content
                )}
            >
                ${AppRoutes()}
            </section>
        `;
    }
);
