import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

const Nav = React.memo(function () {
  return (
    <>
      <Link to="/">
        <div className="logo">
          <svg
            width="54"
            height="50"
            viewBox="0 0 54 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 0V50H53.0303V0H0ZM6.61843 47.9199H2.20614V43.75H6.62879V47.9199H6.61843ZM6.61843 39.5898H2.20614V35.4199H6.62879V39.5898H6.61843ZM6.61843 31.25H2.20614V27.0801H6.62879V31.25H6.61843ZM6.61843 22.9199H2.20614V18.75H6.62879V22.9199H6.61843ZM6.61843 14.5801H2.20614V10.4102H6.62879V14.5801H6.61843ZM6.61843 6.24023H2.20614V2.08008H6.62879V6.24023H6.61843ZM44.1954 45.8398H8.83493V27.0801H44.1954V45.8398ZM44.1954 22.9199H8.83493V4.16016H44.1954V22.9199ZM50.8242 47.9199H46.4015V43.75H50.8242V47.9199ZM50.8242 39.5898H46.4015V35.4199H50.8242V39.5898ZM50.8242 31.25H46.4015V27.0801H50.8242V31.25ZM50.8242 22.9199H46.4015V18.75H50.8242V22.9199ZM50.8242 14.5801H46.4015V10.4102H50.8242V14.5801ZM50.8242 6.24023H46.4015V2.08008H50.8242V6.24023Z"
              fill="white"
            />
          </svg>

          <h1 className="noselect">
            React
            <span>Movie</span>
          </h1>
        </div>
      </Link>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Genre</Link>
        </li>
        <li>
          <Link to="/">Country</Link>
        </li>
        <li>
          <Link to="/">Movies</Link>
        </li>
        <li>
          <Link to="/">TV-Series</Link>
        </li>
        <li>
          <Link to="/">Top IMDb</Link>
        </li>
      </ul>
    </>
  );
});

export default Nav;
