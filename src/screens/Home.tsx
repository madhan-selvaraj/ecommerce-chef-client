import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CommonActions } from "@react-navigation/native";
import { useMemo } from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Menu from "./Menu";
import Orders from "./Orders";
import Dashboard from "./Dashboard";

const Home = () => {
  const BottomTab = useMemo(() => createBottomTabNavigator(), []);

  return (
    <>
      <BottomTab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
            navigationState={state}
            safeAreaInsets={insets}
            onTabPress={({ route, preventDefault }) => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (event.defaultPrevented) {
                preventDefault();
              } else {
                navigation.dispatch({
                  ...CommonActions.navigate(route.name, route.params),
                  target: state.key,
                });
              }
            }}
            renderIcon={({ route, focused, color }) => {
              const { options }: any = descriptors[route.key];
              if (options.tabBarIcon) {
                return options.tabBarIcon({ focused, color, size: 24 });
              }

              return null;
            }}
            getLabelText={({ route }) => route.name}
            shifting
          />
        )}
      >
        <BottomTab.Screen
          name="Orders"
          component={Orders}
          options={{
            tabBarLabel: "Orders",
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Icon
                  name={focused ? "clipboard-list" : "clipboard-list-outline"}
                  size={size}
                  color={color}
                />
              );
            },
          }}
        />
        <BottomTab.Screen
          name="PreOrders"
          component={Orders}
          options={{
            tabBarLabel: "Preorders",
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Icon
                  name={focused ? "book-clock" : "book-clock-outline"}
                  size={size}
                  color={color}
                />
              );
            },
          }}
        />
        <BottomTab.Screen
          name="Menu"
          component={Menu}
          options={{
            tabBarLabel: "Menus",
            tabBarIcon: ({ color, size }) => {
              return (
                <Icon name="format-list-bulleted" size={size} color={color} />
              );
            },
          }}
        />
        <BottomTab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarLabel: "Dashboard",
            tabBarIcon: ({ color, size }) => {
              return <Icon name="view-dashboard" size={size} color={color} />;
            },
          }}
        />
      </BottomTab.Navigator>
    </>
  );
};

export default Home;
