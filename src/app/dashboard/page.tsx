/** @format */

import { CarouselDemo } from '@/components/CarouseDemo';

export default function Page() {
    return (
        <div className='flex w-full gap-x-5 '>
            <div className='flex flex-col md:w-[65vw]  gap-y-5 '>
                <div className='h-[400px] overflow-hidden border border-red-400'>
                    <CarouselDemo />
                </div>
                <div className='h-[50px] bg-white rounded shadow'></div>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 sm:gap-4 gap-2 w-full'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className='md:flex-1 max-md:hidden w-[35vw] max-sm:mt-5 space-y-5 dark:text-white/80'>
                <div className='w-full bg-white  min-h-[40vh] mb-1 0 flex flex-col items-center gap-3 dark:bg-dark-200  p-5 shadow  rounded-md bg-light dark:border-none'></div>
                <div className='w-full bg-white  min-h-[40vh] mb-1 0 flex flex-col items-center gap-3 dark:bg-dark-200  p-5 shadow  rounded-md bg-light dark:border-none'></div>
            </div>
        </div>
    );
}

const Card = () => (
    <div className='w-auto h-[355px]'>
        <div className='w-full h-full group flex flex-col p-1 dark:bg-dark-200  items-center shadow ring-dark rounded-md bg-white '></div>
    </div>
);
