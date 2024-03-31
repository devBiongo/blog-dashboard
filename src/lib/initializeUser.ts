/** @format */

import { db } from '@/lib/db';
import { currentUser } from '@clerk/nextjs';

export const initUser = async () => {
    const user = await currentUser();

    user;

    if (!user) {
        return null;
    }

    const blogUser = await db.user.findUnique({
        where: {
            id: user.id,
        },
    });

    if (blogUser) {
        return blogUser;
    }

    const newBlogUser = await db.user.create({
        data: {
            id: user.id,
            userIp: '',
            username: '',
            password: '',
            userEmail: user.emailAddresses[0].emailAddress,
            userProfilePhoto: user.imageUrl,
            userTelephoneNumber: 1,
            userNickname: `${user.firstName} ${user.lastName}`,
        },
    });
    return newBlogUser;
};
