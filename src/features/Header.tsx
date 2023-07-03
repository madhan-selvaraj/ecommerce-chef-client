import { DrawerHeaderProps } from "@react-navigation/drawer";
import { useState } from "react";
import { Appbar, Switch, Text } from "react-native-paper";

const Header = (props: DrawerHeaderProps) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  return (
    <Appbar.Header>
      <Appbar.Action
        icon="menu"
        onPress={props.navigation.toggleDrawer}
        isLeading={true}
      />
      <Appbar.Content
        title={props.route.name === "Home" ? "Home" : props.route.name}
      />
      {props.route.name === "Home" && (
        <>
          <Text>{isSwitchOn ? "Online" : "Offline"}</Text>
          <Switch value={isSwitchOn} onValueChange={setIsSwitchOn} />
        </>
      )}
    </Appbar.Header>
  );
};

export default Header;
