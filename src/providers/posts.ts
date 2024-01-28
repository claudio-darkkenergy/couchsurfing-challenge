import posts from '../db/posts.json';

export interface Post {
    body: string;
    id: string;
    title: string;
    userId: string;
}

interface GetPostResponse {
    data: Post[];
}

/**
 * Fetches & returns a list of posts for a subset of users.
 */
export const getPosts = async ({ ids }: { ids: string[] }) => {
    const { data } = await Promise.resolve<GetPostResponse>({ data: posts });
    return data.filter((post) => ids.includes(post.userId));
};

/**
 * Fetches & returns a single post.
 */
export const getPost = async ({ id }: { id: string }) => {
    const { data } = await Promise.resolve<GetPostResponse>({ data: posts });
    return data.find((post) => post.id === id);
};
