import React from "react";
import { navLinks } from "../constants/constants";
import { Link } from "react-router-dom";

const navLinksHtml = navLinks.map((navItem) => {
  return (
    <Link
      to={navItem.linkTo}
      key={navItem.id}
      className="mx-5 hover:underline hover:underline-offset-4"
    >
      {navItem.title}
    </Link>
  );
});

const Navbar = () => {
  return (
    <header className="sticky top-0">
      <nav className="p-2 flex flex-row justify-evenly items-center flex-wrap bg-primary">
        {navLinksHtml}
      </nav>
    </header>
  );
};

export default Navbar;
