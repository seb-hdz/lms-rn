import React, { useMemo } from "react";
import { TouchableOpacity } from "react-native";
import { useAnimatedStyle } from "react-native-reanimated";
import Animated, { Extrapolate, interpolate } from "react-native-reanimated";
import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";

export interface BackdropProps {
  /** Callback when backdrop is pressed */
  onPress?: () => void;
}

const Backdrop = (props: BottomSheetBackdropProps & BackdropProps) => {
  const { animatedIndex, style, onPress } = props;

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex?.value,
      [-1, 0, 1],
      [0.05, 0.5, 0.5],
      Extrapolate.CLAMP
    ),
    zIndex: interpolate(
      animatedIndex?.value,
      [-1, 0, 1],
      [-1, 0, 0],
      Extrapolate.EXTEND
    ),
  }));

  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: "#000",
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle]
  );

  return (
    <Animated.View style={containerStyle}>
      <TouchableOpacity
        onPress={onPress}
        style={{ width: "100%", height: "100%" }}
      />
    </Animated.View>
  );
};

export default Backdrop;
