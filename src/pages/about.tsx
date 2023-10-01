/* eslint-disable @next/next/no-img-element */
import {
  Grid,
  Container,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import scss from "../styles/pages/about.module.scss";
import React from "react";
import Management from "../../public/Items.json";
import "bootstrap/dist/css/bootstrap.min.css";
import EmailIcon from "@mui/icons-material/Email";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
function about() {
  return (
    // <div className={scss.parent_div}>
    <Container className={scss.container} maxWidth={"xl"}>
      <Grid className={scss.grid_bg}>
        <Grid className={scss.outer_grid}>
          <Grid className={scss.title}>
            <Grid className={scss.inputwrapper}>
              <span className={scss.who_are_we}></span>
            </Grid>
          </Grid>
          <Grid
            className={scss.about_us}
            sx={{ border: 1}}
          >
            <Typography variant={"body1"} sx={{ fontFamily: "monospace" }}>
              Welcome to Zone Esports, where gaming enthusiasts unite to compete
              and conquer! We are a passionate gaming tournament company that
              thrives on the adrenaline of BGMI and Call of Duty competitions.
              Our mission is to provide an electrifying platform for gamers of
              all skill levels to showcase their talents, forge new friendships,
              and vie for epic prizes. With meticulously organized tournaments
              and a vibrant gaming community, we're your gateway to the ultimate
              gaming experience. Join us and let's turn your gaming passion into
              victories!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={scss.people_bg_img}>
        <Grid className={scss.people}>
          <Grid className={scss.title}>
            <Grid className={scss.inputwrapper}>
              <span className={scss.management_team}></span>
            </Grid>
          </Grid>
          <Grid className={scss.cards}>
            {Management.managementTeam.map((member: any) => {
              return (
                <Grid
                  className={scss.card}
                  sx={{ border: 1 }}
                  key={member.id}
                >
                  <Grid className={scss.data}>
                    <Typography
                      variant={"h5"}
                      sx={{
                        color: "white",
                        fontFamily: "monospace",
                        m: "2rem",
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography variant={"body1"} className={scss.member_info}>
                      {"- " + member.role}
                    </Typography>
                    <Typography variant={"body1"} className={scss.member_info}>
                      {member.contact}
                    </Typography>
                    <Typography variant={"body1"} className={scss.member_info}>
                      {member.place}
                    </Typography>
                    <Stack
                      sx={{
                        width: "inherit",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <IconButton color={"primary"}>
                        <EmailIcon />
                      </IconButton>
                      <IconButton color={"primary"}>
                        <FacebookTwoToneIcon />
                      </IconButton>
                      <IconButton color={"primary"}>
                        <img src="/images/insta.svg" alt="insta icon" />
                      </IconButton>
                    </Stack>
                  </Grid>
                  <Grid item className={scss.image}>
                    <img src={member.imageUrl} alt="insta icon" />
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
    // </div>
  );
}

export default about;
