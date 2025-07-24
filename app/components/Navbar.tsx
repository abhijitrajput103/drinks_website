import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 md:p-9 p-3">
      <Image
        className="md:w-32 w-20"
        src="/images/nav-logo.svg"
        alt="Logo"
        width={32}
        height={32}
      />
    </nav>
  );
};

export default Navbar;
