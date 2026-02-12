import React, { useEffect, useState } from "react";
import { View } from "react-native";

import MyMapView from "@/components/week10/MyMapView";
import { getLocation } from "@/utils/gps";

export default function LocationQuiz() {
  const [location, setLocation] = useState<any>(null);
  const [items, setItems] = useState<any[]>([]);

  // พิกัดเครื่องเรา
  const loadMyLocation = async () => {
    const loc = await getLocation();
    if (loc) setLocation(loc);
  };

  // โหลดพิกัดของทุกคนจาก API
  const loadLocations = async () => {
    const res = await fetch("https://ckartisan.com/api/location");
    const data = await res.json();
    setItems(data);
  };

  useEffect(() => {
    loadMyLocation();
    loadLocations();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MyMapView location={location} items={items} />
    </View>
  );
}
