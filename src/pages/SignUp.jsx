import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const user = {name: name, email: email, password: password}
    // post request to backend
    // console.log(user)
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <header className="flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-800 shadow-md absolute min-w-screen top-0 z-10">
        <h1 
          onClick={() => navigate('/')}
          className="text-2xl font-bold cursor-pointer text-blue-700 dark:text-blue-400">
          TravelBook
        </h1>
      </header>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.4 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Create an Account
        </h2>

        <form className="space-y-5">
          <div>
            <label
              className="block text-gray-700 dark:text-gray-300 mb-1"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 dark:text-gray-300 mb-1"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 dark:text-gray-300 mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600 transition text-lg font-medium"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <a
            onClick={() => navigate('/login')}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Log In
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SignUp;
