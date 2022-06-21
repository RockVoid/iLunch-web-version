import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Homepage } from './pages/homepage/home.js';
import { RegisterPage } from './pages/register/index.js';
import { StoreProfile } from './pages/store/index.js';
import './App.css';
import { Login } from './pages/login/index.js';

const App = () => {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Homepage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/store-profile" element={<StoreProfile />}></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
