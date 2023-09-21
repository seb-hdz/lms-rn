import { useMemo } from "react";
import { Text as RNText } from "react-native";

type RNTextProps = RNText["props"];

export type FontWeight = "light" | "regular" | "medium" | "semiBold";
export type TextVariant =
  | "title"
  | "titleLarge"
  | "titleXLarge"
  | "subtitle"
  | "subtitleSmall"
  | "body"
  | "bodySmall"
  | "caption";

export interface TextProps extends RNTextProps {
  children: React.ReactNode;
  className?: string;
  fontWeight?: FontWeight;
  variant?: TextVariant;
}

const Text = (props: TextProps) => {
  const { children, className, style, ...rest } = props;
  const { fontWeight = "regular", variant = "body" } = props;

  const fontFamily = useMemo(() => {
    switch (fontWeight) {
      case "light":
        return "Outfit-Light";
      case "regular":
        return "Outfit-Regular";
      case "medium":
        return "Outfit-Medium";
      case "semiBold":
        return "Outfit-SemiBold";
      default:
        return "Outfit-Regular";
    }
  }, []);

  return (
    <RNText
      className={["text-onSurface", className].join(" ").trim()}
      style={[{ fontFamily }, style]}
      {...rest}
    >
      {children}
    </RNText>
  );
};

export default Text;
