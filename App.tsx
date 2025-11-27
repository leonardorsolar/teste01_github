import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProjectHeader from './components/ProjectHeader';
import Board from './components/Board';
import { BoardData, INITIAL_DATA } from './types';

function App() {
  const [data, setData] = useState<BoardData>(() => {
    const saved = localStorage.getItem('projectFlow-data');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse board data", e);
        return INITIAL_DATA;
      }
    }
    return INITIAL_DATA;
  });

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('projectFlow-data', JSON.stringify(data));
  }, [data]);

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark text-text-light-primary dark:text-dark-primary font-display">
      <Header onSearch={setSearchTerm} searchTerm={searchTerm} />
      <main className="flex flex-1 flex-col overflow-hidden">
        <ProjectHeader />
        <Board data={data} setData={setData} searchTerm={searchTerm} />
      </main>
    </div>
  );
}

export default App;