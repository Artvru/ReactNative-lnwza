// components/week3/Section2.tsx
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

export default function Section2() {
  return (
    <View
      style={{
        flex: 1,
        marginTop: -25,
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
      }}
    >
      {/* Title */}
      <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
        Hilton San Francisco
      </Text>

      {/* Stars */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: 10,
        }}
      >
        <FontAwesome name="star" size={18} color="orange" />
        <FontAwesome name="star" size={18} color="orange" />
        <FontAwesome name="star" size={18} color="orange" />
        <FontAwesome name="star" size={18} color="orange" />
        <FontAwesome name="star" size={18} color="orange" />
      </View>

      {/* Description */}
      <Text style={{ textAlign: "center", color: "#555" }}>
        Facilities provided may range from a modest quality mattress in a small
        room to large suites
      </Text>
    </View>
  );
}
