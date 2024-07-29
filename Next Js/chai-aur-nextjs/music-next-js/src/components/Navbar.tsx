"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/Navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            active={active}
            setActive={setActive}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem active={active} setActive={setActive} item="course">
          <div className="flex justify-center items-center flex-col space-y-5">
            <HoveredLink href="/courses/all-courses">All courses</HoveredLink>
            <HoveredLink href="/courses/basic-music-theory">
              Basic Music theory
            </HoveredLink>
            <HoveredLink href="/courses/advanced-composition">
              Advanced composition
            </HoveredLink>
            <HoveredLink href="/courses/song-writing">Song writing</HoveredLink>
            <HoveredLink href="/courses/music-production">
              Music Production
            </HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact-us"}>
          <MenuItem
            active={active}
            setActive={setActive}
            item="Contact us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
