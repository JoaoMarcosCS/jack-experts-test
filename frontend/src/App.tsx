import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignIn } from './pages/Signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={"signin"} />

        <Route path="/login" element={"login"} />

        <Route path="/" element={<SignIn/>} />

        <Route path="/create" element={"Create"} />

        <Route path="/profile" element={"Profile"} />

        <Route path="/search" element={"Search"} />

        <Route path="/favorites" element={"Favorites"} />

      </Routes>
    </Router>
  )
}

export default App;
