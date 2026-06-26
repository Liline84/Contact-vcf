import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RegisterForm from '@/components/RegisterForm';

export const metadata: Metadata = { title: 'Inscription' };

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <main className="container-page max-w-xl py-16">
        <h1 className="font-display text-3xl font-bold text-ink">Creer mon profil</h1>
        <p className="mt-2 text-gray-600">
          Quelques informations pour rejoindre l&apos;annuaire international.
        </p>
        <div className="mt-8">
          <RegisterForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
