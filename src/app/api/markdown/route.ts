/** @format */

import { minioClient } from '@/lib/file-uploader';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import mime from 'mime';
import { judge } from '@/lib/judge';

export async function POST(req: Request) {
    const user = await judge();
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    if (!file) {
        return NextResponse.json({ error: 'field file not empty' }, { status: 400 });
    }

    let extension = mime.getExtension(file?.type || '');

    if (file?.name) {
        extension = file?.name.split('.')[1];
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    try {
        const fileName = `${uuidv4()}.${extension}`;
        await minioClient.putObject('blog-dashboard', `/markdown/${fileName}`, buffer);
        return NextResponse.json({ fileName });
    } catch (error) {
        console.log('CHANNELS_POST', error);
        return new NextResponse(String(error), { status: 500 });
    }
}
