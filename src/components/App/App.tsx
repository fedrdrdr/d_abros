import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
import MainPage from '../../pages/MainPage';

function App() {


  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App
