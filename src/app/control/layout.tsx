/** @format */

import Sidebar from '@/components/control/Sidebar';
import BlogAvatar from '@/components/dashboard/BlogAvatar';
import UserAvatar from '@/components/dashboard/UserAvatar';
import { initUser } from '@/lib/initializeUser';

export default async function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const user = await initUser();
    if (!user) {
        return <div>error</div>;
    }
    return (
        <div className='flex flex-col h-full'>
            <div className='flex-1'>
                <div className='h-[80px] fixed inset-y-0 w-full z-[49]'>
                    <div className='p-4 gap-x-4 h-full flex items-center bg-white border-b'>
                        <div className='p-1 gap-x-4 h-full flex justify-between items-center bg-white w-full'>
                            {/* 个人简介 */}
                            <BlogAvatar />
                            <UserAvatar user={user} />
                        </div>
                    </div>
                </div>
                <div className='hidden lg:flex pt-[80px] h-full w-72 flex-col fixed inset-y-0 z-[48]'>
                    <Sidebar />
                </div>
                <main className='lg:pl-72 pt-[80px] h-full bg-white'>{children}</main>
            </div>
        </div>
    );
}
