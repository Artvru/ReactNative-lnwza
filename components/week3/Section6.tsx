// components/week3/Section6.tsx
import React from "react";
import { View, Text, Image } from "react-native";

export default function Section6() {
  return (
    <View style={{ flexDirection: "column", padding: 20 }}>
      
      {/* Title */}
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 8 }}>
        Location
      </Text>

      {/* Description */}
      <Text style={{ fontSize: 14, color: "#555", marginBottom: 15 }}>
        218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor
        incididunt ut labore et…
      </Text>

      {/* Map Image */}
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{
            flex: 1,
            resizeMode: "cover",
            aspectRatio: 16 / 9,
            borderRadius: 10,
          }}
          source={require("@/assets/week3/map.jpg")}
        />
      </View>

    </View>
  );
}
