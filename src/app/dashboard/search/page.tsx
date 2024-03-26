/** @format */
import Image from 'next/image';

export default function Page() {
    return (
        <div className='flex flex-col items-center'>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

function Card() {
    return (
        <div style={{ opacity: 1, transform: 'none' }} className=''>
            <div className='border flex  lg:p-5 lg:w-[50vw] md:w-[70vw] sm:w-[80vw] w-screen max-sm:overflow-hidden container-box overflow-hidden hover:translate-x-2 transition-all ease duration-300 relative'>
                <div className='w-1/2 flex flex-col gap-5 justify-center px-5  '>
                    <a href='/posts/功能备忘录'>
                        <h1 className='text-2xl'>开发功能备忘录</h1>
                    </a>
                    <p className='text-lg'></p>
                    <div className=' space-x-2 max-sm:space-x-1'>
                        <a
                            className=' capitalize text-accent dark:text-accentDark font-semibold text-sm hover:underline z-10'
                            href='/tags/前端'
                        >
                            前端
                        </a>
                        <a
                            className=' capitalize text-accent dark:text-accentDark font-semibold text-sm hover:underline z-10'
                            href='/tags/后端'
                        >
                            后端
                        </a>
                    </div>
                    <p className='text-base text-zinc-400'>2023-12-24</p>
                </div>
                <div className='w-1/2 h-[200px] relative'>
                    <a href='/posts/功能备忘录'>
                        <Image
                            alt='Tailwindcss'
                            loading='lazy'
                            width='1024'
                            height='1024'
                            decoding='async'
                            data-nimg='fill'
                            sizes='100vw'
                            className='duration-700 ease-in-out scale-100 blur-0 grayscale-0 object-cover'
                            src='/1.webp'
                            style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent' }}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
