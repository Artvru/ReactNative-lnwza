// components/week3/Section8.tsx
import React from "react";
import { Button, Text, View } from "react-native";

export default function Section8() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
      }}
    >
      {/* Left Side */}
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#333" }}>
          $399.99
        </Text>
        <Text style={{ fontSize: 14, color: "gray" }}>1 night</Text>
        <Text style={{ fontSize: 13, color: "#999" }}>including taxes & fees</Text>
      </View>

      {/* Right Side - Button */}
      <View style={{ width: 120 }}>
        <Button title="Book Now" color="red" onPress={() => {}} />
      </View>
    </View>
  );
}
