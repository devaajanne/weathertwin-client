import react from "react";

import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Typography,
  IconButton,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";

export default function PageToolbar() {
  return (
    <>
      <Container>
        <AppBar position='static'>
          <Toolbar>
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>
              <Typography variant='h6'>Weather Twin</Typography>
            </Box>
            <Box>
              <IconButton
                aria-label='link to github repository'
                onClick={(event) =>
                  window.open(
                    "https://github.com/devaajanne/weathertwin-client"
                  )
                }>
                <GitHubIcon style={{ color: "white" }} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
}
