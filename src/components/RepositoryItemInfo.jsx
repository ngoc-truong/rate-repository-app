import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 4,
    marginRight: theme.spacing.big,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
  },
  wrap: {
    flex: 1,
  },
});

const RepositoryItemInfo = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
}) => {
  return (
    <View style={styles.flex}>
      <Image
        style={styles.avatar}
        source={{
          uri: ownerAvatarUrl,
        }}
      />
      <View style={styles.wrap}>
        <Text fontWeight="bold">{fullName}</Text>
        <Text color="textSecondary">{description}</Text>
        <Text color="white" backgroundColor="primary" tag="true">
          {language}
        </Text>
      </View>
    </View>
  );
};

export default RepositoryItemInfo;
