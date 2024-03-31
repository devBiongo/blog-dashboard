/** @format */

import { SearchButton } from '@/components/SearchButton';
import LoginButton from '@/components/dashboard/LoginButton';
import UserAvatar from '@/components/dashboard/UserAvatar';
import Link from 'next/link';
import { initUser } from '@/lib/initializeUser';

export default async function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const user = await initUser();
    return (
        <div className='h-full'>
            <div className='h-[65px] bg-white shadow xl:px-[130px] flex justify-between items-center sticky inset-0 px-2 z-[10]'>
                <div>
                    <Link href='/dashboard' className='text-xl text-center max-lg:hidden hover:text-[#4074a1]'>
                        ビンゴのＢＬＯＧ
                    </Link>
                </div>
                <div className=' min-w-[300px]'>
                    <SearchButton data={{} as any} />
                </div>
                <div>{user ? <UserAvatar user={user} /> : <LoginButton />}</div>
            </div>
            <div className='xl:px-[130px] py-5'>{children}</div>
            {/* <div className=' bg-[#25282a] text-white  bottom-0 w-full'>
                <div className='flex justify-center'>
                    <ul className='flex justify-between gap-5 w-[500px] py-5'>
                        <li>
                            <ul className='flex flex-col gap-5 items-center'>
                                <li className='text-xl font-bold'>文章</li>
                                <li>分类</li>
                                <li>标签</li>
                                <li>归档</li>
                            </ul>
                        </li>
                        <li>
                            <ul className='flex flex-col gap-5 items-center'>
                                <li className='text-xl font-bold'>娱乐</li>
                                <li>电影</li>
                            </ul>
                        </li>
                        <li>
                            <ul className='flex flex-col gap-5 items-center'>
                                <li className='text-xl font-bold'>发现</li>
                                <li>学习网站</li>
                            </ul>
                        </li>
                        <li>
                            <ul className='flex flex-col gap-5 items-center'>
                                <li className='text-xl font-bold'>逛逛</li>
                                <li>友人帐</li>
                                <li>相册</li>
                                <li>留言板</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <p className='flex justify-center p-10'>Copyright @biongo</p>
            </div> */}
        </div>
    );
}
