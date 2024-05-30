import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Footer } from './components/Footer';
import { Index } from './components/Index';
import { DoctorPage } from './components/DoctorPage';
import { ProtectedRoutes } from './hook/ProtectedRoutes';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Index/>} />
        <Route path="/home" element={<Index/>} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/doctorpage" element={<DoctorPage/>} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
