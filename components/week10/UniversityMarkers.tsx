import React from "react";
import { Marker } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";

type LocationItem = {
  id: number;
  user_id: string;
  latitude: string;
  longitude: string;
};

export default function UniversityMarkers({
  items,
}: {
  items: LocationItem[];
}) {
  if (!items || items.length === 0) return null;

  return (
    <>
      {items.map((item) => (
        <Marker
          key={item.id}
          coordinate={{
            latitude: Number(item.latitude),
            longitude: Number(item.longitude),
          }}
          title={item.user_id}   // 👈 กดแล้วชื่อเด้ง
        >
          {/* Icon รูปคน */}
          <FontAwesome name="user" size={22} color="tomato" />
        </Marker>
      ))}
    </>
  );
}
