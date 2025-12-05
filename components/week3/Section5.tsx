// components/week3/Section5.tsx
import React from "react";
import { View } from "react-native";
import MyIcon from "./myicon";

export default function Section5() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 15,
        paddingHorizontal: 10,
      }}
    >
      <MyIcon title="wifi" name="wifi" size={30} color="orange" />
      <MyIcon title="coffee" name="coffee" size={30} color="orange" />
      <MyIcon title="bath" name="bath" size={30} color="orange" />
      <MyIcon title="car" name="car" size={30} color="orange" />
      <MyIcon title="paw" name="paw" size={30} color="orange" />
    </View>
  );
}
