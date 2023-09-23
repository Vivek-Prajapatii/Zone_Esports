/* eslint-disable @next/next/no-img-element */
import React from "react";
import BootstrapCarousel from "@/components/carousels/BootStrap";
import Link from "next/link";
import { Typography, Grid, Container, Button } from "@mui/material";
import scss from "../styles/pages/home.module.scss";

function home() {
  return (
    <div className={scss.parent_div}>
      <Container className={scss.container} maxWidth="xl">
        <Grid className={scss.upper_grid}>
          <Grid className={scss.inputwrapper}>
            <span className={scss.placeholder}></span>
            <span className={scss.subtitle1}>
              Join the India's best Esports players in a battle for Glory.
              {/* Join hundreds of Champions who win rewards and prizes daily... */}
            </span>
            <span className={scss.subtitle2}>Compete with the best. </span>
            <Button className={scss.button}>
              <Grid item className={scss.register_button}>
                Register Now
              </Grid>
            </Button>
          </Grid>
          {/* <BootstrapCarousel /> */}
        </Grid>
        <Grid className={scss.mid_grid}>
          <Grid item className={scss.title_grid}>
            <span className={scss.title}>
              feel royal by <br /> conquering enemies.
            </span>

            <span className={scss.subtitle1}>
              Join hundreds of Champions who win rewards and prizes daily...
            </span>
            <Button className={scss.button}>
              <Grid item className={scss.register_button}>
                Explore tournaments 
              </Grid>
            </Button>
          </Grid>

          {/* <img src="/images/esports.jpg" alt="phoot missing" /> */}
        </Grid>
      </Container>
    </div>
  );
}

export default home;
