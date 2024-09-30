import './App.css'
import Home from './views/Home/Home'
import MyAppointments from './views/MyAppointments/MyAppointments'


function App() {
  

  return (
    <>
      <header>
        <Home />
      </header>
      <main>
        <div>
          <MyAppointments />
        </div>
      </main>
    </>
  )
}

export default App
