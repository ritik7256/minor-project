import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import CareerGuidance from './components/CarrereGuidance';
import ProfilePage from './components/ProfilePage';
 // Import your Start Your Journey page
 import ContactPage from './components/ContactPage';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
       
        
        {/* Protected Routes */}
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <ProtectedRoute>
              <ContactPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/portal" 
          element={
            <ProtectedRoute>
              <CareerGuidance />
            </ProtectedRoute>
          } 
        />
        {/* Add more protected routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
