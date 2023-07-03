import { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Button,
  Card,
  Chip,
  Dialog,
  Divider,
  Portal,
  Text,
  useTheme,
} from "react-native-paper";
import { OrdersResponse } from "../types/Order";

// type Props =
//   | {
//       type: "NEW";
//       order: OrdersResponse;
//       onOk: () => void;
//       onCancel: () => void;
//     }
//   | {
//       type: "ACCEPTED";
//       order: OrdersResponse;
//       onOk: () => void;
//     }
//   | {
//       type: "READY";
//       order: OrdersResponse;
//       onOk: () => void;
//     };

type Props = {
  order: OrdersResponse;
  type: "NEW" | "ACCEPTED" | "READY" | "DISPATCHED";
  onOk: () => void;
  onCancel?: () => void;
};

const OrderCard = ({ order, onOk, type, onCancel }: Props) => {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <>
      <Card style={styles.container}>
        <Card.Title
          title={
            <View style={styles.title}>
              <Text>Order ID: {order.id}</Text>
              {type === "DISPATCHED" && <Chip compact>Delivered</Chip>}
            </View>
          }
        />
        <Card.Content>
          {order.items?.map((item) => (
            <View key={item.name} style={styles.row}>
              <Text>{`${item.quantity} * ${item.name}`}</Text>
              <Text>&#8377; {item.amount}</Text>
            </View>
          ))}
          <Divider />
          <View style={styles.row}>
            <Text>Total quantity: {order.total_quantity}</Text>
            <Text>
              Total amount:&nbsp;
              <Text style={{ fontWeight: "bold" }}>
                &#8377; {order.total_amount}
              </Text>
            </Text>
          </View>
        </Card.Content>
        {type !== "DISPATCHED" && (
          <Card.Actions>
            <Button
              style={{ flex: 1 }}
              textColor={theme.colors.error}
              onPress={showDialog}
              // icon="cancel"
            >
              Reject
            </Button>
            <Button
              style={{ flex: 1 }}
              onPress={onOk}
              // icon="check"
            >
              Accept
            </Button>
          </Card.Actions>
        )}
      </Card>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Icon icon="alert" />
          <Dialog.Title>Reject order #{order.id}</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">
              Are you sure to reject order worth &#8377;
              {order.total_amount}
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog} textColor={theme.colors.backdrop}>
              No
            </Button>
            <Button
              mode="contained"
              onPress={() => {
                onCancel?.();
                hideDialog();
              }}
              buttonColor={theme.colors.error}
            >
              &nbsp; Reject &nbsp;
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  title: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 2,
  },
});

export default OrderCard;
