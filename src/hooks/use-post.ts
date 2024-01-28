import { postActivity } from '../activities/post-activity';

export const usePost = ({ id }: { id?: string }) => {
    const { update } = postActivity;
    update(id);
};
