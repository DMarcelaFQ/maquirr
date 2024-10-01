import './App.css'
import Home from './views/Home/Home'
// import MyAppointments from './views/MyAppointments/MyAppointments'
import Login from './views/Login/Login'


function App() {
  

  return (
    <>
      <header>
        <Home />
      </header>
      <main>
        <div>
          <Login />
          {/* <MyAppointments /> */}
        </div>
      </main>
    </>
  )
}

export default App
