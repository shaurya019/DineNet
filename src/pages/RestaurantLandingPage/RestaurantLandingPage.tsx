import { Box, Button, Grid } from "@mui/material";
import React from "react";
import Typography from "../../atomicComponents/Typography";

export const RestaurantLandingPage = () => {
  return (
    <Box padding={1}>
      <Grid
        container
        alignItems="center"
        gap={1}
        justifyContent="flex-start"
        wrap="nowrap"
      >
        <Grid>
          <img
            src="/assets/logo.png"
            style={{ width: "26px", height: "26px", objectFit: "cover" }}
          />
        </Grid>
        <Grid xs="auto">
          <Grid container direction="column">
            <Grid mb={-1}>
              <Typography color="secondary" fw={700} fs={14}>
                Welcome to Hotel!
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="caption" color="secondary" fs={10} fw={500}>
                You have checked in into room no. 06
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid alignItems="flex-end" ml="auto">
          <Button variant="contained" disableElevation >
            Log-in
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
