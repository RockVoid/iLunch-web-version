import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/homepage/home.js';
import { RegisterPage } from './pages/register/index.js';
import { StoreProfile } from './pages/store/index.js';
import './App.css';
import { Login } from './pages/login/index.js';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/store-profile" element={<StoreProfile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
