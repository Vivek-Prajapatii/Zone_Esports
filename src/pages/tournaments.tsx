/* eslint-disable @next/next/no-img-element */
import { Container, Grid, Button, Stack } from "@mui/material";
import React from "react";
import scss from "../styles/pages/tournaments.module.scss";
import BootstrapCarousel from "@/components/carousels/BootStrap";
import "bootstrap/dist/css/bootstrap.min.css";

function tournaments() {
  return (
    <Container className={scss.tournaments_container} >
      <Grid className={scss.tournaments_grid}>
        <Grid className={scss.landing_image}>
          <img src="/images/cod2.jpg" alt="" />
        </Grid>
        <Grid className={scss.card_wrapper}>
          <Grid className={scss.cards}>
            <Grid className={scss.card}>
              <Grid className={scss.data}>
                Battle for glory brings the best players to the ultimate
                battleground!
                <h2>BGMI</h2>
                <Stack
                  direction="row"
                  spacing={"7rem"}
                  justifyContent={"space-between"}
                >
                  <span>Pool Price: Rs. 100000</span>
                  <span>Teams: 24/100</span>
                </Stack>
                <span>Registration End Date: 24/10/23</span>
                <Stack direction="row" spacing={2}>
                  <Button variant="outlined" size="small" color="secondary">
                    Learn more
                  </Button>
                  <Button variant="contained" size="small" color="secondary">
                    Register Now
                  </Button>
                </Stack>
              </Grid>
              <Grid className={scss.image}>
                <img src="/images/1.jpg" alt="" />
              </Grid>
            </Grid>
            <Grid className={scss.card}>
              <Grid className={scss.data}>
                <span>
                  Battle for glory brings the best players to the ultimate
                  battleground!
                </span>
                <h2>COD</h2>

                <Stack
                  direction="row"
                  spacing={"7rem"}
                  justifyContent={"space-between"}
                >
                  <span>Pool Price: Rs. 100000</span>
                  <span>Teams: 24/100</span>
                </Stack>
                <span>Registration End Date: 24/10/23</span>

                <Stack direction="row" spacing={2}>
                  <Button variant="outlined" size="small" color="secondary">
                    Learn more
                  </Button>
                  <Button variant="contained" size="small" color="secondary">
                    Register Now
                  </Button>
                </Stack>
              </Grid>
              <Grid className={scss.image}>
                <img src="/images/cod.webp" alt="" />
              </Grid>
            </Grid>
            <Grid className={scss.card}>
              <Grid className={scss.data}>
                <span>
                  Battle for glory brings the best players to the ultimate
                  battleground!
                </span>
                <h2>Free Fire</h2>

                <Stack
                  direction="row"
                  spacing={"7rem"}
                  justifyContent={"space-between"}
                >
                  <span>Pool Price: Rs. 100000</span>
                  <span>Teams: 24/100</span>
                </Stack>
                <span>Registration End Date: 24/10/23</span>

                <Stack direction="row" spacing={2}>
                  <Button variant="outlined" size="small" color="secondary">
                    Learn more
                  </Button>
                  <Button variant="contained" size="small" color="secondary">
                    Register Now
                  </Button>
                </Stack>
              </Grid>
              <Grid className={scss.image}>
                <img src="/images/cod5.jpg" alt="" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default tournaments;
