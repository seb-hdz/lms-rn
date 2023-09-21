import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
    </>
  );
};

export default Providers;
