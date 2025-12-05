// components/week3/Section3.tsx
import React from "react";
import { View, Text } from "react-native";

export default function Section3() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* Row Content */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        
        {/* Circle Score */}
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: "#FF6E40",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>9.5</Text>
        </View>

        {/* Right text block */}
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#333" }}>
            Excellent
          </Text>
          <Text style={{ fontSize: 14, color: "#777" }}>
            See 801 reviews
          </Text>
        </View>

      </View>
    </View>
  );
}
