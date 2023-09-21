/* eslint-disable @next/next/no-img-element */
import {
  Grid,
  Container,
  Typography,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import scss from "../styles/pages/about.module.scss";
import React from "react";
import Management from "../../public/Items.json";
import EmailIcon from "@mui/icons-material/Email";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstaIcon from "/images/Insta.svg";
function about() {
  return (
    <div>
      <Container className={scss.container} maxWidth={"xl"}>
        <Grid className={scss.outer_grid}>
          <Grid className={scss.title}>
            <Grid className={scss.inputwrapper}>
              <span className={scss.who_are_we}></span>
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
              <span className={scss.management_team}></span>
            </Grid>
          </Grid>
          <Grid className={scss.cards}>
            {Management.managementTeam.map((member: any) => {
              return (
                <Grid className={scss.card} key={member.id}>
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
      </Container>
    </div>
  );
}

export default about;
