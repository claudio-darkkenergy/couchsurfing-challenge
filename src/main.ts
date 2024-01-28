import '@appwrite.io/pink';
import '@appwrite.io/pink-icons';
import { init } from '@loom-js/core';

import { App } from './components/app';

new EventSource('/esbuild').addEventListener('change', () => location.reload());

const $app = document.createElement('div');

$app.style.padding = '0 1.25rem';
$app.innerText = 'loading...';

document.body.classList.add('theme-dark');
document.body.prepend($app);

// Bootstrap the app.
init({
    app: App(),
    globalConfig: {
        debug: false
    },
    root: $app
});
