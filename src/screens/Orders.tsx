import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScrollView, StyleSheet, View } from "react-native";
import { Badge, SegmentedButtons } from "react-native-paper";
import OrderCard from "../components/OrderCard";
import orders from "../mock/orders";
import { useState } from "react";

const TabNavigator = createMaterialTopTabNavigator();

const OrderPage = () => (
  <ScrollView>
    {orders.map((order) => (
      <OrderCard
        key={order.id}
        order={order}
        type="NEW"
        onOk={() => console.log("Accepted")}
      />
    ))}
  </ScrollView>
);

const Orders = () => {
  const [value, setValue] = useState("new");
  return (
    <View style={styles.container}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: "new",
            label: "New",
          },
          {
            value: "accepted",
            label: "Accepted",
          },
          { value: "ready", label: "Ready" },
        ]}
        density="medium"
        style={{ padding: 10 }}
      />
      <OrderPage />
      {/* <TabNavigator.Navigator
        screenOptions={{
          tabBarBadge: () => <Badge size={10} />,
        }}
      >
        <TabNavigator.Screen
          name="New Orders"
          component={OrderPage}
          initialParams={{ type: "NEW" }}
        />
        <TabNavigator.Screen
          name="Accepted"
          component={OrderPage}
          initialParams={{ type: "ACCEPTED" }}
        />
        <TabNavigator.Screen
          name="Ready"
          component={OrderPage}
          initialParams={{ type: "READY" }}
        />
      </TabNavigator.Navigator> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Orders;
