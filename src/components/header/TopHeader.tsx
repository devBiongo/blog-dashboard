/** @format */

import Link from 'next/link';
import { SearchButton } from '../SearchButton';
import { NavigationMenuDemo } from './components/NavigationMenu';
import { AiOutlineMenu } from 'react-icons/ai';

/** @format */
export const TopHeader = () => {
    return (
        <div className='h-[65px] bg-white shadow xl:px-[130px] flex justify-between items-center sticky inset-0 px-2 z-[10]'>
            <Link href='/dashboard' className='text-xl text-center max-lg:hidden hover:text-[#4074a1]'>
                ビンゴのＢＬＯＧ
            </Link>
            <AiOutlineMenu className='lg:hidden mx-3 text-xl' />
            <NavigationMenuDemo />
            <SearchButton data={{} as any} />
        </div>
    );
};
