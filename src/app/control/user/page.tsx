/** @format */

import UserTable from '@/components/control/UserTable';
import { db } from '@/lib/db';

const page = async () => {
    const users = await db.user.findMany({});
    return (
        <div className='p-10'>
            <UserTable users={users} />
        </div>
    );
};

export default page;
