import React, { useState } from "react";

import {
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  CircularProgress,
  Icon,
  Box,
  Stack,
} from "@mui/material";

// NPM: https://www.npmjs.com/package/react-google-places-autocomplete
// Docs: https://tintef.github.io/react-google-places-autocomplete/
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";

import { fetchWeatherData } from "../../api/ApiCalls";
import { sleep } from "../../utils/Utils";

export default function WeatherSearchBar({ setInputLocation, setSimilarLocation }) {
  const [cityData, setCityData] = useState(null);
  const [unitInput, setUnitInput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCityChange = (cityData) => {
    setCityData(cityData);
  };

  const handleUnitChange = (event) => {
    if (
      (unitInput == "metric" && event.target.value == "metric") ||
      (unitInput == "imperial" && event.target.value == "imperial")
    ) {
      setUnitInput(null);
    } else {
      setUnitInput(event.target.value);
    }
  };

  const getLatAndLon = async () => {
    try {
      const results = await geocodeByAddress(cityData.label);
      const { lat, lng } = await getLatLng(results[0]);
      return { lat: lat, lon: lng };
    } catch (error) {
      console.error("getLatAndLon error: " + error);
    }
  };

  const handleSubmit = async () => {
    // Here we set location states to null to clear the display, and indicate loading start
    setInputLocation(null);
    setSimilarLocation(null);
    setIsLoading(true);

    // Here we load the actual data and set it to correct states
    // Sleep time is included for user friendliness
    const cityLatLon = await getLatAndLon();
    const bodyData = JSON.stringify({ cityName: cityData.label, cityCoords: cityLatLon, unit: unitInput });
    const response = await fetchWeatherData(bodyData);

    await sleep(2000);
    setInputLocation(response.data.inputLocation);
    await sleep(2000);
    setSimilarLocation(response.data.similarLocation);

    // After we have loaded the data, we indicate that the loading has ended
    setIsLoading(false);

    // Finally, we reset input fields so that the user can start again
    setCityData(null);
    setUnitInput(null);
  };

  return (
    <>
      <Stack justifyContent='space-between' alignItems='center'>
        <FormControl>
          <Box display='flex' justifyContent='center' alignItems='center' sx={{ m: 2 }}>
            <GooglePlacesAutocomplete
              autocompletionRequest={{ types: ["political"] }}
              debounce={750}
              selectProps={{
                placeholder: "Start typing your city",
                value: cityData ? cityData : null,
                onChange: handleCityChange,
                styles: {
                  control: (base) => ({
                    ...base,
                    width: "250px",
                  }),
                  container: (base) => ({
                    ...base,
                    width: "250px",
                  }),
                },
              }}
            />
          </Box>
          <FormLabel>Unit</FormLabel>
          <RadioGroup value={unitInput}>
            <FormControlLabel value='metric' control={<Radio onClick={handleUnitChange} />} label='metric' />
            <FormControlLabel value='imperial' control={<Radio onClick={handleUnitChange} />} label='imperial' />
          </RadioGroup>
          <Button
            variant='contained'
            onClick={() => {
              handleSubmit(cityData, unitInput);
            }}>
            Submit
          </Button>
          <Box display='flex' justifyContent='center' alignItems='center' sx={{ m: 2 }}>
            {(isLoading && <CircularProgress size={40} />) || <Icon sx={{ fontSize: 40 }} />}
          </Box>
        </FormControl>
      </Stack>
    </>
  );
}
