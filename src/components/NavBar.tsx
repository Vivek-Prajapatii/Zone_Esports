/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import scss from "../styles/components/NavBar.module.scss";
import { Container, Grid } from "@mui/material";

function NavBar() {
  return (
    <div style={{ display: "flex", width: "100vw", justifyContent: "center" }}>
      <Container className={scss.navbar_container} maxWidth={"xl"}>
        <Grid className={scss.navbar_wrapper}>
          <Grid className={scss.logo}>
            <Link href="/">
              <img src="/images/logo1.png" alt="logo" />
            </Link>
          </Grid>
          <Grid className={scss.nav_links}>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/tournaments">TOURNAMENTS</Link>
            </li>
            <li>
              <Link href="/about">ABOUT US</Link>
            </li>
            <li>
              <Link href="/contact">
                <button>CONTACT US</button>
              </Link>
            </li>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default NavBar;
