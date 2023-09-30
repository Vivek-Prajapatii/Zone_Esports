import { Container, Grid, Stack, IconButton } from "@mui/material";
import React from "react";
import scss from "../styles/components/Footer.module.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";

function Footer() {
  return (
    <Container className={scss.container} maxWidth="xl">
      <Grid className={scss.grid_container}>
        <Grid className={scss.copyright}>
          © 2023 Zone Esports, India, All rights reserved
        </Grid>
        <Grid className={scss.socials}>
          <Stack direction="row">
            <IconButton aria-label="delete">
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <MailIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
