import React from 'react';
import Navbar from './Navbar'; // Adjust the path based on where your Navbar component is located

const CareerGuidance = () => {
  return (
    <>
      <Navbar /> {/* Adding the Navbar component */}
      <div className="bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 min-h-screen p-8 pt-20"> {/* Added pt-20 */}
        {/* How It Works Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-blue-800">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-purple-300 to-pink-300 p-6 rounded-lg shadow-lg hover:scale-105 hover:from-purple-400 hover:to-pink-400 transition-transform duration-300 ease-in-out">
              <i className="fas fa-search text-3xl mb-4 text-purple-700"></i>
              <h3 className="font-semibold text-purple-800">Answer Questions</h3>
            </div>
            <div className="bg-gradient-to-r from-teal-300 to-green-300 p-6 rounded-lg shadow-lg hover:scale-105 hover:from-teal-400 hover:to-green-400 transition-transform duration-300 ease-in-out">
              <i className="fas fa-tasks text-3xl mb-4 text-teal-700"></i>
              <h3 className="font-semibold text-teal-800">Get Career Paths</h3>
            </div>
            <div className="bg-gradient-to-r from-yellow-300 to-orange-300 p-6 rounded-lg shadow-lg hover:scale-105 hover:from-yellow-400 hover:to-orange-400 transition-transform duration-300 ease-in-out">
              <i className="fas fa-lightbulb text-3xl mb-4 text-yellow-700"></i>
              <h3 className="font-semibold text-yellow-800">Plan Your Future</h3>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-blue-800">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-blue-300 to-indigo-300 p-6 rounded-lg shadow-lg hover:scale-105 hover:from-blue-400 hover:to-indigo-400 transition-transform duration-300 ease-in-out">
              <i className="fas fa-lock text-3xl mb-4 text-blue-700"></i>
              <h3 className="font-semibold text-blue-800">Personalized Suggestions</h3>
            </div>
            <div className="bg-gradient-to-r from-green-300 to-lime-300 p-6 rounded-lg shadow-lg hover:scale-105 hover:from-green-400 hover:to-lime-400 transition-transform duration-300 ease-in-out">
              <i className="fas fa-chart-line text-3xl mb-4 text-green-700"></i>
              <h3 className="font-semibold text-green-800">Skill-Gap Analysis</h3>
            </div>
            <div className="bg-gradient-to-r from-pink-300 to-red-300 p-6 rounded-lg shadow-lg hover:scale-105 hover:from-pink-400 hover:to-red-400 transition-transform duration-300 ease-in-out">
              <i className="fas fa-briefcase text-3xl mb-4 text-pink-700"></i>
              <h3 className="font-semibold text-pink-800">Job Trends</h3>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-blue-800">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-pink-50 to-purple-100 p-6 rounded-lg shadow-lg hover:scale-105 hover:from-pink-100 hover:to-purple-200 transition-transform duration-300 ease-in-out">
              <p className="text-lg text-gray-800">"AI-Powered Career Guidance System has helped me find my dream job!"</p>
              <p className="mt-4 font-semibold text-purple-800">— John Doe</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-100 p-6 rounded-lg shadow-lg hover:scale-105 hover:from-yellow-100 hover:to-orange-200 transition-transform duration-300 ease-in-out">
              <p className="text-lg text-gray-800">"I was amazed by the accuracy of the career suggestions!"</p>
              <p className="mt-4 font-semibold text-orange-800">— Jane Doe</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareerGuidance;
