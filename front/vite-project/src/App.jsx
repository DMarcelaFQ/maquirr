import './App.css'
import Home from './views/Home/Home'
// import MyAppointments from './views/MyAppointments/MyAppointments'
import Login from './views/Login/Login'
import Register from './views/Register/Register'
import Schedule from './views/Schedule/Schedule'


function App() {
  

  return (
    <>
      <header>
        <Home />
      </header>
      <main>
        <div>
          <Schedule />
          {/* <Register /> */}
          {/* <Login /> */}
          {/* <MyAppointments /> */}
        </div>
      </main>
    </>
  )
}

export default App
