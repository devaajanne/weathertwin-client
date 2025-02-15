import React, { useState } from "react";

import Grid from "@mui/material/Grid2";
import { Container, Typography } from "@mui/material";

import WeatherSearch from "./WeatherSearch";
import WeatherDisplay from "./WeatherDisplay";

export default function WeatherLayout() {
  const [inputLocation, setInputLocation] = useState(null);
  const [similarLocation, setSimilarLocation] = useState(null);

  return (
    <>
      <Container maxWidth='lg'>
        <Grid container alignItems='center'>
          <Grid item size={{ xs: 12 }}>
            <Typography variant='subtitle2' sx={{ textAlign: "center" }}>
              Separated by distance, united by weather
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              Enter your city below and see which other city has the same weather!
            </Typography>
          </Grid>
          <Grid item size={{ sm: 12, md: 6 }}>
            <WeatherSearch setInputLocation={setInputLocation} setSimilarLocation={setSimilarLocation} />
          </Grid>
          <Grid item size={{ sm: 12, md: 6 }}>
            <WeatherDisplay inputLocation={inputLocation} similarLocation={similarLocation} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
