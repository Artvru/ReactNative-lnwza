// components/week3/Section7.tsx
import React from "react";
import { Image, Text, View } from "react-native";

export default function Section7() {
  return (
    <View style={{ padding: 20 }}>
      
      {/* Title */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 12 }}>
        Room Type
      </Text>

      {/* Content Row */}
      <View style={{ flexDirection: "row" }}>
        
        {/* Room Image */}
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "cover",
            borderRadius: 10,
          }}
          source={require("@/assets/week3/room-8.jpg")}
        />

        {/* Right Side Text */}
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Standard Twin Room
          </Text>
          <Text style={{ fontSize: 16, color: "red", marginVertical: 6 }}>
            $399.99
          </Text>
          <Text style={{ fontSize: 13, color: "#777" }}>
            Hurry Up! This is your last room!
          </Text>
        </View>

      </View>

    </View>
  );
}
