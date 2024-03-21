/** @format */

import { TopHeader } from '@/components/header/TopHeader';

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='h-full'>
            <TopHeader />
            <div className='xl:px-[130px] py-5'>{children}</div>
        </div>
    );
}
