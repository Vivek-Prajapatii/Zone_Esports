/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import styled from "styled-components";

function NavBar() {
  return (
    <div>
      <NavbarContainer>
        <NavbarWrapper>
          <Logo>
            <Link href="/">
              <img src="/images/logo1.png" alt="logo" />
            </Link>
          </Logo>
          <NavLinks>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/tournaments">TOURNAMENTS</Link>
            </li>
            <li>
              <Link href="/partners">PARTNERS</Link>
            </li>
            <li>
              <Link href="/about">ABOUT US</Link>
            </li>
            <li>
              <Link href="/contact">
                <button>CONTACT US</button>
              </Link>
            </li>
          </NavLinks>
        </NavbarWrapper>
      </NavbarContainer>
    </div>
  );
}

const NavbarContainer = styled.nav`
  background-color: rgba(
    0,
    0,
    0,
    0.7
  ); /* Transparent background with 70% opacity */
  backdrop-filter: blur(10px); /* Apply a blur effect */
  color: #fff;
  padding: 5px 0;
  position: fixed; /* Make the navbar fixed */
  top: 0; /* Position it at the top of the viewport */
  width: 100%; /* Full-width navbar */
  z-index: 100; /* Ensure it's above other content */
  transition: background-color 0.4s ease; /* Add a smooth transition effect for background color */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled.div`
  img {
    width: 250px;
    height: 60px;
    border-radius: 4px;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  li:not(:last-child) {
    margin-top: 10px;
    margin-right: 30px;
    position: relative;

    &:last-child {
      margin-right: 0;
    }

    a {
      text-decoration: none;
      color: #fff;
      font-family: "Minecraftia";
      font-size: 16px;
      position: relative;
      transition: color 0.3s ease;

      &:hover {
        color: #b3dffd;
      }

      &:before {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -5px;
        left: 0;
        background-color: #f15b16;
        transition: width 0.3s ease;
      }

      &:hover:before {
        width: 100%;
      }
    }
  }

  button {
    margin-top: 10px;
    border-radius: 30px;
    height: 32px;
    width: 130px;
    border: 1px;
    text-decoration: none;
    background-color: #34ccf1;

    &:hover {
      background-color: #33bfe2;
    }
  }
`;
export default NavBar;
