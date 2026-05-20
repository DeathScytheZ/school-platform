declare global {
    namespace APP {
        interface Locals {
            user: { id: string, role: string } | null;
        }
    }
}

export {};
