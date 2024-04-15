import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
    </Routes>
  );
}
