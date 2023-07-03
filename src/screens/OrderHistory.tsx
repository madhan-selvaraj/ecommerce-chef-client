import React from "react";
import Screen from "../components/Screen";
import orders from "../mock/orders";
import OrderCard from "../components/OrderCard";

const OrderHistory = () => {
  return (
    <Screen>
      {Array.from(Array(10).fill(orders[0]), (order, index) => (
        <OrderCard
          order={order}
          type="DISPATCHED"
          onOk={() => {}}
          key={index}
        />
      ))}
    </Screen>
  );
};

export default OrderHistory;
