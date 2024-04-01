/** @format */

import UserTable from '@/components/control/UserTable';
import checkAdmin from '@/lib/checkAdmin';
import { db } from '@/lib/db';

const page = async () => {
    if (!(await checkAdmin())) {
        return <div className='p-10'>403 only admin can open it</div>;
    }
    const users = await db.user.findMany({});
    return (
        <div className='p-10'>
            <UserTable users={users} />
        </div>
    );
};

export default page;
