/** @format */

import { SearchButton } from '../SearchButton';
import { NavigationMenuDemo } from './components/NavigationMenu';

/** @format */
export const TopHeader = () => {
    return (
        <div className='h-[65px] bg-white shadow xl:px-[130px] flex justify-between items-center sticky inset-0 px-2 z-[10]'>
            <p className='text-xl text-center'>ビンゴのＢＬＯＧ</p>
            <NavigationMenuDemo />
            <SearchButton data={{} as any} />
        </div>
    );
};