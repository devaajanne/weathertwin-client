import React, { useState } from "react";

import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import HelpIcon from "@mui/icons-material/Help";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function PageToolbar() {
  const [infoDialogIsOpen, setInfoDialogIsOpen] = useState(false);

  const handleOpenInfoDialog = () => {
    setInfoDialogIsOpen(true);
  };

  const handleCloseInfoDialog = () => {
    setInfoDialogIsOpen(false);
  };

  return (
    <>
      <Container>
        <AppBar position='static'>
          <Toolbar sx={{ flexGrow: 1 }}>
            <Box sx={{ position: "absolute", left: "50%", transform: "translateX(-50%)", textAlign: "center" }}>
              <Typography variant='h6'>Weather Twin</Typography>
            </Box>
            <Box sx={{ marginLeft: "auto" }}>
              <IconButton aria-label='open an info box' onClick={handleOpenInfoDialog}>
                <HelpIcon fontSize='large' style={{ color: "white" }} />
              </IconButton>
              <IconButton
                aria-label='link to github repository'
                onClick={(event) => window.open("https://github.com/devaajanne/weathertwin-client")}>
                <GitHubIcon fontSize='large' style={{ color: "white" }} />
              </IconButton>
            </Box>

            {/*This is an info dialog to tell the user what the app is about and how to use it*/}
            <Dialog open={infoDialogIsOpen} onClose={handleCloseInfoDialog}>
              <DialogTitle>Weather Twin: the what and the how</DialogTitle>
              <DialogContent>
                <Typography gutterBottom={true}>
                  Weather Twin is an app that finds you a location that has a similar weather as your location.
                </Typography>
                <Typography gutterBottom={true}>
                  Simply start typing your city in the input field, choose your city from the list and select your
                  desired temperature unit: celcius or fahrenheit.
                </Typography>
                <Typography>Find your weather twin in seconds!</Typography>
              </DialogContent>
              <DialogActions>
                <Button variant='contained' onClick={handleCloseInfoDialog}>
                  Got it!
                </Button>
              </DialogActions>
            </Dialog>
            
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
}
