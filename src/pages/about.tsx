import { Grid, Container, Typography } from "@mui/material";
import scss from "../styles/pages/about.module.scss";
import React from "react";

function about() {
  return (
    <div>
      <Container className={scss.container} maxWidth={"xl"}>
        <Grid className={scss.outer_grid}>
          <Grid className={scss.title}>
            <Grid className={scss.inputwrapper}>
              <span className={scss.placeholder}></span>
            </Grid>
          </Grid>
          <Grid className={scss.about_us}>
            <Typography variant={"body1"} sx={{ fontFamily: "monospace" }}>
              Scout Gaming Group is a licensed and regulated B2B provider of
              daily fantasy sports and betting solutions. Scout offers the only
              liquidity network for fantasy sports in Europe and has some of the
              largest online operators on the client list. Scout is licensed in
              both Malta and the UK. Scout is listed at Nasdaq OMX Stockholm
              First North.
            </Typography>
          </Grid>
        </Grid>
        <Grid className={scss.people}>
          <Grid className={scss.title}>
            <Grid className={scss.inputwrapper}>
              <span className={scss.placeholder}></span>
            </Grid>
          </Grid>
          <Grid
            className={scss.cards}
          >
            <Grid className={scss.card}></Grid>
            <Grid className={scss.card}></Grid>
            <Grid className={scss.card}></Grid>
            <Grid className={scss.card}></Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default about;
