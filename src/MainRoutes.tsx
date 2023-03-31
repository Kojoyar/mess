import * as React from 'react';
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ChatPage from './pages/ChatPage'
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';


const MainRoutes : React.FC = () : any => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/chat' element={<ChatPage />} />
    </Routes>
  )
}

export default MainRoutes