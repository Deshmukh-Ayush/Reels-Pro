"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { NextResponse } from "next/server";

const Header = () => {
  const { data: session } = useSession();

  const handleSignOut = async () => {
    try {
      await signOut();
      return NextResponse.redirect("/login");
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to Sign Out. Try Again later" },
        { status: 401 }
      );
    }
  };

  return <div>
    <button onClick={handleSignOut}>Sign Out</button>
    {session ? (
        <div>Welcome</div>
    ) : (
        <div>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
        </div>
    )}
  </div>;
};

export default Header;
