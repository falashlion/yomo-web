// import './App.css'
import React, { useState, useEffect } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import { HomePage } from './pages/HomePage'
import { ComingPage } from './pages/ComingPage'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<HomePage />} />
      <Route path="/coming-soon" element={<ComingPage />} />
      <Route path="*" element={<ComingPage />} /> 

      </>
    )
  );
  return (
    <RouterProvider
      router={router}
    />
  );
}

export default App
