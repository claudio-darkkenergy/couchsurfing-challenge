import { activity } from '@loom-js/core';

import { type Post, getPost } from '@app/providers/posts';

export const postActivity = activity<Post | undefined, string | undefined>(
    undefined,
    async ({ update, input: id, value }) => {
        if (id === undefined) {
            update(undefined);
        } else {
            update(id === value?.id ? value : await getPost({ id }));
        }
    }
);
