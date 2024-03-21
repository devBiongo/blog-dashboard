/** @format */

import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export function CarouselDemo() {
    return (
        <Carousel className='w-full relative'>
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className='p-1'>
                            <Card className='s'>
                                <CardContent className='h-[400px] flex aspect-square items-center justify-center p-6'>
                                    <span className='text-4xl font-semibold'>{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className='left-3 top-[200px]' />
            <CarouselNext className='right-3 top-[200px]' />
        </Carousel>
    );
}
