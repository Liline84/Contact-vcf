import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PremiumSection from '@/components/PremiumSection';

export const metadata: Metadata = { title: 'Premium' };

export default function PremiumPage() {
  return (
    <>
      <Navbar />
      <main className="py-12">
        <div className="container-page">
          <h1 className="font-display text-3xl font-bold text-ink">Plans</h1>
          <p className="mt-2 max-w-2xl text-gray-600">
            Le plan Gratuit suffit pour demarrer. Premium debloque les
            connexions illimitees et des outils de recherche avances pour les
            professionnels et associations actives.
          </p>
        </div>
        <PremiumSection />
      </main>
      <Footer />
    </>
  );
}
