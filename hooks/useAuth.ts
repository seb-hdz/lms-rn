import { auth } from "@/config/firebase.config";
import { useAuthStore } from "@/stores/auth.store";
import { User, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useCallback, useMemo } from "react";

const useAuth = () => {
  const setUid = useAuthStore((s) => s.setUid);

  const subscriber = useCallback(async (user: User | null) => {
    if (!user) return;
    // actions to do with current auth firebase user
    const { uid } = user;
    setUid(uid);
  }, []);

  return useMemo(
    () => ({
      signOut: async () => {
        await signOut(auth);
        // other actions
      },
      registerWithAccount: async (email: string, password: string) => {
        try {
          const credentials = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          return credentials;
        } catch (err) {
          console.log({ err });
        }
      },
      signInWithAccount: async (email: string, password: string) => {
        try {
          const credentials = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          console.log({ credentials });
          return credentials;
        } catch (err) {
          console.log({ err });
        }
      },
      listenAuthState: () => auth.onAuthStateChanged(subscriber),
    }),
    []
  );
};

export default useAuth;
