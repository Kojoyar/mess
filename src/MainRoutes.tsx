import * as React from 'react';
import RegisterPage from './pages/RegisterPage'
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Profile from './components/Profile/Profile';
import Chat from './components/Chat/Chat';


const MainRoutes : React.FC = () : any => {

  return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/chat' element={<Chat/>} />
      </Routes>
  )
}

export default MainRoutes