import React from 'react';
import { NavLink } from 'react-router-dom';
import { SunIcon, MoonIcon, HomeIcon, TableIcon, MapIcon, CogIcon } from '@heroicons/react/outline';

export default function Sidebar({ theme, onToggleTheme }) {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 p-4">
      <nav className="space-y-2">
        <NavLink to="/" className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
          <HomeIcon className="h-5 w-5 mr-2" /> Dashboard
        </NavLink>
        <NavLink to="/tabelas" className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
          <TableIcon className="h-5 w-5 mr-2" /> Tabelas
        </NavLink>
        <NavLink to="/mapa" className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
          <MapIcon className="h-5 w-5 mr-2" /> Mapa
        </NavLink>
        <NavLink to="/config" className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
          <CogIcon className="h-5 w-5 mr-2" /> Configurações
        </NavLink>
      </nav>
      <button onClick={onToggleTheme} className="mt-6 flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
        {theme === 'dark' ? <SunIcon className="h-5 w-5 mr-2" /> : <MoonIcon className="h-5 w-5 mr-2" />} Alternar Tema
      </button>
    </aside>
}
