import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={"Home"} />

        <Route path="/create" element={"Create"} />

        <Route path="/profile" element={"Profile"} />

        <Route path="/search" element={"Search"} />

        <Route path="/favorites" element={"Favorites"} />

      </Routes>
    </Router>
  );
}

export default App;
