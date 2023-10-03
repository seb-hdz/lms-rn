import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface AuthState {
  uid: string | undefined;
}

interface AuthActions {
  setUid: (uid: string) => void;
}

export const useAuthStore = create<AuthState & AuthActions>()(
  devtools(
    (set, get) => ({
      // state
      uid: undefined,
      // actions
      setUid: (uid: string | undefined) => set({ uid }),
    }),
    {
      name: "auth-store",
    }
  )
);
