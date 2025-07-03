import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400">
          TravelBook
        </h1>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 text-blue-700 dark:text-blue-300 border border-blue-700 dark:border-blue-300 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-4 py-2 bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg hover:bg-blue-800 transition"
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <motion.main
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center text-center px-6 mt-20"
      >
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Explore the world with ease
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-6">
          Book flights, hotels, and experiences in just a few clicks. Your next
          adventure starts here.
        </p>
        <motion.button
          whileHover={{ scale: 0.97 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/signup")}
          className="mt-4 px-6 py-3 bg-blue-700 text-white dark:bg-slate-800 dark:hover:bg-slate-600 dark:border-blue-500 dark:border-2 rounded-xl hover:bg-blue-800 transition text-lg"
        >
          Get Started
        </motion.button>
      </motion.main>
    </motion.div>
  );
};

export default Landing;
