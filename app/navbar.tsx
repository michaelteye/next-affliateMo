import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex bg-slate-200">
     <Link href="/" className="mr-5 text-black">Next.js</Link>
     <Link href="/users" className="text-black">Users</Link>
    </div>
  );
};

export default Navbar;
