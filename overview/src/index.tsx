import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Control from './pages/Control';
import Profile from './pages/Profile';
import ProductDetail from './pages/ProductDetail';
import { Provider } from 'react-redux';
import { store } from './useRedux/store';
import Likes from './pages/Likes';
import { AppProvider } from './utils/AppContext';

const route =
<Provider store={store}>
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={ <Control item={<Dashboard />} />  } />
        <Route path='/profile' element={ <Control item={<Profile />} />  } />
        <Route path='/productDetail/:seotitle/:id' element={ <Control item={<ProductDetail />} />  } />
        <Route path='/likes' element={ <Control item={<Likes />} />  } />
      </Routes>
    </BrowserRouter>
  </AppProvider>
</Provider> 



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(route);