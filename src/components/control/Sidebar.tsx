/** @format */
'use client';

import { useRouter } from 'next/navigation';
import { LuUsers2 } from 'react-icons/lu';
import { MdOutlineArticle } from 'react-icons/md';

const NavButton = ({ url, label, icon: Icon }: any) => {
    const router = useRouter();
    return (
        <button
            className='flex w-full text-sm text-muted-foreground items-center py-3.5 px-3 hover:bg-[#f1f5f9] rounded-lg transition-background group font-medium'
            onClick={() => {
                router.push(url);
            }}
        >
            <Icon className=' h-5 w-5 mr-2 text-primary animate-spin-once' />
            {label}
        </button>
    );
};
const Sidebar = () => {
    return (
        <div className='h-full flex flex-col bg-white border-r overflow-y-scroll'>
            <div className='flex flex-col w-full flex-1'>
                <div className='flex flex-col w-full space-y-1.5 p-3'>
                    <NavButton url='/control/user' label='用户管理' icon={LuUsers2} />
                    <NavButton url='/control/article' label='文章管理' icon={MdOutlineArticle} />
                </div>
            </div>
            <div className='p-3.5'></div>
            <div className='p-3.5 flex items-center justify-between'></div>
        </div>
    );
};

export default Sidebar;
