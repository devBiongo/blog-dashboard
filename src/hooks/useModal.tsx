/** @format */

import { create } from 'zustand';

interface ModalStore {
    slot: React.ReactNode;
    isOpen: boolean;
    onOpen: (props: { width?: number; title: string; description?: string; slot: React.ReactNode }) => void;
    onClose: () => void;
    width: number;
    title: string;
    description: string;
}

export const useModal = create<ModalStore>((set) => ({
    slot: <></>,
    isOpen: false,
    width: 500,
    title: '',
    description: '',
    onOpen(props) {
        set({ ...props, isOpen: true });
    },
    onClose() {
        set({ isOpen: false, slot: <></>, width: 500, title: '', description: '' });
    },
}));
