import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { useImperativeHandle, useState } from "react";
import { ForwardRefRenderFunction, forwardRef, useRef } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Backdrop from "./Backdrop";
import { theme } from "@/constants/Colors";

export interface ModalMethods {
  openModal: () => void;
  closeModal: () => void;
}

export interface ModalProps {
  children: React.ReactNode;
  snapPoints?: string[];
  footerComponent?: React.ReactNode;
}

const Modal: ForwardRefRenderFunction<ModalMethods, ModalProps> = (
  props,
  ref
) => {
  const { children, snapPoints: snapPointsProps, footerComponent } = props;
  const [snapPoints, setSnapPoints] = useState(snapPointsProps ?? ["50%"]);
  const [toggleMaximize, setToggleMaximize] = useState(false);
  const sheetRef = useRef<BottomSheetModalMethods>(null);

  const closeBottomSheet = () => {
    if (!sheetRef.current) return;
    sheetRef.current.close();
  };

  const onPressModalHandle = () => {
    setToggleMaximize((prev) => !prev);

    if (toggleMaximize) {
      setSnapPoints(snapPointsProps ?? ["50%"]);
    } else {
      setSnapPoints(["95%"]);
    }
  };

  useImperativeHandle(ref, () => ({
    openModal: () => {
      if (!sheetRef.current) return;
      sheetRef.current.present();
    },
    closeModal: () => {
      if (!sheetRef.current) return;
      sheetRef.current.close();
    },
  }));

  return (
    <BottomSheetModal
      ref={sheetRef}
      snapPoints={snapPoints}
      backdropComponent={(props) => (
        <Backdrop {...props} onPress={closeBottomSheet} />
      )}
      handleComponent={() => (
        <TouchableOpacity
          className="w-full flex-row justify-center rounded-t-2xl pt-3 pb-2 bg-surface"
          onPress={onPressModalHandle}
        >
          <View className="w-10 h-1 rounded-sm bg-dimmed" />
        </TouchableOpacity>
      )}
      enablePanDownToClose
      backgroundStyle={styles.background}
    >
      <View className="p-4">{children}</View>
      <View className="absolute bottom-0 left-0 right-0">
        {footerComponent}
      </View>
    </BottomSheetModal>
  );
};

export default forwardRef<ModalMethods, ModalProps>(Modal);

const styles = StyleSheet.create({
  background: {
    backgroundColor: theme.surface,
    flex: 1,
  },
});
