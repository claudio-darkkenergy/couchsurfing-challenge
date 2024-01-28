import users from '../db/users.json';

export interface User {
    bio: string;
    email: string;
    friends: string[];
    id: string;
    name: string;
    username: string;
}

interface GetUsersResponse {
    data: User[];
}

/**
 * Fetches & returns a list of user friends.
 */
export const getFriends = async ({ ids }: { ids: User['friends'] }) => {
    const { data } = await Promise.resolve<GetUsersResponse>({ data: users });
    return data.filter((user) => ids.includes(user.id));
};

/**
 * Fetches & returns a single user.
 */
export const getUser = async ({ id }: { id: string }) => {
    const { data } = await Promise.resolve<GetUsersResponse>({ data: users });
    return data.find((user) => user.id === id);
};
