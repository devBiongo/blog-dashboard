/** @format */
'use client';

import { useModal } from '@/hooks/useModal';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export function ShadcnModal() {
    const { isOpen, onClose, slot, width, title, description } = useModal();
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent style={{ maxWidth: width || 500 }}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <div>{slot}</div>
            </DialogContent>
        </Dialog>
    );
}
