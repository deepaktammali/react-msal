import { create } from "zustand";

export interface AuthState {
    isAuthenticated: boolean;
    signedIn: () => void
    signedOut: () => void
}

const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    signedIn: () => {
        set({
            isAuthenticated: true
        })
    },
    signedOut: () => {
        set({
            isAuthenticated: false
        })
    }
}))

export { useAuthStore }