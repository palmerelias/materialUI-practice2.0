import React from "react";
import Nav from "./Nav";
import { Box, Button } from "@mui/material";
import Altitude from "./images/altitude.jpg";
import exifr from "exifr";

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          m: 1,
          alignItems: "",
        }}
      >
        <img style={{ width: 250 }} src={Altitude}></img>
        <Box sx={{ m: 2, display: "flex", justifyContent: "center" }}>
          <Button variant="contained" onClick={parsedImage}>
            Console
          </Button>
        </Box>
      </Box>
      <Box>{/* parsedImage data can go here */}</Box>
    </Box>
  );
}
