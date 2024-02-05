import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Nav from "./Nav";
import Altitude from "./images/altitude.jpg";
import exifr from "exifr";
import DataGridExif from "./DataGridExif";

const parsedImage = async () => {
  const data = await exifr.parse(Altitude, true);
  const dataArray = [];

  Object.entries(data).map(([key, value]) => dataArray.push({ [key]: value }));

  console.log(dataArray);
};

export default function App() {
  return (
    <Box>
      <Nav />
      <Button variant="contained" onClick={parsedImage}>
        Console
      </Button>
      <img style={{ height: 400 }} src={Altitude}></img>
      <Box>
        <DataGridExif />
      </Box>
    </Box>
  );
}
