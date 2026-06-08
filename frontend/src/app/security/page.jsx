import Link from "next/link";

const securityFeatures = [
  {
    title: "Diffie-Hellman Key Exchange",
    description:
      "Devices and server establish a shared secret over an insecure channel. No private keys are ever transmitted — only public values are exchanged.",
    badge: "Cryptography",
  },
  {
    title: "Nonce-Based Replay Protection",
    description:
      "Every message includes a unique nonce that is verified server-side. Duplicate or replayed messages are automatically rejected.",
    badge: "Integrity",
  },
  {
    title: "AES Symmetric Encryption",
    description:
      "Once the shared secret is established, all subsequent sensor data is encrypted using AES before transmission over the network.",
    badge: "Encryption",
  },
  {
    title: "Device Identity Verification",
    description:
      "Each ESP32 device is registered with a unique device ID. All incoming messages are matched against known device identities.",
    badge: "Authentication",
  },
  {
    title: "Supabase Row-Level Security",
    description:
      "Database access is scoped per device and per user. No device or user can read or modify another device's data.",
    badge: "Authorization",
  },
  {
    title: "Secure Transport (HTTPS/TLS)",
    description:
      "All communication between devices and the backend is transmitted over TLS-encrypted connections to prevent eavesdropping.",
    badge: "Transport",
  },
];

const securitySteps = [
  {
    step: "01",
    title: "Device Registration",
    description:
      "The ESP32 device registers itself with the server using a unique device ID. The server stores the device identity in Supabase.",
  },
  {
    step: "02",
    title: "Key Exchange",
    description:
      "The device and server perform a Diffie-Hellman key exchange. Both sides compute the same shared secret independently.",
  },
  {
    step: "03",
    title: "Session Establishment",
    description:
      "The shared secret is used to derive an AES encryption key. All future messages in the session are encrypted with this key.",
  },
  {
    step: "04",
    title: "Secure Message Transmission",
    description:
      "Sensor data is encrypted, tagged with a nonce, and sent to the server. The server decrypts, validates the nonce, and stores the data.",
  },
];

const stats = [
  { label: "Encryption Standard", value: "AES-256" },
  { label: "Key Exchange Protocol", value: "DH" },
  { label: "Replay Attack Protection", value: "Nonce" },
  { label: "Transport Layer", value: "TLS 1.3" },
];

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-600">
            Security Overview
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
            Built Secure From the Ground Up
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every layer of the platform — from the ESP32 device to the
            Supabase database — is designed with security as a first
            principle. No plaintext secrets. No unverified messages.
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

      {/* Stats Bar */}
      <section className="bg-white border-y border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Security Features</h2>
          <p className="mt-4 text-gray-600">
            Multiple layers of protection across the entire communication stack.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {securityFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <span className="inline-block rounded-lg border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-600">
                {feature.badge}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works — Step by Step */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              How Secure Communication Works
            </h2>
            <p className="mt-4 text-gray-600">
              A step-by-step breakdown of the secure channel setup between
              device and server.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {securitySteps.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-8"
              >
                <p className="text-4xl font-bold text-gray-200">{item.step}</p>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Model Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              What Threats Are Mitigated?
            </h2>
            <p className="mt-4 leading-8 text-gray-600">
              The platform is designed to defend against the most common
              attacks in IoT communication environments.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                {
                  threat: "Eavesdropping",
                  mitigation: "All data is AES-encrypted before transmission.",
                },
                {
                  threat: "Replay Attacks",
                  mitigation: "Nonce values are validated and rejected if reused.",
                },
                {
                  threat: "Man-in-the-Middle",
                  mitigation: "TLS transport and DH key exchange prevent interception.",
                },
                {
                  threat: "Unauthorized Access",
                  mitigation: "Row-level security restricts database access per device.",
                },
                {
                  threat: "Device Spoofing",
                  mitigation: "Device IDs are registered and validated on every request.",
                },
              ].map((item) => (
                <li
                  key={item.threat}
                  className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white px-6 py-4 shadow-sm"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black text-xs text-white">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">{item.threat}</p>
                    <p className="mt-0.5 text-sm text-gray-600">{item.mitigation}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual side card */}
          <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              Security Architecture
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              End-to-end protection at every layer
            </p>

            <div className="mt-8 space-y-3">
              {[
                { layer: "ESP32 Device", detail: "AES encrypt + nonce tag" },
                { layer: "HTTPS / TLS", detail: "Encrypted transport" },
                { layer: "Node.js Backend", detail: "DH session + nonce check" },
                { layer: "Supabase DB", detail: "Row-level security" },
                { layer: "Next.js Frontend", detail: "Auth-gated dashboard" },
              ].map((row, i) => (
                <div
                  key={row.layer}
                  className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 px-5 py-3.5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="font-medium text-gray-900">{row.layer}</span>
                  </div>
                  <span className="text-sm text-gray-500">{row.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl bg-black px-8 py-16 text-center text-white">
          <h2 className="text-4xl font-bold">Explore the Secure Dashboard</h2>
          <p className="mx-auto mt-5 max-w-2xl text-gray-300">
            View live device activity, monitor nonce values, and inspect
            encrypted message logs in real time.
          </p>
          <Link
            href="/dashboard"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
          >
            Open Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}