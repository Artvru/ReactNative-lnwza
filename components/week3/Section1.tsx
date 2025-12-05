// components/week3/Section1.tsx
import React from "react";
import { Image } from "react-native";


import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Section1() {
  return (
    <View style={{ flex: 1 }}>
      {/* รูปแบบ Row */}
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{
            flex: 1,
            resizeMode: "cover",
            aspectRatio: 4 / 2,
          }}
          source={require("@/assets/week3/room-1.jpg")}
        />
      </View>
    </View>
  );

  
}
