// components/week3/Section4.tsx
import React from "react";
import { View, Text } from "react-native";

export default function Section4() {
  return (
    <View
      style={{
        padding: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#ddd",
        marginTop: 10,
      }}
    >
      {/* Title */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
        Hotel Description
      </Text>

      {/* Description */}
      <Text style={{ fontSize: 14, color: "#555" }}>
        218 Austen Mountain, consectetur adipiscing, sed eiusmod tempor 
        incididunt ut labore et dolore
      </Text>
    </View>
  );
}
