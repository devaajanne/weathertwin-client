import React from "react";

import Grid from "@mui/material/Grid2";

import WeatherLocation from "./WeatherLocation";

export default function WeatherDisplay({ inputLocation, similarLocation }) {
  return (
    <>
      <Grid container>
        <Grid
          item
          sx={{
            border: 1,
          }}>
          <p>InputLocation</p>
          <WeatherLocation location={inputLocation} />
        </Grid>
        <Grid
          item
          sx={{
            border: 1,
          }}>
          <p>SimilarLocation</p>
          <WeatherLocation location={similarLocation} />
        </Grid>
      </Grid>
    </>
  );
}
