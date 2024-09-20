
import './App.css'
import Login from './pages/login/login.jsx';
import Home from './pages/Home/Home.jsx';
import Signup from './pages/signup/signup.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

function App() {

  return (
    <>
      <div>
        <Navbar />
        {/*<Login />
        <Signup />*/}
        <Home />
      </div>

    </>
  )
}

export default App
