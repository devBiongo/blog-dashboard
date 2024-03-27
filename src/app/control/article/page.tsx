/** @format */

import Article from '@/components/control/Article';
import { db } from '@/lib/db';

async function page() {
    const articles = await db.article.findMany({
        where: {},
    });

    return <Article articles={articles} />;
}

export default page;
