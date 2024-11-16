import { useState } from 'react';
import { auth } from '../firebase'; // Import your firebase config
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import the sign-in function
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirecting
import Navbar from './Navbar';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State to handle error messages
  const navigate = useNavigate(); // Create navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call Firebase authentication
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to CareerGuidance page on successful login
      navigate('/portal'); // Change this to the correct route
    } catch (err) {
      setError(err.message); // Set error message if login fails
      console.error('Login error:', err.message);
    }
  };

  return (
    <> <Navbar/>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>} {/* Display error message */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 block w-full border border-gray-300 rounded p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Login
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default LoginPage;
