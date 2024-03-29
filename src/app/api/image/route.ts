/** @format */

import { minioClient } from '@/lib/file-uploader';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import mime from 'mime';

export async function POST(req: Request) {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    if (!file) {
        return NextResponse.json({ error: 'field file not empty' }, { status: 400 });
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    try {
        const fileName = `${uuidv4()}.${mime.getExtension(file.type)}`;
        await minioClient.putObject('blog-dashboard', `/image/${fileName}`, buffer);
        return NextResponse.json({ fileName });
    } catch (error) {
        console.log('CHANNELS_POST', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
