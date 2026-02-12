import React from "react";
import MapView from "react-native-maps";

import UniversityMarkers from "./UniversityMarkers";

export default function MyMapView({
  location,
  items,
}: {
  location: any;
  items: any[];
}) {
  if (!location) return null;

  return (
    <MapView
      style={{ flex: 1 }}
      showsUserLocation={true}
      initialRegion={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      <UniversityMarkers items={items} />
    </MapView>
  );
}
