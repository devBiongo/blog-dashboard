/** @format */

export default function Page() {
    return (
        <div className='md:flex xl:w-[85vw] w-full gap-x-5 max-xl:px-1 max-xl:overflow-hidden'>
            <div className='flex flex-col md:w-[65vw] h-auto relative dark:rounded-md gap-y-5 dark:border-none'>
                <div className='h-[380px] bg-white shadow'></div>
            </div>
            <div className='md:flex-1 max-md:hidden w-[100vw] max-sm:mt-5 space-y-5 dark:text-white/80 '>
                <div className='w-full bg-white  min-h-[40vh] mb-1 0 flex flex-col items-center gap-3 dark:bg-dark-200  p-5 shadow  rounded-md bg-light dark:border-none'></div>
                <div className='w-full bg-white  min-h-[40vh] mb-1 0 flex flex-col items-center gap-3 dark:bg-dark-200  p-5 shadow  rounded-md bg-light dark:border-none'></div>
            </div>
        </div>
    );
}
