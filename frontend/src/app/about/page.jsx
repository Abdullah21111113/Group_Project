// app/about/page.jsx

import Link from "next/link";

export default function AboutPage() {

  const teamMembers = [
    {
      name: "Abdullah Al Noman",
      id: "21111113",
      department: "Computer Science & Engineering",
      session: "2020-2021",
      email: "abdullahalnoman654321@gmail.com",
    },
    {
      name: "Md Mukter Hosen",
      id: "21111115",
      department: "Computer Science & Engineering",
      session: "2020-2021",
      email: "mukter@gmail.com",
    },
    {
      name: "Md Mehedi Hasan Rifat",
      id: "21111120",
      department: "Computer Science & Engineering",
      session: "2020-2021",
      email: "rifatahammed2222@gmail.com",
    },
    {
      name: "Md Al-Amin Shishir",
      id: "21111126",
      department: "Computer Science & Engineering",
      session: "2020-2021",
      email: "shishir.jstu@gmail.com",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          {/* Heading */}
          <div className="mt-10 max-w-4xl">
            <h1 className="text-5xl font-bold leading-tight text-gray-900">
              About Our Project
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              SecureIoT is a secure communication platform designed
              for IoT devices using modern cryptographic algorithms,
              encrypted message exchange, and real-time monitoring.
              The project integrates ESP32 devices with a modern
              full-stack web system powered by Next.js, Node.js,
              and Supabase.
            </p>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Team Members
            </h2>

            <p className="mt-4 text-gray-600">
              Meet the people behind the project.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition hover:shadow-md"
              >

                {/* Avatar */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black text-2xl font-bold text-white">
                  {member.name.charAt(0)}
                </div>

                {/* Name */}
                <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                  {member.name}
                </h3>

                {/* Details */}
                <div className="mt-6 space-y-4">

                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Student ID
                    </p>

                    <p className="mt-1 text-gray-900">
                      {member.id}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Department
                    </p>

                    <p className="mt-1 text-gray-900">
                      {member.department}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Session
                    </p>

                    <p className="mt-1 text-gray-900">
                      {member.session}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Email
                    </p>

                    <p className="mt-1 break-all text-gray-900">
                      {member.email}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}