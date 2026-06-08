// app/devices/page.jsx

export default function DevicesPage() {

  const devices = [
    {
      id: "ESP32_001",
      name: "Main Sensor Node",
      status: "Active",
      lastSeen: "Just now",
      location: "Lab 1",
    },
    {
      id: "ESP32_002",
      name: "Temperature Node",
      status: "Active",
      lastSeen: "2 min ago",
      location: "Lab 2",
    },
    {
      id: "ESP32_003",
      name: "Security Node",
      status: "Inactive",
      lastSeen: "1 hour ago",
      location: "Entrance",
    },
    {
      id: "ESP32_004",
      name: "Backup Node",
      status: "Active",
      lastSeen: "5 min ago",
      location: "Server Room",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">

          <h1 className="text-5xl font-bold text-gray-900">
            Devices
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Manage and monitor all connected IoT devices in your system.
            Each device sends encrypted data to the central server using
            secure communication protocols.
          </p>

        </div>
      </section>

      {/* Devices Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {devices.map((device, index) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md"
            >

              {/* Status */}
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {device.name}
                </h2>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    device.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {device.status}
                </span>
              </div>

              {/* Device Info */}
              <div className="mt-6 space-y-4">

                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Device ID
                  </p>

                  <p className="mt-1 text-gray-900">
                    {device.id}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Location
                  </p>

                  <p className="mt-1 text-gray-900">
                    {device.location}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Last Seen
                  </p>

                  <p className="mt-1 text-gray-900">
                    {device.lastSeen}
                  </p>
                </div>

              </div>

              {/* Action */}
              <div className="mt-8">
                <button className="w-full rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
                  View Details
                </button>
              </div>

            </div>
          ))}

        </div>
      </section>

    </main>
  );
}