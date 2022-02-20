import { Text as NativeText, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
    marginBottom: theme.spacing.medium,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  tag: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    alignSelf: "flex-start",
    borderRadius: 4,
    padding: theme.spacing.medium,
  },
  colorWhite: {
    color: theme.colors.white,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeHeading: {
    fontSize: theme.fontSizes.heading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({
  color,
  fontSize,
  fontWeight,
  backgroundColor,
  tag,
  style,
  ...props
}) => {
  const textStyle = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    color === "white" && styles.colorWhite,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontSize === "heading" && styles.fontSizeHeading,
    fontWeight === "bold" && styles.fontWeightBold,
    tag === "true" && styles.tag,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
