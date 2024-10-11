import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Accidents from './pages/Accidents';
import Complaints from './pages/Complaints';
<<<<<<< HEAD
import NotificationPage from './pages/NotificationPage'; // Import NotificationPage
import Loader from './components/Loader'; // Ensure you have this component
=======
import Loader from './components/Loader';
import NotificationPage from './pages/NotificationPage';
import AddAccident from './pages/Addaccident';
import Accidentshow from './pages/Accidentshow';
import Settings from './pages/Settings';
import CertificateChanges from './pages/CertificateChanges';
import AnnouncementPage from './pages/AnnouncementPage';
// import Report from './pages/Report'; // Import the Report page
>>>>>>> 71bcfcc6365ad64a29b13ed74f2a8b0137cf16ac

const AppContent = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleStartLoading = () => {
      setLoading(true);
    };

    const handleStopLoading = () => {
      setLoading(false);
    };

    handleStartLoading();

    const loadingTimeout = setTimeout(handleStopLoading, 1190);

    return () => clearTimeout(loadingTimeout);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <Header />
          <Routes>
<<<<<<< HEAD
            <Route path="/" element={<Home />} /> {/* Home route */}
            <Route path="/sign-in" element={<SignIn />} /> {/* Sign-In route */}
            <Route path="/sign-up" element={<SignUp />} /> {/* Sign-Up route */}
            <Route path="/about" element={<About />} /> {/* About route */}
            <Route path="/profile" element={<Profile />} /> {/* Profile route */}
            <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
            <Route path="/accidents" element={<Accidents />} /> {/* Accidents route */}
            <Route path="/complaints" element={<Complaints />} /> {/* Complaints route */}
            <Route path="/notifications" element={<NotificationPage />} /> {/* Notifications route */}
=======
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/accidents" element={<Accidents />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/notifications" element={<NotificationPage />} />
            <Route path="/add-accident" element={<AddAccident />} />
            <Route path="/accident-show/:id" element={<Accidentshow />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/certificate-changes" element={<CertificateChanges />} />
            <Route path="/announcements" element={<AnnouncementPage />} />
            {/* <Route path="/report" element={<Report />} /> Report route */}
>>>>>>> 71bcfcc6365ad64a29b13ed74f2a8b0137cf16ac
          </Routes>
        </>
      )}
    </>
  );
};

export default AppContent;