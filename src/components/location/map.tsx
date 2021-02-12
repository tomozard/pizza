import React from "react";
//Interfaces
import { ILocation, ICoor } from "../../interfaces";
//Package
import { GoogleMap, useJsApiLoader, Polygon } from "@react-google-maps/api";
interface Props {
  location: ILocation;
}

declare global {
  interface Window {
    google: any;
  }
}

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = { lng:99.6150, lat:  7.5549 }

const options = {
  fillColor: "lightblue",
  fillOpacity: 0.5,
  strokeColor: "blue",
  strokeOpacity: 1,
  strokeWeight: 1,
  clickable: false,
  draggable: false,
  editable: false,
  geodesic: false,
  zIndex: 1,
};

const Map = (props: Props) => {
  const location = props.location;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDkC_udSZKGGVZg_6vU2Uqc7EJBCOOjm8U",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onPolygonLoad = (polygon: any) => {
    // console.log("polygon: ", polygon);
  };

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12.5}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {location.features.map((l, i) => {
        const coors: ICoor[] = l.geometry.coordinates[0].map(
          (coor: [string, string]) => {
            return { lng: parseFloat(coor[0]), lat: parseFloat(coor[1]) };
          }
        );
        // console.log(i, coors);
        return (
          <Polygon
            key={i}
            onLoad={onPolygonLoad}
            paths={coors}
            options={options}
          />
        );
      })}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
