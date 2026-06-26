import Link from 'next/link';
import { Globe2 } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold text-ink">
          <Globe2 className="h-6 w-6 text-brand" aria-hidden="true" />
          Global Contact Sync
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
          <a href="#fonctionnalites" className="hover:text-ink">Fonctionnalites</a>
          <a href="#google-sync" className="hover:text-ink">Synchronisation</a>
          <Link href="/premium" className="hover:text-ink">Premium</Link>
          <a href="#faq" className="hover:text-ink">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden text-sm font-semibold text-gray-600 hover:text-ink sm:inline">
            Connexion
          </Link>
          <Link href="/register" className="btn-primary !px-4 !py-2 text-sm">
            Commencer
          </Link>
        </div>
      </div>
    </header>
  );
}
