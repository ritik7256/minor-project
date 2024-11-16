import { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { motion } from 'framer-motion';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profilePicture, setProfilePicture] = useState(null); // State for profile picture
  const [bio, setBio] = useState(''); // Optional bio state

  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
          setBio(docSnap.data().bio || ''); // Assuming you have a bio field in Firestore
        } else {
          console.log('No such document!');
        }
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result); // Set the uploaded image to state
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditProfile = () => {
    // Implement the logic to edit user data
    console.log('Edit Profile Clicked');
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!userData) {
    return <div>No user data available.</div>;
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-4 text-center">Profile</h2>

      <div className="flex flex-col items-center">
        {/* Profile Picture Section */}
        <div className="mb-6">
          {profilePicture ? (
            <img
              src={profilePicture}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-500"
            />
          ) : (
            <div className="w-32 h-32 rounded-full border-4 border-gray-300 flex items-center justify-center text-gray-400">
              <span>No Image</span>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
            className="mt-2"
          />
        </div>

        {/* User Data Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <p className="font-semibold">Email: <span className="font-normal">{userData.email}</span></p>
          <p className="font-semibold">Education: <span className="font-normal">{userData.education}</span></p>
          <p className="font-semibold">Skills: <span className="font-normal">{userData.skills}</span></p>
          <p className="font-semibold">Degree: <span className="font-normal">{userData.degree}</span></p>
          <p className="font-semibold">Bio: <span className="font-normal">{bio}</span></p>
        </div>

        {/* Edit Profile Button */}
        <button
          onClick={handleEditProfile}
          className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
