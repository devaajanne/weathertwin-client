import React, { useState } from "react";

import Grid from "@mui/material/Grid2";

import WeatherSearchBar from "./WeatherSearchBar";
import WeatherDisplay from "./WeatherDisplay";

export default function WeatherLayout() {
  const [inputLocation, setInputLocation] = useState(null);
  const [similarLocation, setSimilarLocation] = useState(null);

  return (
    <>
      <Grid container alignItems='center' justifyContent='center'>
        <Grid item xs={12}>
          <WeatherSearchBar setInputLocation={setInputLocation} setSimilarLocation={setSimilarLocation} />
        </Grid>
      </Grid>
      <Grid container alignItems='center' justifyContent='center'>
        <Grid item xs={12}>
          <WeatherDisplay inputLocation={inputLocation} similarLocation={similarLocation} />
        </Grid>
      </Grid>
    </>
  );
}
