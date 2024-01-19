import React from "react";
import { Container, Switch, darkScrollbar } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Nav from "./Nav";
import Card from "./Card";
import DarkSwitch from "./DarkSwitch";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  function toggleMode() {
    return (prefersDarkMode = !prefersDarkMode);
  }

  return (
    <Container>
      <Nav clicked={toggleMode} />
      <Container sx={{ mt: 3 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 8, md: 12 }}
          >
            {Array.from(Array(6)).map((_, index) => (
              <Grid item xs={1} sm={4} md={4} key={index}>
                <Card image={"https://source.unsplash.com/random"}></Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box display="flex" justifyContent="end">
          <DarkSwitch />
        </Box>
      </Container>
    </Container>
  );
}

export default App;
