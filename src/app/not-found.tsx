import Link from 'next/link';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6 bg-white p-10 rounded-3xl shadow-xl border border-brand-teal/10">
        <div className="w-20 h-20 bg-brand-teal/5 rounded-full flex items-center justify-center mx-auto text-brand-teal mb-6">
          <FileQuestion size={40} />
        </div>
        <h1 className="text-3xl font-black text-brand-teal-deep tracking-tight">Page Not Found</h1>
        <p className="text-brand-teal-deep/70 font-medium leading-relaxed">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center justify-center px-8 h-14 bg-brand-teal hover:bg-brand-teal-deep text-white font-bold rounded-xl uppercase tracking-widest transition-colors w-full"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
