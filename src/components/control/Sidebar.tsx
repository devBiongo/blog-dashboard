/** @format */

'use client';

import { useRouter } from 'next/navigation';
import { LuUsers2 } from 'react-icons/lu';
import { MdOutlineArticle } from 'react-icons/md';

const NavButton = ({ url, label, icon: Icon }: any) => {
    const router = useRouter();

    return (
        <button
            className='flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none'
            onClick={() => {
                router.push(url);
            }}
        >
            <div className='grid place-items-center mr-4'>
                <Icon className=' h-5 w-5 mr-2 text-primary animate-spin-once' />
            </div>
            {label}
        </button>
    );
};

const Sidebar = () => {
    return (
        <div className='relative flex flex-col bg-clip-border  bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4  border-r  overflow-x-hidden'>
            <nav className='flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700'>
                <NavButton url='/control/user' label='用户管理' icon={LuUsers2} />
                <NavButton url='/control/article' label='文章管理' icon={MdOutlineArticle} />
                <NavButton url='/control/comps' label='组件一览' icon={MdOutlineArticle} />
            </nav>
        </div>
    );
};

export default Sidebar;
