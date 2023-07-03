import React from "react";
import { ScrollView, ScrollViewProps } from "react-native";

const flexStyle = { flex: 1 };

const Screen: React.FC<ScrollViewProps> = ({ children, style, ...rest }) => {
  return (
    <ScrollView style={[style, flexStyle]} {...rest}>
      {children}
    </ScrollView>
  );
};

export default Screen;
