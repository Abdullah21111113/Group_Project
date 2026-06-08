// components/Navbar.jsx

"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          SecureIoT
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition hover:text-black"
          >
            Home
          </Link>

          <Link
            href="/devices"
            className="text-sm font-medium text-gray-700 transition hover:text-black"
          >
            Devices
          </Link>

          <Link
            href="/dashboard"
            className="text-sm font-medium text-gray-700 transition hover:text-black"
          >
            Dashboard
          </Link>

          <Link
            href="/security"
            className="text-sm font-medium text-gray-700 transition hover:text-black"
          >
            Security
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 transition hover:text-black"
          >
            About Us
          </Link>

          <Link
            href="/technology"
            className="text-sm font-medium text-gray-700 transition hover:text-black"
          >
            Technology Used
          </Link>
        </div>
      </div>
    </nav>
  );
}