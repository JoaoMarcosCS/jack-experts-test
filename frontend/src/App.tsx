import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignUp } from './signUp';
import { SignIn } from './signIn';
import { Toaster } from 'sonner';
import { AuthGuard } from './auth/AuthGuard';
import { RootLayout } from './components/Layout';
import { Home } from './home';
import { NotFound } from './notFound';
import { CreateTask } from './createTask';
import { Favorites } from './favorites';
import { Profile } from './profile';
import { Search } from './search';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />

          <Route path="/signup" element={<SignUp />} />

          <Route path="/" element={
            <AuthGuard>
              <RootLayout>
                <Home />
              </RootLayout>
            </AuthGuard>
          } />

          <Route path="/create" element={
            <AuthGuard>
              <RootLayout>
                <CreateTask />
              </RootLayout>
            </AuthGuard>
          } />

          <Route path="/profile" element={
               <AuthGuard>
               <RootLayout>
                 <Profile />
               </RootLayout>
             </AuthGuard>
          } />

          <Route path="/search" element={
             <AuthGuard>
             <RootLayout>
               <Search />
             </RootLayout>
           </AuthGuard>
          } />

          <Route path="/favorites" element={
            <AuthGuard>
              <RootLayout>
                <Favorites />
              </RootLayout>
            </AuthGuard>
          } />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  )
}

export default App;
