import { postsActivity } from '../activities/posts-activity';
import { userActivity } from '../activities/user-activity';

export const usePosts = () => {
    const { update: updatePosts } = postsActivity;
    const { watch: watchUser } = userActivity;

    watchUser(({ value: user }) => updatePosts(user?.friends));
};
