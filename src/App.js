import './App.css';
import { Header } from './components/header';
import { Homepage } from './pages/homepage/homepage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage />
    </div>
  );
}

export default App;
