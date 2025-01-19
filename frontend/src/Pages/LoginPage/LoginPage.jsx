import React, { useState } from 'react';
import { Sun, Moon, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function App() {
  
  const [isLogin, setIsLogin] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleForm = () => setIsLogin(!isLogin);
  const toggleTheme = () => setDarkMode(!darkMode);
  const navigate = useNavigate()
const handlesubmit = async(e)=>{
e.preventDefault()
if(isLogin){
  try {
    const response = await axios.post('http://localhost:3000/api/user/login',{email,password})
  if(response){
    localStorage.setItem('token',response.data.token)
navigate('/')
  }
  } catch (error) {
    console.log(error);
  }
  
}else{
  try {
    const response = await Axis3DIcon.post('http://localhost:3000/api/user/register',{name,email,password})
    if(response){
      localStorage.setItem('token',response.data.token)
  navigate('/')
    }
  } catch (error) {
    console.log(error);
  }
}
}
  return (
    <div className={`min-h-screen w-full transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <Sun className="w-6 h-6 text-yellow-400" />
        ) : (
          <Moon className="w-6 h-6 text-gray-600" />
        )}
      </button>

      <div className="container mx-auto px-4 h-screen flex items-center justify-center">
        <div className={`w-full max-w-md p-8 rounded-2xl shadow-xl transition-colors ${
          darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
        }`}>
          <h1 className="text-3xl font-bold text-center mb-8">
            {isLogin ? 'Welcome Back!' : 'Create Account'}
          </h1>

          <form onSubmit={handlesubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="John Doe"
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:outline-none transition-colors ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 focus:ring-blue-500' 
                        : 'bg-gray-50 border-gray-300 focus:ring-blue-400'
                    }`}
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:outline-none transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 focus:ring-blue-500' 
                      : 'bg-gray-50 border-gray-300 focus:ring-blue-400'
                  }`}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  onChange={(e)=>setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:outline-none transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 focus:ring-blue-500' 
                      : 'bg-gray-50 border-gray-300 focus:ring-blue-400'
                  }`}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 group"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={toggleForm}
              className={`text-sm hover:underline ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : 'Already have an account? Sign in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;