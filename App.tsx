
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SubjectPage from './pages/SubjectPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen font-sans">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/subject/:subjectId" element={<SubjectPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
