/** @format */

'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createInvoice() {
    try {
    } catch (error) {
        // If a database error occurs, return a more specific error.
        return {
            message: 'Database Error: Failed to Create Invoice.',
        };
    }

    // Revalidate the cache for the invoices page and redirect the user.
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
}
