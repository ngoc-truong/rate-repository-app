import { Pressable, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  spacing: {
    marginRight: theme.spacing.big,
  },
});

const AppTab = ({ name, route }) => {
  return (
    <Pressable style={styles.spacing}>
      <Link to={route}>
        <Text fontSize="subheading" fontWeight="bold" color="white">
          {name}
        </Text>
      </Link>
    </Pressable>
  );
};

export default AppTab;
