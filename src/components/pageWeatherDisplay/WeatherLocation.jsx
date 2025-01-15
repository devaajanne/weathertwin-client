import React from "react";

import { Card, CardContent, Typography } from "@mui/material";

export default function WeatherLocation({ location }) {
  return (
    <>
      {(location && (
        <Card>
          <CardContent>
            <Typography variant='h5'>{location.city}</Typography>
            <Typography>{location.countryCode}</Typography>
            <Typography>{location.temp}</Typography>
            <Typography>{location.weatherGroup}</Typography>
          </CardContent>
        </Card>
      )) || (
        <Card>
          <CardContent>
            <Typography variant='h5'>City:</Typography>
            <Typography>Country:</Typography>
            <Typography>Temperature:</Typography>
            <Typography>Condition:</Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
}
