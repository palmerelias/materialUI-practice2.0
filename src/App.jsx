import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import exifr from "exifr";
import Altitude1 from "./images/altitude 1.jpg";

function ImageDataTable() {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([
    { field: "id", headerName: "ID", width: 200 },
    { field: "imageUrl", headerName: "Image", width: 200 },
    // Add a default column for the image URL
  ]);

  useEffect(() => {
    // Fetch your image data here and set it to the rows state
    async function fetchImageData() {
      try {
        const exifData = await exifr.parse(Altitude1);

        // Dynamically generate columns based on the keys in the EXIF data
        const updatedColumns = [
          { field: "id", headerName: "ID", width: 200 },
          { field: "imageUrl", headerName: "Image", width: 200 },
          ...Object.keys(exifData).map((key) => ({
            field: key,
            headerName: key,
            width: 200,
          })),
        ];

        setColumns(updatedColumns);

        const imageData = [
          {
            id: 1,
            imageUrl: Altitude,
            ...exifData,
          },
        ];

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
    </div>
  );
}

export default ImageDataTable;
