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
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-google-places-autocomplete";
import PolygonLookup from "polygon-lookup";
import inside from "point-in-polygon";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);



const Map = (props: Props) => {
  const classes = useStyles();
  const location = props.location;
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDkC_udSZKGGVZg_6vU2Uqc7EJBCOOjm8U", // ,
    libraries: ["places"],
    // ...otherOptions
  });
  const [modalStyle] = React.useState(getModalStyle);

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

  const [modalData, setModalData] = useState<[string, string]>(["", ""]);

  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  // const lookup = new PolygonLookup(location);
  //console.log(location);

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
            console.log(lat, lng);
            console.log("Successfully got latitude and longitude", {
              lat,
              lng,
            });
            setMarker(new google.maps.LatLng({ lat: lat, lng: lng }));
            setCenter({
              lat: lat,
              lng: lng,
            });
            setZoom(15);
            // const poly = lookup.search(lat, lng);
            // if(poly){
            //   console.log(poly); // bar
            // }
            location.features.map((l, i) => {
              const coordinates = l.geometry.coordinates;
              //console.log(coordinates);
              const newcoors = coordinates.map((coor, index) => {
                return coor.map((c: any, i: any) => {
                  return [c[1], c[0]];
                });
              });
              // console.log(newcoors);
              console.log(inside([lat, lng], newcoors[0]));
              if (inside([lat, lng], newcoors[0])) {
                console.log(l.properties.StoreName, l.properties.Remark);
                setModalData([l.properties.StoreName, l.properties.Remark]);
                handleOpenModal();
              } else {
                //handleCloseModal();
                //setModalData(["", ""]);
              }
            });
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
          const coordinates = l.geometry.coordinates;
          console.log(coordinates);
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
      <Modal open={openModal} onClose={handleCloseModal}>
        <div className={classes.paper} style={modalStyle}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              Store Name
            </Grid>
            <Grid item xs={12} sm={8}>
              {modalData[0]}
            </Grid>
            <Grid item xs={12} sm={4}>
              Remark
            </Grid>
            <Grid item xs={12} sm={8}>
              {modalData[1]}
            </Grid>
          </Grid>
        </div>
      </Modal>
    </>
  ) : (
    <></>
  );
};

export default Map;
