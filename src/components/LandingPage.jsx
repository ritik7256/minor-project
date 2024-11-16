import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useEffect } from 'react';

const LandingPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page loads at the top
  }, []);

  return (
    <>
      {/* Landing Page Section */}
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/edu.jpg')" }}
      >
        <Navbar />
        <div className="flex items-center justify-center h-full bg-gradient-to-r from-black via-transparent to-black">
          <div className="text-center text-white">
            <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">
              Discover Your Career Path
            </h1>
            <p className="mb-8 text-2xl drop-shadow-lg max-w-2xl mx-auto leading-relaxed">
              AI-driven insights to help you navigate the future and choose the right career for you.
            </p>
            <div className="space-x-4">
              <Link to="/register">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </Link>
              <Link to="/portal">
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 transform hover:scale-105">
                  Start Your Journey
                </button>
              </Link>
            </div>

            {/* Scroll Down Prompt */}
            <div className="mt-10">
              <span className="text-white animate-bounce text-3xl">&#8595;</span>
              <p className="mt-2 text-sm font-semibold">Scroll to learn more</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-gray-800">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:scale-105">
              <i className="fas fa-search text-4xl text-blue-500 mb-4"></i>
              <h3 className="font-semibold text-xl mb-4">Career Exploration</h3>
              <p className="text-gray-600">
                Find your dream career with our AI-driven career path analysis based on your skills and interests.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:scale-105">
              <i className="fas fa-chart-line text-4xl text-green-500 mb-4"></i>
              <h3 className="font-semibold text-xl mb-4">Personalized Insights</h3>
              <p className="text-gray-600">
                Get personalized career suggestions tailored to your strengths and industry trends.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:scale-105">
              <i className="fas fa-briefcase text-4xl text-purple-500 mb-4"></i>
              <h3 className="font-semibold text-xl mb-4">Job Trends Analysis</h3>
              <p className="text-gray-600">
                Stay ahead of the game by tracking the latest job trends in your field of interest.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
