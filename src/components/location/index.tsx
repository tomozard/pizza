import React, { useEffect } from "react";
import useApi from "../../hooks/useApi";
import locationApi from "../../services/api/locationApi";
// Material UI
import { Grid, Typography } from "@material-ui/core";
//Component


interface Props {}

const Index = (props: Props) => {
  const [location, loading, error, fetchData] = useApi(
    locationApi.getLocation,
    []
  );

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div>
      <Typography variant="h5" component="h2" gutterBottom>
        Location
      </Typography>
      {loading ? (
        <div>fetching...</div>
      ) : error ? (
        <div>Fetch Error</div>
      ) : (
<></>
      )}
    </div>
  );
};

export default Index;
