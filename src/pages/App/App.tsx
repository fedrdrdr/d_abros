import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from '../../components/auth/Login';
import Register from '../../components/auth/Register';
import MainPage from '../MainPage/MainPage';
import CreatePost from '../CreatePost/CreatePost';

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
            <li>
              <Link to="/createPost">Create Post</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/createPost" element={<CreatePost />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App
