/** @format */

import { NextResponse } from 'next/server';

import { db } from '@/lib/db';
import { redirect } from 'next/navigation';

export async function GET(req: Request, { params }: { params: { articleId: string } }) {
    try {
        const article = await db.article.delete({
            where: {
                id: params.articleId,
            },
        });
        return NextResponse.json(article);
    } catch (error) {
        console.log('CHANNELS_POST', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
