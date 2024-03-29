/** @format */

import { minioClient } from '@/lib/file-uploader';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { fileName: string } }) {
    const blob = await minioClient.getObject('blog-dashboard', `/image/${params.fileName}`);
    const headers = new Headers();
    // headers.set('Content-Type', 'image/*');
    headers.set('content-Type', 'text/plain'); // 默认动作是浏览器展示

    return new NextResponse(blob, { status: 200, statusText: 'OK', headers });
}
