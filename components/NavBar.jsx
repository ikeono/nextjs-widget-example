import React from "react";
import Link from "next/link";

/* List of shops */

const NavBar = () => {
  return (
    <div style={{ display: "flex", gap: "30px", marginBottom: "30px" }}>
      <Link href="/shop1">Shop 1</Link>
      <Link href="/shop2">Shop 2</Link>
    </div>
  );
};

export default NavBar;
