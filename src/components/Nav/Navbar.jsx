import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/progress">Progress</Link>
      <Link href="/suggestion">Suggestion</Link>
    </div>
  );
};

export default Navbar;
