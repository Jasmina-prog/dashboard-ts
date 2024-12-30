import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { Login } from './login';
import { MainPage } from './pages/mainPage';
import ProtectedRoute from './components/ProtectedRoute';
import { useState } from 'react';
import { Users } from './pages/users';
import { Products } from './pages/products';
import { Carts } from './pages/carts';

const queryClient = new QueryClient

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <>    
      <BrowserRouter>
    <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Login setIsAuthenticated={setIsAuthenticated}/>}/>
        </Routes>
    </QueryClientProvider>
    <Routes>
      <Route path='/main' element={<ProtectedRoute isAuthenticated={isAuthenticated}><MainPage/></ProtectedRoute>}/>
      <Route path='/users' element={<ProtectedRoute isAuthenticated={isAuthenticated}><Users/></ProtectedRoute>}/>
      <Route path='/products' element={<ProtectedRoute isAuthenticated={isAuthenticated}><Products/></ProtectedRoute>}/>
      <Route path='/carts' element={<ProtectedRoute isAuthenticated={isAuthenticated}><Carts/></ProtectedRoute>}/>
    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
