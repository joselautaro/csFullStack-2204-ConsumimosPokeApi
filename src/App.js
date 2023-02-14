import './App.css';
import { Pika } from './components/Pikaa/Pika';
import { Segundo } from './components/SegundoItem/Segundo';
import { Primer } from './components/PrimerItem/Primer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Pika/>} />
            <Route path="/primer" element={<Primer/>} />
            <Route path="/segundo" element={<Segundo/>} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>

  );
}

export default App;
