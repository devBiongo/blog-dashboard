/** @format */

import { getCurrentUser } from './getCurrentUser';

export const judge = async () => {
    const user = await getCurrentUser();
    if (!user) {
        throw "didn't Authenticated";
    }

    if (user.userIp !== '666') {
        throw 'only the website administrator can edit';
    }

    return user;
};
