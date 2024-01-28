import { activity } from '@loom-js/core';

import { getFriends, type User } from '@app/providers/user';

export const friendsActivity = activity<User[], User['friends'] | undefined>(
    [],
    async ({ input = [], update }) => update(await getFriends({ ids: input }))
);
