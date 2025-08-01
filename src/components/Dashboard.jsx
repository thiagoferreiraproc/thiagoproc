import React from 'react';

export default function Dashboard({ data }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Visão Geral</h2>
      <p>Total de câmeras: {data.length}</p>
    </div>
  );
}
