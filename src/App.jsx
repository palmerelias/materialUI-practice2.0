import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Nav from "./Nav";
import Altitude from "./images/altitude.jpg";
import exifr from "exifr";

let image = Altitude;

let parsedImage = exifr.parse(Altitude, true);

export default function App() {
  return (
    <Box>
      <Nav />
      <Button variant="contained" onClick={() => console.log(parsedImage)}>
        Console
      </Button>
      <img style={{ height: 400 }} src={Altitude}></img>
      <Typography></Typography>
    </Box>
  );
}
