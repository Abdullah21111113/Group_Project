"use client";
import { useEffect, useState } from "react";
import { getLatestSensorData } from "@/services/latestSensorDataService.js";
import { decryptMessage } from "@/utils/decryption.js";
import { bigMod } from "@/utils/bigMod.js";

export default function DashboardPage() {

  const [data, setData] = useState(null);

  const [showPassword, setShowPassword] = useState(false);

  const [secretKey, setSecretKey] = useState("");

  const [decryptedMessage, setDecryptedMessage] = useState("");

  useEffect(() => {

    const fetchData = async () => {

      const response = await getLatestSensorData();

      setData(response);
    };

    fetchData();

  }, []);

  const handleDecrypt = () => {
  if (!data || !secretKey) return;

  try {
    const clientPrivateKey = BigInt(secretKey);
    if(secretKey!=process.env.NEXT_PUBLIC_SERVER_PRIVATE_KEY){
      setSecretKey("");
      throw new Error("Key Not Matched.");
    }
    const senderPublicKey = BigInt(
      process.env.NEXT_PUBLIC_SENDER_PUBLIC_KEY
    );
    const prime = BigInt(process.env.NEXT_PUBLIC_PRIME);
    const sharedKey = bigMod(
      senderPublicKey,
      clientPrivateKey,
      prime
    );
    const ans = decryptMessage(
      data.message,
      data.nonce,
      sharedKey
    );



    setDecryptedMessage(ans);
    setSecretKey("");

  } catch (err) {
    console.error(err);
    setDecryptedMessage("Decryption failed");
  }
};

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      
      <div className="mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Dashboard
          </h1>

          <p className="mt-3 text-gray-600">
            Monitor encrypted sensor communication data.
          </p>
        </div>

        {/* Latest Data Card */}
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Latest Sensor Data
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Most recently received encrypted device data.
              </p>
            </div>

            <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              Active
            </div>
          </div>

          {!data ? (

            <div className="rounded-2xl border border-dashed border-gray-300 p-10 text-center">
              <p className="text-gray-500">
                No sensor data available.
              </p>
            </div>

          ) : (

            <div className="grid gap-6">

              {/* Encrypted Device ID */}
              <div className="rounded-2xl bg-gray-50 p-6">
                <p className="text-sm font-medium text-gray-500">
                  Encrypted Device Id
                </p>

                <div className="mt-3 rounded-xl bg-white p-4">
                  <p className="break-all text-lg font-medium text-gray-900">
                    {data.device_id}
                  </p>
                </div>
              </div>

              {/* Encrypted Message */}
              <div className="rounded-2xl bg-gray-50 p-6">
                <p className="text-sm font-medium text-gray-500">
                  Encrypted Message
                </p>

                <div className="mt-3 rounded-xl bg-white p-4">
                  <p className="break-all text-lg font-medium text-gray-900">
                    {data.message}
                  </p>
                </div>
              </div>

              {/* Nonce */}
              <div className="rounded-2xl bg-gray-50 p-6">
                <p className="text-sm font-medium text-gray-500">
                  Nonce
                </p>

                <div className="mt-3 rounded-xl bg-white p-4">
                  <p className="break-all text-lg font-medium text-gray-900">
                    {data.nonce}
                  </p>
                </div>
              </div>

              {/* Secret Key */}
              <div className="rounded-2xl bg-gray-50 p-6">

                <p className="mb-3 text-sm font-medium text-gray-500">
                  Secret Key
                </p>

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your secret key"
                    value={secretKey}
                    required
                    onChange={(e) =>
                      setSecretKey(e.target.value)
                    }
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 pr-24 text-sm outline-none transition focus:border-black"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-600 hover:text-black"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>
              </div>

              {/* Enter Button */}
              <button
                onClick={handleDecrypt}
                className="rounded-xl bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                Enter
              </button>

              {/* Decrypted Message */}
              <div className="rounded-2xl bg-gray-50 p-6">
                <p className="text-sm font-medium text-gray-500">
                  Decrypted Message
                </p>

                <div className="mt-3 rounded-xl bg-white p-4">
                  <p className="break-all text-lg font-medium text-gray-900">
                    {decryptedMessage || "No decrypted message"}
                  </p>
                </div>
              </div>

            </div>

          )}
        </div>
      </div>
    </main>
  );
}