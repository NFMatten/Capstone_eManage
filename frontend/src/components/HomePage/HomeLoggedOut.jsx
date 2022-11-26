import React, { useState } from "react";
import { Grid, Container } from "@mui/material";

const HomeLoggedOut = (props) => {
  return (
    <div>
      <p>Logged Out</p>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        <Grid item xs={6} md={3} sx={{ justifyContent: "center" }}>
          <Container>
            <p>test 1</p>
          </Container>
        </Grid>
        <Grid item xs={6} md={2} sx={{ justifyContent: "center" }}>
          <p>test 2</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeLoggedOut;
