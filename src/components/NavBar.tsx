import Link from "next/link";
import React from "react";
import styled from "styled-components";

function NavBar() {
  return (
    <div>
      <NavbarContainer>
        <NavbarWrapper>
          <Logo>
            <a href="#">Zone Esports</a>
          </Logo>
          <NavLinks>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/tournaments">Tournaments</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
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
  padding: 15px 0;
  position: fixed; /* Make the navbar fixed */
  top: 0; /* Position it at the top of the viewport */
  width: 100%; /* Full-width navbar */
  z-index: 100; /* Ensure it's above other content */
  transition: background-color 0.3s ease; /* Add a smooth transition effect for background color */
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
  a {
    text-decoration: none;
    color: #ff9900; /* Bright orange for a gaming touch */
    font-family: "Press Start 2P", sans-serif;
    font-size: 32px;
    text-transform: uppercase; /* All caps for emphasis */
    letter-spacing: 2px;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;

  li {
    margin-right: 20px;
    position: relative;

    &:last-child {
      margin-right: 0;
    }
  }

  a {
    text-decoration: none;
    color: #fff;
    font-family: "Arcade Classic", sans-serif;
    font-size: 20px;
    position: relative;
    transition: color 0.3s ease;

    &:hover {
      color: #aebac2;
    }

    &:before {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -5px;
      left: 0;
      background-color: #ff9900;
      transition: width 0.3s ease;
    }

    &:hover:before {
      width: 100%;
    }
  }
`;
export default NavBar;
