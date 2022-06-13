import { Routes, Route, Link } from 'react-router-dom';
import { Homepage } from './pages/homepage/home.js';
import { RegisterPage } from './pages/register/index.js';
import { StoreProfile } from './pages/store/index.js';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/store-profile" element={<StoreProfile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
