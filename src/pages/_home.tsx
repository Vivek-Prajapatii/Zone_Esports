import React from "react";
import BootstrapCarousel from "@/components/carousels/BootStrap";
import Link from "next/link";
import { Typography, Grid, Container } from "@mui/material";
import scss from "../styles/pages/home.module.scss";

function home() {
  return (
    <div className={scss.parent_grid}>
      <Container>
        <Grid style={{ paddingTop: "40px", marginTop: "30px" }}>
          <hr
            style={{
              background: "#0d0d0e",
              height: "1.5px",
              margin: "2px",
            }}
          />

          <Grid>
            <Typography variant="h1" sx={{ fontFamily: "monospace" }}>
              Be the next Champion
            </Typography>
          </Grid>

          {/* <BootstrapCarousel /> */}
          <hr
            style={{
              background: "#0d0d0e",
              height: "1.5px",
              border: "none",
              margin: "5px",
            }}
          />
          {/* <ResponsiveCarousel /> */}
        </Grid>
      </Container>
    </div>
  );
}

export default home;
