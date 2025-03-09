import React from "react";

import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function WeatherLocation({ location }) {
  // We return an empty card (ie. displays nothing) if no location has been searched yet or found
  if (!location) {
    return <Card style={{ border: "none", boxShadow: "none" }} />;
  }

  // Here we set the country's flag image's <img> tag's attributes
  // https://www.npmjs.com/package/country-flag-icons
  const flagIconSrc = `http://purecatamphetamine.github.io/country-flag-icons/3x2/${location.countryCode}.svg`;
  const flagIconAlt = `${location.countryName} flag`;

  // Here we set the weather's icon's <img> tag's attributes
  const weatherIconSrc = ` https://openweathermap.org/img/wn/${location.weatherIcon}@2x.png`;
  const weatherIconAlt = `${location.weatherGroup} icon`;

  const weatherURL = `https://openweathermap.org/city/${location.id}`;

  return (
    <>
      {/*The location card is only rendered if a location has been found*/}
      {location && (
        <Card sx={{ minWidth: 100 }}>
          <CardContent style={{ textAlign: "center" }}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant='h5'>
                  {location.city}
                  {/*Finds the location's country's flag and displays it on the card*/}
                  <img src={flagIconSrc} alt={flagIconAlt} style={{ width: 30, height: 20, marginLeft: 10 }} />
                </Typography>
                <Typography gutterBottom={true}>{location.countryName}</Typography>
                <Typography>
                  {location.temp} {location.tempUnit}
                </Typography>
                <Typography>{location.weatherGroup}</Typography>
                {/*Finds the weather icon for the location's weather, displays it on the card and fixes its position*/}
                <img src={weatherIconSrc} alt={weatherIconAlt} />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button
              variant='contained'
              size='small'
              aria-label="link to location's full weather"
              onClick={(event) => window.open(weatherURL)}>
              See full weather
            </Button>
          </CardActions>
        </Card>
      )}
    </>
  );
}
