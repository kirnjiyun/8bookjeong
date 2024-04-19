import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import FilteredPage from '../pages/FilteredPage/FilteredPage';
import DetailPage from '../pages/DetailPage/DetailPage';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/books/:categoryId' element={<FilteredPage />} />
      <Route path='/products/:isbn13' element={<DetailPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}
