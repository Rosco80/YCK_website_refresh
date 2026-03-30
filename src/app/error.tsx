'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global Error Boundary Caught:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6 bg-white p-10 rounded-3xl shadow-xl border border-brand-teal/10">
        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto text-red-500 mb-6">
          <AlertCircle size={40} />
        </div>
        <h1 className="text-3xl font-black text-brand-teal-deep tracking-tight">Something went wrong</h1>
        <p className="text-brand-teal-deep/70 font-medium leading-relaxed">
          We encountered an unexpected error. Our team has been notified.
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center px-8 h-14 bg-brand-teal hover:bg-brand-teal-deep text-white font-bold rounded-xl uppercase tracking-widest transition-colors w-full"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
