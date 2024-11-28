"use client";
import React, { useState } from "react";
import { Navbar, Collapse, Typography, IconButton } from "@material-tailwind/react";

export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  const navList = (
    <ul className="flex flex-col lg:flex-row lg:items-center gap-4">
      <li>
        <a href="#" className="text-blue-gray-900 hover:underline">
          Pages
        </a>
      </li>
      <li>
        <a href="#" className="text-blue-gray-900 hover:underline">
          Account
        </a>
      </li>
      
      <li>
        <a href="#" className="text-blue-gray-900 hover:underline">
          Docs
        </a>
      </li>
    </ul>
  );

  return (
    <nav className="bg-white shadow-lg">
      <Navbar className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Typography as="a" href="#" className="text-lg font-bold">
            T2B Cleaning
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            onClick={() => setOpenNav(!openNav)}
            className="lg:hidden"
            aria-label="Toggle navigation"
          >
            {openNav ? "✖" : "☰"}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <div className="lg:hidden">{navList}</div>
        </Collapse>
      </Navbar>
    </nav>
  );
}
