'use client';

import { useEffect, useState, useCallback } from 'react';
import { Search, UserPlus } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import CountrySelector from './CountrySelector';
import type { DirectoryEntry } from '@/types';

export default function DirectorySearch() {
  const [langue, setLangue] = useState('');
  const [pays, setPays] = useState('');
  const [secteur, setSecteur] = useState('');
  const [results, setResults] = useState<DirectoryEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [sentTo, setSentTo] = useState<Set<string>>(new Set());

  const search = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (langue) params.set('langue', langue);
      if (pays) params.set('pays', pays);
      if (secteur) params.set('secteur', secteur);

      const res = await fetch(`/api/directory/search?${params.toString()}`);
      const data = await res.json();
      setResults(data.results || []);
    } finally {
      setLoading(false);
    }
  }, [langue, pays, secteur]);

  useEffect(() => {
    search();
  }, [search]);

  async function requestConnection(recipientId: string) {
    const res = await fetch('/api/connections/request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ recipientId }),
    });
    if (res.ok) {
      setSentTo((prev) => new Set(prev).add(recipientId));
    }
  }

  return (
    <div className="space-y-6">
      <div className="card grid gap-4 sm:grid-cols-4">
        <LanguageSelector value={langue} onChange={setLangue} label="Langue" />
        <CountrySelector langue={langue} value={pays} onChange={setPays} label="Pays" />
        <div>
          <label htmlFor="secteur-search" className="mb-1 block text-sm font-medium text-ink">
            Secteur
          </label>
          <input
            id="secteur-search"
            value={secteur}
            onChange={(e) => setSecteur(e.target.value)}
            placeholder="ex : Marketing"
            className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>
        <div className="flex items-end">
          <button onClick={search} className="btn-primary w-full">
            <Search className="h-4 w-4" aria-hidden="true" />
            Rechercher
          </button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {loading && <p className="text-sm text-gray-500">Recherche...</p>}
        {!loading && results.length === 0 && (
          <p className="text-sm text-gray-500">Aucun profil ne correspond a ces criteres.</p>
        )}
        {results.map((entry) => (
          <div key={entry.id} className="card">
            <p className="font-semibold text-ink">{entry.nom}</p>
            {entry.entreprise && <p className="text-sm text-gray-500">{entry.entreprise}</p>}
            <p className="mt-1 text-xs text-gray-400">
              {entry.pays} · {entry.secteur || 'Secteur non precise'}
            </p>
            <button
              onClick={() => requestConnection(entry.id)}
              disabled={sentTo.has(entry.id)}
              className="btn-secondary mt-4 w-full !py-2 text-sm"
            >
              <UserPlus className="h-4 w-4" aria-hidden="true" />
              {sentTo.has(entry.id) ? 'Demande envoyee' : 'Demander la mise en contact'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
