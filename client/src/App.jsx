import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { SignUp } from './Pages/SignUp';
import { Profile } from './Pages/Profile';
import { About } from './Pages/About';
import  {Login } from './Pages/Login';
import {Header} from './components/Header';

export default function App() {
  return ( 
<BrowserRouter>
<Header />
<Routes>
<Route path='/' element={<Home />}/>
<Route path='/login' element={<Login />}/>
<Route path='/sign-up' element={<SignUp />}/>
<Route path='/profile' element={<Profile />}/>
<Route path='/about' element={<About />}/>
</Routes>
  </BrowserRouter> )
}