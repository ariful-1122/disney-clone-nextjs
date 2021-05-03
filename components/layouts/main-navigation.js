import React from "react";
import styled from "styled-components";
import Link from "next/link";

function MainNavigation() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <Link href="/">
          <a>
            <img src="/images/home-icon.svg" />
            <span>Home</span>
          </a>
        </Link>
        <Link href="/">
          <a>
            <img src="/images/search-icon.svg" />
            <span>Search</span>
          </a>
        </Link>
        <Link href="/">
          <a>
            <img src="/images/watchlist-icon.svg" />
            <span>Watchlist</span>
          </a>
        </Link>
        <Link href="/">
          <a>
            <img src="/images/original-icon.svg" />
            <span>Original</span>
          </a>
        </Link>
        <Link href="/">
          <a>
            <img src="/images/movie-icon.svg" />
            <span>Movies</span>
          </a>
        </Link>
        <Link href="/">
          <a>
            <img src="/images/series-icon.svg" />
            <span>Series</span>
          </a>
        </Link>
      </NavMenu>
      <UserImg src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" />
    </Nav>
  );
}

export default MainNavigation;

const Nav = styled.nav`
  background: #090b13;
  height: 70px;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 3rem;
`;

const Logo = styled.img`
  width: 8rem;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 2rem;
  align-items: center;

  a {
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.4rem;
    padding: 0 1.2rem;
    cursor: pointer;

    img {
      height: 2rem;
    }

    span {
      letter-spacing: 1.42px;
      text-transform: uppercase;
      position: relative;
      &::after {
        content: "";
        background: #fff;
        height: 2px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -0.4rem;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.93) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span::after {
        /* width: 100%; */

        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  cursor: pointer;
`;
