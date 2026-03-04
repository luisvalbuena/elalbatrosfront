import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import CategoryPage from './pages/CategoryPage';
import ArticleDetail from './pages/ArticleDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* NewsPage ahora es HomePage siguiendo el nuevo diseño */}
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/article/:slug" element={<ArticleDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;