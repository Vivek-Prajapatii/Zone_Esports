import React from "react";
import scss from "../styles/contact.module.scss";
import { Container, Grid, Typography } from "@mui/material";

function contact() {
  return (
    <Container className={scss.container} maxWidth={"xl"}>
      {/* <Grid className={scss.inputwrapper} sx={{ marginTop: "17" }}>
        <span className={scss.placeholder}></span>
      </Grid> */}
      <Grid className={scss.outer_container}>
        <Grid className={scss.card}>
          <Typography variant="h2" sx={{p:"30px 20px 0px", color: "aliceblue"}}>
            Contact us
          </Typography>
          <hr></hr>
        </Grid>
        <Grid className={scss.card}></Grid>
      </Grid>
    </Container>
  );
}

export default contact;
