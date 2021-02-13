import React, { useEffect, useState } from "react";
//Interfaces
import { ILocation, ICoor } from "../../interfaces";
//Package
import {
  GoogleMap,
  Polygon,
  useJsApiLoader,
  Autocomplete,
  LoadScript,
  StandaloneSearchBox,
  Marker,
} from "@react-google-maps/api";
import { TextField } from "@material-ui/core";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-google-places-autocomplete";
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

const Map = (props: Props) => {
  const location = props.location;
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDkC_udSZKGGVZg_6vU2Uqc7EJBCOOjm8U", // ,
    libraries: ["places"],
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
  const [value, setValue] = useState<any>(null);

  const [marker, setMarker] = useState<google.maps.LatLng | null>(null);

  useEffect(() => {
    if (value && value !== null) {
      console.log(value);
      // const placeId: string = value.value.place_id || "";
      // geocodeByPlaceId(placeId)
      //   .then((results) => console.log(results))
      //   .catch((error) => console.error(error));
      if (value.label !== "") {
        geocodeByAddress(value.label)
          .then((results) => getLatLng(results[0]))
          .then(({ lat, lng }) => {
            console.log("Successfully got latitude and longitude", {
              lat,
              lng,
            });
            setMarker(new google.maps.LatLng({ lat: lat, lng: lng }));
          });
      }
    }
  }, [value]);

  return isLoaded ? (
    <>
      <GooglePlacesAutocomplete
        selectProps={{
          value,
          onChange: setValue,
        }}
      ></GooglePlacesAutocomplete>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
        {/* Child components, such as markers, info windows, etc. */}
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
        {marker !== null && <Marker position={marker}></Marker>}
      </GoogleMap>
    </>
  ) : (
    <></>
  );
};

export default Map;
