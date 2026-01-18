"use client"; // Error components must be Client Components bc next

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div className="p-4 bg-red-100 text-red-800 rounded">{error.message}</div>
  );
}
