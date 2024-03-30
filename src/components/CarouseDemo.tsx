/** @format */

'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Article } from '@prisma/client';

function CarouselDemo({ articles }: { articles: Article[] }) {
    return (
        <>
            <Swiper
                className='rounded overflow-hidden'
                modules={[Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {articles.slice(0, 4).map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className='w-full text-white px-10 py-10 '
                        style={{
                            backgroundImage: `url('/api/image/${item.articleCoverUrl}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: 500,
                        }}
                    >
                        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent  to-[#1c1b1b] '></div>

                        <div className='flex flex-col justify-end h-full relative z-9'>
                            <p className=' font-bold text-3xl mb-3'>Mongoose</p>
                            <span>Mongoose 提供了一种直接的、基于模式的解决方案来对应用程序数据进行建模。</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default CarouselDemo;
