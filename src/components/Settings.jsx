import React from 'react';
import Papa from 'papaparse';

export default function Settings({ onDataLoad }) {
  function handleFile(e) {
    Papa.parse(e.target.files[0], { header: true, complete: res => {
      const cols = res.meta.fields.map(f => ({ Header: f, accessor: f }));
      onDataLoad({ data: res.data, cols });
    }});
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Configurações</h2>
      <div className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Arquivo de Dados (CSV/JSON)</span>
          <input type="file" accept=".csv,.json" onChange={handleFile} className="mt-1 block w-full" />
        </label>
      </div>
    </div>
}
