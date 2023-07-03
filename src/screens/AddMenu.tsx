import { useState } from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import {
  Avatar,
  Button,
  List,
  Menu,
  Switch,
  Text,
  TextInput,
} from "react-native-paper";

const AddMenu = () => {
  const [visible, setVisible] = useState(false);
  const { register, handleSubmit } = useForm();

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
    <View style={{ flex: 1 }}>
      <List.Item
        title="name"
        description={`Rs. ${0}`}
        left={(props) => (
          <Avatar.Image
            source={{
              uri: "https://via.placeholder.com/50x50?text=Homee",
            }}
            {...props}
          />
        )}
        right={() => <Switch value={true} />}
        style={{ marginTop: 40 }}
      />

      <View style={{ padding: 30, flex: 1 }}>
        <TextInput label="Name" mode="outlined" {...register("name")} />
        <TextInput label="Price" mode="outlined" {...register("price")} />
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <TextInput
              label="Price"
              mode="outlined"
              {...register("price")}
              onPointerUp={openMenu}
              onPressIn={openMenu}
              editable={false}
            />
          }
        >
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Text>Available</Text>
          <Switch value={true} />
        </View>
      </View>
      <Button mode="contained">Save</Button>
    </View>
  );
};

export default AddMenu;
