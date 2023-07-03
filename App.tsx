import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  Provider as PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import Header from "./src/features/Header";
import Drawer from "./src/features/Drawer";
import Home from "./src/screens/Home";
import OrderHistory from "./src/screens/OrderHistory";
import DummyRoute from "./src/components/DummyRoute";
import AddMenu from "./src/screens/AddMenu";
import { ThemeProp } from "react-native-paper/lib/typescript/src/types";

const theme: ThemeProp = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#0f8211",
    secondaryContainer: "#0f821122",
  },
};
const DrawerNavigator = createDrawerNavigator();
const StackNavigator = createStackNavigator();

const InitialPage = function () {
  return (
    <DrawerNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <Header {...props} />,
        swipeEdgeWidth: 50,
        freezeOnBlur: true,
      }}
      drawerContent={Drawer}
    >
      <DrawerNavigator.Screen name="Home" component={Home} />
      <DrawerNavigator.Screen name="Account" component={DummyRoute} />
      <DrawerNavigator.Screen name="Order History" component={OrderHistory} />
      <DrawerNavigator.Screen name="Insights" component={DummyRoute} />
      <DrawerNavigator.Screen name="Promotions" component={DummyRoute} />
      <DrawerNavigator.Screen name="Invoice" component={DummyRoute} />
      <DrawerNavigator.Screen name="Support" component={DummyRoute} />
    </DrawerNavigator.Navigator>
  );
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <StackNavigator.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <StackNavigator.Screen name="Initial" component={InitialPage} />
          <StackNavigator.Screen
            name="Add_Menu"
            component={AddMenu}
            initialParams={{ transition: "fade" }}
            options={{ presentation: "modal" }}
          />
        </StackNavigator.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
