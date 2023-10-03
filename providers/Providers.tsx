import useAuth from "@/hooks/useAuth";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useEffect } from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const { listenAuthState } = useAuth();

  useEffect(() => {
    listenAuthState();
  }, []);

  return (
    <>
      <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
    </>
  );
};

export default Providers;
