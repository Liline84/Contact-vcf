'use client';

import languages from '@/data/languages.json';

interface Props {
  value: string;
  onChange: (code: string) => void;
  id?: string;
  label?: string;
}

export default function LanguageSelector({ value, onChange, id = 'langue', label = 'Langue' }: Props) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-ink">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
      >
        <option value="" disabled>
          Selectionnez une langue
        </option>
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
