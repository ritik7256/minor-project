import { Link } from 'react-router-dom';
import { auth } from '../firebase';

const Navbar = () => {
  const handleLogout = async () => {
    await auth.signOut();
    // Handle logout logic (e.g., redirect to home)
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">CareerGuidance</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white hover:underline">Home</Link></li>
          <li><Link to="/login" className="text-white hover:underline">Login</Link></li>
          <li><Link to="/register" className="text-white hover:underline">Register</Link></li>
          <li><Link to="/profile" className="text-white hover:underline">Profile</Link></li>
          <li>
            <button onClick={handleLogout} className="text-white hover:underline">Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
