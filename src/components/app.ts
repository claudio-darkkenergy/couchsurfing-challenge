import { component } from '@loom-js/core';

import styles from './app.module.css';
import { Content } from './container/content';
import { PageTitle } from './content/page-title';

export const App = component((html) => {
    return html`
        <div class=${styles.app}>
            <header class="u-padding-block-8">${PageTitle()}</header>
            <main>${Content()}</main>
            <footer class="u-padding-block-end-32">
                &copy; Claudio Nuñez Jr., 2024
            </footer>
        </div>
    `;
});
