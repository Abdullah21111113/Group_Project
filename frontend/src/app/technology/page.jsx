// app/technology/page.jsx

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">

          <h1 className="text-5xl font-bold text-gray-900">
            Technology Used
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            This project is built using modern full-stack and IoT technologies
            to ensure secure, scalable, and real-time communication between
            devices and the server.
          </p>

        </div>
      </section>

      {/* Tech Stack */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">
            Custom Encryption
            </h2>
            <p className="mt-4 text-gray-600 leading-7">
            A custom encryption technique is implemented to secure communication
            between the ESP32 device and the server by transforming sensor data
            into encrypted messages before transmission.
            </p>
            <p className="mt-4 text-sm text-gray-500">
            Role: Data Security / Encryption System
            </p>
         </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">
              Digital Signature
            </h2>
            <p className="mt-4 text-gray-600 leading-7">
              Digital signature technology is used to verify the authenticity and
              integrity of transmitted data, ensuring that messages are sent from
              trusted devices and are not modified during communication.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Role: Authentication / Data Integrity
            </p>
          </div>

          
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">
              ESP32
            </h2>
            <p className="mt-4 text-gray-600 leading-7">
              ESP32 is used as the IoT hardware device responsible for collecting
              sensor data and sending encrypted messages to the server.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Role: Hardware / IoT Device
            </p>
          </div>

          {/* Next.js */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">
              Next.js
            </h2>
            <p className="mt-4 text-gray-600 leading-7">
              Next.js is used to build the frontend dashboard for monitoring
              devices, viewing encrypted messages, and managing data flow.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Role: Frontend Framework
            </p>
          </div>

          {/* Node.js */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">
              Node.js
            </h2>
            <p className="mt-4 text-gray-600 leading-7">
              Node.js powers the backend APIs, handling device communication,
              key exchange, and secure data processing.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Role: Backend Runtime
            </p>
          </div>

          {/* Supabase */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">
              Supabase
            </h2>
            <p className="mt-4 text-gray-600 leading-7">
              Supabase is used as the database layer to store sensor data,
              device logs, and encrypted messages in real-time.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Role: Database / Backend-as-a-Service
            </p>
          </div>

          {/* Diffie-Hellman */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">
              Diffie-Hellman Key Exchange
            </h2>
            <p className="mt-4 text-gray-600 leading-7">
              Used for secure key generation between devices and server,
              ensuring encrypted communication without exposing private keys.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Role: Cryptography
            </p>
          </div>

          {/* Tailwind CSS */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">
              Tailwind CSS
            </h2>
            <p className="mt-4 text-gray-600 leading-7">
              Tailwind CSS is used for designing a modern, responsive, and
              clean user interface across all pages.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Role: UI Styling
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}