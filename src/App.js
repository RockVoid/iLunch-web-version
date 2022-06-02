import './App.css';
import { Header } from './components/header';
import { Homepage } from './pages/homepage/homepage.js';
import { MainPage } from './components/mainPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage />
      <MainPage />
    </div>
  );
}

export default App;
