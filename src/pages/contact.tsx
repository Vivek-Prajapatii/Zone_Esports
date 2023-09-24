import React from "react";
import scss from "../styles/pages/contact.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";

function contact() {
  return (
    <Container className={scss.container} maxWidth={"xl"}>
      <Grid className={scss.outer_container}>
        <Grid className={scss.card}>
          <Typography
            variant="h2"
            sx={{
              width: "fit-content",
              height: "fit-content",
              color: "aliceblue",
            }}
          >
            Contact us
          </Typography>
          <Grid item className={scss.grid_rows} sx={{ mt: "0rem" }}>
            <TextField className={scss.textfield} label="First Name" />
            <TextField className={scss.textfield} label="Last Name" />
          </Grid>
          <Grid item className={scss.grid_rows}>
            <TextField className={scss.textfield} label="Team" />
            <TextField className={scss.textfield} label="Email" />
          </Grid>
          <Grid item className={scss.grid_rows}>
            <TextField
              className={scss.notes}
              multiline
              label="Notes"
              inputProps={{
                style: {
                  height: "4rem",
                  padding: "0 14px",
                },
              }}
            />
          </Grid>
          <Grid className={scss.grid_rows}>
            <div className={scss.button}>
             SUBMIT
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default contact;
