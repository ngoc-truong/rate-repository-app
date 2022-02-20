import { View, Text, StyleSheet } from "react-native";
import RepositoryItemInfo from "./RepositoryItemInfo";
import Statistic from "./Statistic";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.big,
    marginBottom: theme.spacing.big,
    backgroundColor: "white",
  },
  statistics: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

const RepositoryItem = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}) => {
  return (
    <View style={styles.container}>
      <RepositoryItemInfo
        ownerAvatarUrl={ownerAvatarUrl}
        fullName={fullName}
        description={description}
        language={language}
      />
      <View style={styles.statistics}>
        <Statistic number={stargazersCount} label="Stars" />
        <Statistic number={forksCount} label="Forks" />
        <Statistic number={reviewCount} label="Reviews" />
        <Statistic number={ratingAverage} label="Rating" />
      </View>
    </View>
  );
};

export default RepositoryItem;
