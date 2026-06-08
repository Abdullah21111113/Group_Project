import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
            Secure IoT Communication Platform
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            A modern IoT security system built with ESP32,
            Next.js, Node.js, Supabase, and cryptographic
            key exchange for secure device communication.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            
            <Link
              href="/dashboard"
              className="rounded-xl bg-black px-7 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Open Dashboard
            </Link>

            <Link
              href="/devices"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              View Devices
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Core Features
          </h2>

          <p className="mt-4 text-gray-600">
            Designed for secure and scalable IoT communication.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          
          {/* Card 1 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">
              Secure Key Exchange
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Uses Diffie-Hellman cryptographic techniques
              to establish secure communication channels
              between devices and server.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">
              Real-Time Monitoring
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Monitor sensor messages, nonce values,
              and device activity instantly through
              a modern dashboard interface.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">
              Modern Full Stack
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Built with Next.js frontend, Node.js backend,
              Supabase database, and ESP32 device integration
              for high performance.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Technologies Used
            </h2>

            <p className="mt-4 text-gray-600">
              Modern technologies powering the platform.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-5">
            
            {[
              "ESP32",
              "Next.js",
              "Node.js",
              "Supabase",
              "Tailwind CSS",
            ].map((tech) => (
              <div
                key={tech}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {tech}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        
        <div className="rounded-3xl bg-black px-8 py-16 text-center text-white">
          
          <h2 className="text-4xl font-bold">
            Start Monitoring Securely
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-300">
            Build reliable and secure IoT communication systems
            with real-time monitoring and encrypted data exchange.
          </p>

          <Link
            href="/dashboard"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
          >
            Explore Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}