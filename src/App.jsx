import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import exifr from "exifr";
import { Button } from "@mui/material";
import lake1 from "./images/lake 1.jpg";
import lake2 from "./images/lake 2.jpg";
import lake3 from "./images/lake 3.jpg";
import speed3 from "./images/speed 3.jpg";
import palm1 from "./images/palm tree 1.jpg";
import alt1 from "./images/altitude 1.jpg";

function ImageDataTable() {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    async function fetchImageData() {
      try {
        // Define your image URLs here or fetch them from an API
        const imageUrls = [speed3, palm1, alt1, lake1, lake2, lake3];

        // Array to hold unique EXIF keys from all images
        let exifKeysSet = new Set();

        // Fetch EXIF data for each image and collect unique keys
        for (const imageUrl of imageUrls) {
          const exifData = await exifr.parse(imageUrl);
          Object.keys(exifData).forEach((key) => exifKeysSet.add(key));
        }

        // Create columns based on unique EXIF keys
        const updatedColumns = [
          { field: "id", headerName: "ID", width: 200 },
          { field: "thumbnail", headerName: "Thumbnail", width: 200 },
          { field: "imageUrl", headerName: "Image", width: 200 },
          ...Array.from(exifKeysSet).map((key) => ({
            field: key,
            headerName: key,
            width: 200,
          })),
        ];

        setColumns(updatedColumns);

        // Fetch and format data for each image
        const imageDataPromises = imageUrls.map(async (imageUrl, index) => {
          const exifData = await exifr.parse(imageUrl);
          return {
            id: index + 1,
            imageUrl: imageUrl,
            ...exifData,
          };
        });

        const imageData = await Promise.all(imageDataPromises);
        setRows(imageData);
      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    }

    fetchImageData();
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
      <Button onClick={() => console.log(columns.length)}>console</Button>
    </div>
  );
}

export default ImageDataTable;
