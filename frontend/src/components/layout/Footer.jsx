// components/Footer.jsx

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-14">
        
        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-4">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              SecureIoT
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-600">
              SecureIoT is a secure communication platform designed
              for IoT devices using modern encryption and real-time
              data exchange technologies.
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              About Us
            </h3>

            <p className="mt-5 text-sm leading-6 text-gray-600">
              We focus on building secure and efficient IoT systems
              that protect device communication through cryptographic
              key exchange and modern web technologies.
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Technology Used
            </h3>

            <div className="mt-5 space-y-3 text-sm text-gray-600">
              <p>
                <span className="font-medium text-gray-800">
                  ESP32:
                </span>{" "}
                Handles device communication and sensor integration.
              </p>

              <p>
                <span className="font-medium text-gray-800">
                  Next.js:
                </span>{" "}
                Provides a fast and modern frontend dashboard.
              </p>

              <p>
                <span className="font-medium text-gray-800">
                  Node.js:
                </span>{" "}
                Manages APIs and backend communication.
              </p>

              <p>
                <span className="font-medium text-gray-800">
                  Supabase:
                </span>{" "}
                Stores and manages real-time project data securely.
              </p>

              <p>
                <span className="font-medium text-gray-800">
                  Diffie-Hellman:
                </span>{" "}
                Secures communication through encrypted key exchange.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-sm text-gray-600">
              <p>support@secureiot.com</p>
              <p>Dhaka, Bangladesh</p>
              <p>+880 1XXX-XXXXXX</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-200" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          
          <p className="text-sm text-gray-500">
            © 2026 SecureIoT. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-500 transition hover:text-black"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-sm text-gray-500 transition hover:text-black"
            >
              Terms of Service
            </Link>

            <Link
              href="/cookies"
              className="text-sm text-gray-500 transition hover:text-black"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}