/** @format */

import Sidebar from '@/components/control/Sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='flex flex-col h-full'>
            <div className='flex-1'>
                <div className='h-[80px] fixed inset-y-0 w-full z-[49]'>
                    <div className='p-4 gap-x-4 h-full flex items-center bg-white border-b'>
                        <div className='p-1 gap-x-4 h-full flex items-center bg-white'>
                            {/* 个人简介 */}

                            <Link href='/dashboard'>
                                <div className='items-center gap-x-2 hidden lg:flex hover:opacity-75 transition-opacity'>
                                    <Avatar>
                                        <AvatarImage
                                            src='https://avatars.githubusercontent.com/u/131579909?s=400&u=5fce1774a77c3a81dddbb1f2fb8cdccf6465337e&v=4'
                                            alt='@biongo'
                                        />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className=' scale-90'>
                                        <p className='font-semibold text-base text-sky-700'>Lets cooking</p>
                                        <p className='text-xs text-muted-foreground'>cooking something great!</p>
                                    </div>
                                </div>
                            </Link>
                            {/* trigger */}
                            <button className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 lg:hidden pr-4 hover:opacity-75 transition'>
                                <AiOutlineMenu className='text-[1.3rem] text-black' />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='hidden lg:flex pt-[80px] h-full w-72 flex-col fixed inset-y-0 z-[48]'>
                    <Sidebar />
                </div>
                <main className='lg:pl-72 pt-[80px] h-full'>{children}</main>
            </div>
        </div>
    );
}
