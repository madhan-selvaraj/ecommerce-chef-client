import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const DummyRoute = (props: any) => {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">{props.route.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DummyRoute;
