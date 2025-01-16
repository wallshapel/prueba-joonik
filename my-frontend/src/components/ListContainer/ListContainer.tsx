import React from "react";
import useLocationContext from "../../contexts/useLocationContext";
import ListCard from "../ListCard/ListCard";
import { Location } from "../../interfaces/LocationInterfaces";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Container,
  CircularProgress,
  Box,
} from "@mui/material";

const ListContainer: React.FC = () => {
  const { locations, error, loading } = useLocationContext();

  if (loading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Typography variant="h6" align="center" color="error">
        Error: {error}
      </Typography>
    );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Headquarters
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Locations
        </Typography>
        <Grid container spacing={4}>
          {locations.map((location: Location) => (
            <Grid item key={location.code} xs={12} sm={6} md={4}>
              <ListCard location={location} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ListContainer;
