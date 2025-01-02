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
  const routeData = [
    {
      path:'/main',
      page: <MainPage/>
    },
    {
      path:'/users',
      page: <Users/>
    },
    {
      path:'/products',
      page: <Products/>
    },
    {
      path:'/carts',
      page: <Carts/>
    },
  ]
  return (
    <>    
      <BrowserRouter>
    <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Login setIsAuthenticated={setIsAuthenticated}/>}/>
        </Routes>
    </QueryClientProvider>
    <Routes>
      {
        routeData.map((el, index)=>{
          return <Route key={index} path={el.path} element={<ProtectedRoute isAuthenticated={isAuthenticated}>{el.page}</ProtectedRoute>}/>
        })
      }
    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
