import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Drawer as PaperDrawer } from "react-native-paper";

const Drawer = (props: DrawerContentComponentProps) => {
  const activeScreen = props.state.routeNames[props.state.index];

  return (
    <PaperDrawer.Section style={{ top: 50 }} showDivider={false}>
      <PaperDrawer.Item
        label="Home"
        active={activeScreen === "Home"}
        onPress={() => props.navigation.navigate("Home")}
        icon="home"
      />
      <PaperDrawer.Item
        label="Account"
        active={activeScreen === "Account"}
        onPress={() => props.navigation.navigate("Account")}
        icon="account"
      />
      <PaperDrawer.Item
        label="Order history"
        active={activeScreen === "Order History"}
        onPress={() => props.navigation.navigate("Order History")}
        icon="history"
      />
      <PaperDrawer.Item
        label="Insights"
        active={activeScreen === "Insights"}
        onPress={() => props.navigation.navigate("Insights")}
        icon="lightbulb-on"
      />
      <PaperDrawer.Item
        label="Promotions"
        active={activeScreen === "Promotions"}
        onPress={() => props.navigation.navigate("Promotions")}
        icon="map-marker-radius"
      />
      <PaperDrawer.Item
        label="Invoice"
        active={activeScreen === "Invoice"}
        onPress={() => props.navigation.navigate("Invoice")}
        icon="file-document"
      />
      <PaperDrawer.Item
        label="Support"
        active={activeScreen === "Support"}
        onPress={() => props.navigation.navigate("Support")}
        icon="chat"
      />
    </PaperDrawer.Section>
  );
};

export default Drawer;
