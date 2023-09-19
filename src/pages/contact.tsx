import React from "react";
import scss from "../styles/pages/contact.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";

function contact() {
  return (
    <Container className={scss.container} maxWidth={"xl"}>
      <Grid className={scss.outer_container}>
        {/* <Grid className={scss.card}>
          <Typography variant="h2" sx={{p:"30px 20px 0px", color: "aliceblue"}}>
            Contact us
          </Typography>
          <hr></hr>
        </Grid> */}
        <Grid className={scss.card}>
          <Grid className={scss.inputwrapper} sx={{ mt: "0rem", ml:"10%" }}>
            <span className={scss.placeholder}></span>
          </Grid>
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
          <Grid item className={scss.grid_rows}>
            <Button variant="contained" size={"large"} sx={{ mt: 2 }}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default contact;
