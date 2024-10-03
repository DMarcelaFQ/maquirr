import Home from './views/Home/Home'
import MyAppointments from './views/MyAppointments/MyAppointments'
import Login from './views/Login/Login'
import Register from './views/Register/Register'
import Schedule from './views/Schedule/Schedule'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Title from './components/Title/Title'
import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'


function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    if(userId && location.pathname === "/login") {
      navigate("/");
    } else if (
      !userId 
      && location.pathname !== "./login"
      && location.pathname !== "/register"
      && location.pathname !== "/") {
      navigate("/login");
    }
  },[location.pathname])

  useEffect(() => {

  const validateRoutes = [
      "/", 
      "/login", 
      "/register", 
      "/myAppointments", 
      "/schedule"]
    if(!validateRoutes.includes(location.pathname)) setIsNotFound(true)
    else setIsNotFound(false)
  },[location.pathname])
  

  return (
    <>
    {!userId ? (
      <main>
        <div className={styles.titleContainer}>
            <Title />
        </div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    ): (
      <>
      {!isNotFound && (          
        <header>
          <Navbar />
        </header>
      )}
      <main>       
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myAppointments" element={<MyAppointments />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      </>
    )}
  
    </>
  )
}

export default App
