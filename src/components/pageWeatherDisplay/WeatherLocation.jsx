import React from "react";

import { Card, CardContent, Typography } from "@mui/material";

export default function WeatherLocation({ location }) {
  return (
    <>
      {(location && (
        <Card>
          <CardContent>
            <Typography variant='h5'>{location.city}</Typography>
            <Typography>{location.countryName}</Typography>
            <Typography>{location.temp} {location.tempUnit}</Typography>
            <Typography>{location.weatherGroup}</Typography>
          </CardContent>
        </Card>
      )) || <Card style={{ border: "none", boxShadow: "none" }} />}
    </>
  );
}
