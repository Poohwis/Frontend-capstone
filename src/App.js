import './App.css';
import Header from './components/Header'
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom'
import Homepage from './components/Homepage';
import About from './components/About';
import BookingPage from './components/BookingPage';
import logo from './images/Logo.svg'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <nav className='navbar'>
          <img className="logo" src={logo} alt="Logo" />
          <ul className='nav-list'>
            <li><Link to ="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className='nav-link'>About</Link></li>
            <li><a to="/#"className="nav-link" >Menu</a></li>
            <li><Link to="/reservation"className="nav-link" >Reservations</Link></li>
            <li><a to="/#"className="nav-link" >Order Online</a></li>
            <li><a to="/#"className="nav-link" >Login</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/reservation" element={<BookingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
