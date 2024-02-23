import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuPage from './pages/menu/menu.tsx';
import HomePage from './pages/home/home.tsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path="/cardapio" element={<MenuPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;