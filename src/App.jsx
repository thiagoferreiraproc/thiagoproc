import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import TableView from './components/TableView';
import MapView from './components/MapView';
import Settings from './components/Settings';

export default function App() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const sample = [{ id: 1, name: 'Câmera A', status: 'Ativo', latitude: '-23.5', longitude: '-46.6' }];
    setData(sample);
    setColumns([
      { Header: 'ID', accessor: 'id' },
      { Header: 'Nome', accessor: 'name' },
      { Header: 'Status', accessor: 'status' }
    ]);
  }, []);

  return (
    <Router>
      <div className={`flex h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <Sidebar theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <motion.main
            className="p-6 overflow-auto flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<Dashboard data={data} />} />
              <Route path="/tabelas" element={<TableView data={data} columns={columns} />} />
              <Route path="/mapa" element={<MapView data={data} />} />
              <Route path="/config" element={<Settings onDataLoad={({data, cols}) => { setData(data); setColumns(cols); }} />} />
            </Routes>
          </motion.main>
        </div>
      </div>
    </Router>
  );
}
