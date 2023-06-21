import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user data exists in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setLoginSuccess(true);
      setUserType(JSON.parse(storedUser).isAdmin ? 'admin' : 'user');
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await fetch('https://6481d94629fa1c5c50322f14.mockapi.io/user');
      const users = await response.json();

      // Match username and password with user data
      const user = users.find((user) => user.username === username && user.password === password);

      if (user) {
        setLoginSuccess(true);
        setUserType(user.isAdmin ? 'admin' : 'user');
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user)); // Store user data in localStorage
        navigate('/');
      } else {
        console.log('Login failed. Incorrect username or password.');
      }
    } catch (error) {
      console.log('An error occurred:', error);
    }
  };

  const register = async (data) => {
    try {
      const response = await fetch('https://6481d94629fa1c5c50322f14.mockapi.io/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Registration successful!');
        alert('Registration successful!');
        navigate('/login');
      } else {
        console.log('Registration failed.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    setUser(null);
    setLoginSuccess(false);
    setUserType('');
    localStorage.removeItem('user'); // Remove user data from localStorage
    navigate('/');
  };

  const authContextValue = {
    user,
    login,
    register,
    logout,
    loginSuccess,
    userType,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};
