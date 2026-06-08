"use client";

export default function Error({
  error,
  reset,
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-10 shadow-sm">
        
        <h1 className="text-4xl font-bold text-gray-900">
          Something went wrong
        </h1>

        <p className="mt-4 text-gray-600">
          An unexpected error occurred while processing your request.
          Please try again.
        </p>

        {/* Error Message */}
        <div className="mt-6 rounded-lg bg-red-50 p-4 text-sm text-red-600">
          {error?.message || "Unknown Error"}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <button
            onClick={() => reset()}
            className="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Try Again
          </button>

          <a
            href="/"
            className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}