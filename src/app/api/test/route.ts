/** @format */

import { NextResponse } from 'next/server';
import mime from 'mime';

export async function POST(req: Request) {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    let extension = mime.getExtension(file?.type || '');

    if (file?.name) {
        extension = file?.name.split('.')[1];
    }

    return NextResponse.json({ extension });
}
