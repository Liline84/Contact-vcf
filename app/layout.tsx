import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const display = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: 'Global Contact Sync — Connectez-vous au-dela des frontieres',
    template: '%s · Global Contact Sync',
  },
  description:
    'Un annuaire professionnel international, filtre par langue et par pays, avec mise en contact a consentement mutuel.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${display.variable}`}>
      <body className="bg-muted text-ink font-sans antialiased">{children}</body>
    </html>
  );
}
