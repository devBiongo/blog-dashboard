/** @format */

import { getCurrentUser } from './getCurrentUser';

export default async function checkAdmin() {
    const user = await getCurrentUser();
    if (!user) {
        return false;
    }
    return user.userIp === '666';
}
