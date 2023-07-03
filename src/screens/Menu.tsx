import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Avatar,
  FAB,
  List,
  Searchbar,
  Switch,
  useTheme,
} from "react-native-paper";

const ListItem = ({
  name,
  price,
  image,
}: {
  name: string;
  price: number;
  image: string;
}) => (
  <List.Item
    title={name}
    description={`Rs. ${price}`}
    left={(props) => (
      <Avatar.Image
        source={{
          uri: image,
        }}
        {...props}
      />
    )}
    right={() => <Switch value={true} />}
  />
);

const Menu = ({ navigation }: any) => {
  const [value, setValue] = useState("");
  const [expanded, setExpanded] = useState<Array<string>>([
    "southindian",
    "northindian",
    "chinese",
  ]);
  const theme = useTheme();

  const accordionTitleStyle = { color: theme.colors.onBackground };

  const handlePress = (item: string) => {
    const temp = [...expanded];
    const isExpanded = expanded.includes(item);
    if (isExpanded) temp.splice(temp.indexOf(item), 1);
    else temp.push(item);
    setExpanded([...temp]);
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={setValue}
        value={value}
        style={{ marginHorizontal: 15, marginVertical: 10 }}
      />
      <ScrollView>
        <List.Accordion
          title="South Indian"
          id="southindian"
          expanded={expanded.includes("southindian")}
          onPress={() => handlePress("southindian")}
          titleStyle={accordionTitleStyle}
          // right={() => <Switch value={true} />}
        >
          <ListItem
            name="Idly"
            price={10}
            image="https://via.placeholder.com/50x50?text=Homee"
          />
          <ListItem
            name="Dosa"
            price={40}
            image="https://via.placeholder.com/50x50?text=Homee"
          />
        </List.Accordion>

        <List.Accordion
          title="North Indian"
          id="northindian"
          expanded={expanded.includes("northindian")}
          onPress={() => handlePress("northindian")}
          titleStyle={accordionTitleStyle}
          // right={() => <Switch value={true} />}
        >
          <ListItem
            name="Naan"
            price={70}
            image="https://via.placeholder.com/50x50?text=Homee"
          />
        </List.Accordion>

        <List.Accordion
          title="Chinese"
          id="chinese"
          expanded={expanded.includes("chinese")}
          onPress={() => handlePress("chinese")}
          titleStyle={accordionTitleStyle}
          // right={() => <Switch value={true} />}
        >
          <ListItem
            name="Chicken Fried Rice"
            price={100}
            image="https://via.placeholder.com/50x50?text=Homee"
          />
          <ListItem
            name="Chicken Noodles"
            price={100}
            image="https://via.placeholder.com/50x50?text=Homee"
          />
          <ListItem
            name="Chicken Schezwan Fried Rice"
            price={120}
            image="https://via.placeholder.com/50x50?text=Homee"
          />
        </List.Accordion>
      </ScrollView>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.push("Add_Menu")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Menu;
