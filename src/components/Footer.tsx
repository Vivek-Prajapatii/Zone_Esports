import { Container, Grid, Stack, IconButton, Typography } from "@mui/material";
import React from "react";
import scss from "../styles/components/Footer.module.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <Container className={scss.container} maxWidth="xl">
      <Grid className={scss.grid_container}>
        <Grid className={scss.copyright}>
          © 2023 <b>Zone Esports</b>, India, All rights reserved
        </Grid>
        <Grid className={scss.socials}>
          <Stack direction="row" sx={{display:"flex", alignItems:"center"}} spacing={"1rem"}>
            <Typography variant="body1">Follow us on socials</Typography>
            <IconButton>
              <YouTubeIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <MailIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
