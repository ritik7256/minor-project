import { Navigate } from 'react-router-dom';
import { auth } from '../firebase'; // Adjust the import based on your file structure

const ProtectedRoute = ({ children }) => {
  const user = auth.currentUser; // Get the currently logged-in user

  return user ? children : <Navigate to="/login" />; // Redirect to login if not authenticated
};

export default ProtectedRoute;
