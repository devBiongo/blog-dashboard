/** @format */

import { NextResponse } from 'next/server';

import { db } from '@/lib/db';

export async function POST(req: Request) {
    try {
        const { articleTitle, articleCoverUrl, articleContent } = await req.json();
        const article = await db.article.create({
            data: {
                userId: '1',
                articleTitle,
                articleCoverUrl,
                articleContent,
                articleViews: 0,
                articleCommentCount: 0,
                articleLikeCount: 0,
            },
        });

        return NextResponse.json(article);
    } catch (error) {
        console.log('CHANNELS_POST', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
