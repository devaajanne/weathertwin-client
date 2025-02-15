import React from "react";

import { Card, CardContent, Typography } from "@mui/material";

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

  return (
    <>
      {/*The location card is only rendered if a location has been found*/}
      {location && (
        <Card>
          <CardContent>
            <Typography variant='h5'>
              {location.city}
              {/*Finds the location's country's flag and displays it as a 30x20 px image*/}
              <img src={flagIconSrc} alt={flagIconAlt} width='30' heigth='20' style={{ marginLeft: 5 }} />
            </Typography>
            <Typography>{location.countryName}</Typography>
            <Typography>
              {location.temp} {location.tempUnit}
            </Typography>
            <Typography>
              {location.weatherGroup}
              {/*Finds the weather icon for the location's weather*/}
              <img src={weatherIconSrc} alt={weatherIconAlt} width='30' height='20' style={{ marginLeft: 5 }} />
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
}
