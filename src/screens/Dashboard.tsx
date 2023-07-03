import React from "react";
import { View, Dimensions } from "react-native";
import { Card, Text } from "react-native-paper";

const Dashboard = () => {
  return (
    <View
      style={{
        padding: 5,
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {Array(10).fill(
        <Card
          key={Math.random()}
          style={{
            width: (Dimensions.get("window").width - 30) /* Paddings*/ / 2,
            margin: 5,
            aspectRatio: 1,
          }}
        >
          {/* <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          //   left={LeftContent}
        /> */}
          <Card.Content>
            <Text variant="titleLarge">50</Text>
            <Text variant="bodyMedium">Today Orders</Text>
          </Card.Content>
          {/* <Card.Cover source={{ uri: "https://picsum.photos/700" }} /> */}
        </Card>
      )}
    </View>
  );
};

export default Dashboard;
