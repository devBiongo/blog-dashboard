/** @format */

import { create } from 'zustand';

interface ModalStore {
    slot: React.ReactNode;
    isOpen: boolean;
    onOpen: (slot: React.ReactNode) => void;
    onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
    slot: undefined,
    isOpen: false,
    onOpen(slot) {
        set({ isOpen: true, slot });
    },
    onClose() {
        set({ isOpen: false, slot: <></> });
    },
}));
