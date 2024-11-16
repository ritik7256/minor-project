import { useState } from 'react';
import { motion } from 'framer-motion';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirecting

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');
  const [degree, setDegree] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user data in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email,
        education,
        skills,
        degree,
      });

      // Redirect to CareerGuidance page after successful registration
      navigate('/portal'); // Adjust the route to your CareerGuidance page
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl">
        <div 
          className="hidden lg:block lg:w-1/2 bg-cover" 
          style={{ backgroundImage: "url('/register.jpg')" }}
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-full w-full opacity-75"></div>
        </div>
        <div className="w-full p-8 lg:w-1/2 bg-gray-50">
          <h2 className="text-3xl font-bold mb-6 text-center">Create an Account</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded p-2 transition duration-200 focus:ring focus:ring-blue-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="mt-1 block w-full border border-gray-300 rounded p-2 transition duration-200 focus:ring focus:ring-blue-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Education</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded p-2 transition duration-200 focus:ring focus:ring-blue-300"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Skills</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded p-2 transition duration-200 focus:ring focus:ring-blue-300"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Degree</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded p-2 transition duration-200 focus:ring focus:ring-blue-300"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                required
              />
            </div>
            <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200">
              Register
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
