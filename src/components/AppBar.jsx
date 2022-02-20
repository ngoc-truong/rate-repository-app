import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppTab from "./AppTab";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    padding: 24,
    paddingLeft: 16,
    backgroundColor: theme.colors.background,
    display: "flex",
    flexDirection: "row",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppTab name="Repositories" route="/" />
        <AppTab name="Sign In" route="/signin" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
