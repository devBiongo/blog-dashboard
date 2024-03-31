/** @format */

import { NextResponse } from 'next/server';

import { db } from '@/lib/db';
import { getCurrentUser } from '@/lib/getCurrentUser';
import { judge } from '@/lib/judge';

export async function POST(req: Request) {
    try {
        const user = await judge();

        const { articleTitle, articleCoverUrl, articleContentUrl } = await req.json();
        const article = await db.article.create({
            data: {
                userId: user.id,
                articleTitle,
                articleCoverUrl,
                articleContentUrl,
                articleViews: 0,
                articleCommentCount: 0,
                articleLikeCount: 0,
            },
        });

        return NextResponse.json(article);
    } catch (error) {
        console.log('CHANNELS_POST', error);
        return new NextResponse(String(error), { status: 500 });
    }
}
