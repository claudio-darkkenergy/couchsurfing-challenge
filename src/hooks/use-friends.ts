import { userActivity } from '../activities/user-activity';
import { friendsActivity } from '@app/activities/friends-activity';

export const useFriends = () => {
    const { update: updateFriends } = friendsActivity;
    const { watch: watchUser } = userActivity;

    watchUser(({ value: user }) => updateFriends(user?.friends));
};
