import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignUp } from './signUp';
import { SignIn } from './signIn';
import { Toaster } from 'sonner';
import { AuthGuard } from './auth/AuthGuard';
import { Home } from './Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />

          <Route path="/signup" element={<SignUp />} />

          <Route path="/" element={
            <AuthGuard>
              <Home />
            </AuthGuard>
          } />

          <Route path="/create" element={"Create"} />

          <Route path="/profile" element={"Profile"} />

          <Route path="/search" element={"Search"} />

          <Route path="/favorites" element={"Favorites"} />

        </Routes>
      </Router>
      <Toaster />
    </>
  )
}

export default App;
