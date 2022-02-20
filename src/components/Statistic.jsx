import { View, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  alignment: {
    alignSelf: "center",
  },
});

const formatThousands = (number) => {
  if (number >= 1000) {
    number = Math.round(number / 100) * 100;
    number = Math.sign(number) * (Math.abs(number) / 1000).toFixed(1);
    return `${number}k`;
  }
  return number;
};

const Statistic = ({ number, label }) => {
  number = formatThousands(number);

  return (
    <View>
      <Text fontWeight="bold" style={styles.alignment}>
        {number}
      </Text>
      <Text>{label}</Text>
    </View>
  );
};

export default Statistic;
