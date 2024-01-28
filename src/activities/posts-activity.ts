import { activity } from '@loom-js/core';

import { getPosts, type Post } from '@app/providers/posts';

export const postsActivity = activity<Post[], string[] | undefined>(
    [],
    async ({ input = [], update }) => update(await getPosts({ ids: input }))
);
