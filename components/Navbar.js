import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="h-28 bg-purple-700 flex justify-between items-center text-white">
            <div className="logo font-bold text-3xl p-5 flex items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        alt="BitLinks Logo"
                        src="/logo.jpg"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <span>BitLinks</span>
                </Link>
            </div>

            <ul className="flex justify-center gap-4 items-center">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/shorten">Shorten</Link>
                </li>
                <li className="flex gap-3">
                    <Link href="https://github.com/adityaredekar123/BitLinks">
                        <button className="bg-purple-500 rounded-lg shadow-lg px-4 py-2 font-bold">
                            GitHub
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
