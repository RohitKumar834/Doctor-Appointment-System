import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import ProfileUpdateForm from './components/ProfileUpdateForm';
import ProfileFetch from './components/ProfileFetch';

const Home = () => {
  const navigate = useNavigate();

  return (
      <div>
          <h1>Welcome to Doctor Appointment System</h1>
          <button onClick={() => navigate('/register')}>Register</button>
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/update-profile')}>Update Profile</button>
          <button onClick={() => navigate('/profile')}>View Profile</button>
      </div>
  );
};

const App = () => {
  return (
      <Router>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/register" element={<RegisterForm />} />
                  <Route path="/login" element={<LoginForm />} />
                  <Route path="/update-profile" element={<ProfileUpdateForm />} />
                  <Route path="/profile" element={<ProfileFetch />} />
              </Routes>
          </div>
      </Router>
  );
};


export default App;
