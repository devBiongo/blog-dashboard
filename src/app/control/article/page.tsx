/** @format */

import Article from '@/components/control/Article';
import checkAdmin from '@/lib/checkAdmin';
import { db } from '@/lib/db';

async function page() {
    const articles = await db.article.findMany({
        where: {},
        include: {
            User: true,
        },
    });

    return <Article articles={articles} isAdmin={await checkAdmin()} />;
}

export default page;
