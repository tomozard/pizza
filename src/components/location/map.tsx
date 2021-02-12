import React, { useState } from "react";
//Interfaces
import { ILocation, ICoor } from "../../interfaces";
//Package
import { GoogleMap, Polygon, useJsApiLoader } from "@react-google-maps/api";
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

const Map3 = (props: Props) => {
  const location = props.location;
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDkC_udSZKGGVZg_6vU2Uqc7EJBCOOjm8U", // ,
    // ...otherOptions
  });

  const [center, setCenter] = useState<ICoor>({
    lat: 7.5549,
    lng: 99.615,
  });

  const [zoom, setZoom] = useState<number>(13);

  const onPolygonLoad = (polygon: any) => {
    // console.log("polygon: ", polygon);
  };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
      {/* Child components, such as markers, info windows, etc. */}
      <></>
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

export default Map3;
