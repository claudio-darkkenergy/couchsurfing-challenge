import { userActivity } from '../activities/user-activity';

export const useUser = ({ id }: { id: string }) => {
    const { update } = userActivity;
    update(id);
};
