import { activity } from '@loom-js/core';

import { type User, getUser } from '@app/providers/user';

export const userActivity = activity<User | undefined, string>(
    undefined,
    async ({ update, input: id, value }) =>
        update(id === value?.id ? value : await getUser({ id }))
);
