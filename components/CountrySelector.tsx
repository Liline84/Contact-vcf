'use client';

import countries from '@/data/countries.json';

interface Props {
  langue: string;
  value: string;
  onChange: (code: string) => void;
  id?: string;
  label?: string;
}

export default function CountrySelector({ langue, value, onChange, id = 'pays', label = 'Pays' }: Props) {
  const options = countries.filter((c) => c.languages.includes(langue));

  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-ink">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={!langue}
        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 disabled:bg-gray-50 disabled:text-gray-400"
      >
        <option value="" disabled>
          {langue ? 'Selectionnez un pays' : 'Choisissez d\'abord une langue'}
        </option>
        {options.map((c) => (
          <option key={c.code} value={c.code}>
            {c.flag} {c.name} ({c.dial})
          </option>
        ))}
      </select>
    </div>
  );
}
