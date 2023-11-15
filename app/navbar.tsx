"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { status, data:session } = useSession();

  if (status === "loading") return null;
  return (
    <div className="flex bg-slate-200 p-3 space-x-3">
      <Link href="/" className="mr-5 text-black">
        Next.js
      </Link>
      <Link href="/users" className="text-black">
        Users
      </Link>
      {status === "authenticated" && 
      <div className="text-blue-500">
        {session.user?.email}
        <Link href="/api/auth/signout" className="ml-[80px]">Sign Out</Link>
      </div>
      }
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin" className="text-black pl-2">
          SignIn
        </Link>
      )}
    </div>
  );
};
export default Navbar;
