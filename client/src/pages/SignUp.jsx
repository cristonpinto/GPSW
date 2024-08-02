import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './SignUp.css';

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validation
    if (
      !formData.username || !formData.email || !formData.password || !formData.cpassword ||
      !formData.nic || !formData.fullname || !formData.position || !formData.phone ||
      !formData.address || !formData.department || !formData.dob
    ) {
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.cpassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('/api/auth/signup', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        nic: formData.nic,
        fullname: formData.fullname,
        position: formData.position,
        phone: formData.phone,
        address: formData.address,
        department: formData.department,
        dob: formData.dob
      });
      setLoading(false);
      setError('');
      navigate('/sign-in'); // Redirect to sign-in page on successful signup
    } catch (error) {
      setLoading(false);
      setError(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="sign-up-container">
    <div className="content">
      <div className="text">Create Account</div>
      <TransitionGroup>
        <CSSTransition
          key={step}
          timeout={300}
          classNames="form-step"
        >
          <form onSubmit={handleSubmit} className="form-container">
            {step === 1 && (
              <div>
                <div className="field">
                  <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    className="input"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    id="fullname"
                    type="text"
                    placeholder="Full Name"
                    className="input"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    id="nic"
                    type="text"
                    placeholder="NIC Number"
                    className="input"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    id="position"
                    type="text"
                    placeholder="Position"
                    className="input"
                    required
                    onChange={handleChange}
                  />
                </div>
                <button type="button" className="button" onClick={handleNext}>
                  Next
                </button>
              </div>
            )}
            {step === 2 && (
              <div>
                <div className="field">
                  <input
                    id="department"
                    type="text"
                    placeholder="Department"
                    className="input"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    id="phone"
                    type="text"
                    placeholder="Phone Number"
                    className="input"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    id="address"
                    type="text"
                    placeholder="Address"
                    className="input"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    id="dob"
                    type="date"
                    placeholder="Date of Birth"
                    className="input"
                    required
                    onChange={handleChange}
                  />
                </div>
                <button type="button" className="button" onClick={handlePrev}>
                  Previous
                </button>
                <button type="button" className="button" onClick={handleNext}>
                  Next
                </button>
              </div>
            )}
            {step === 3 && (
              <div>
                <div className="field">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="input"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="input"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    id="cpassword"
                    type="password"
                    placeholder="Confirm Password"
                    className="input"
                    required
                    onChange={handleChange}
                  />
                </div>
                <button type="button" className="button" onClick={handlePrev}>
                  Previous
                </button>
                <button type="submit" className="button" disabled={loading}>
                  {loading ? 'Loading...' : 'Sign Up'}
                </button>
              </div>
            )}
          </form>
        </CSSTransition>
      </TransitionGroup>
      <div className="sign-up">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="sign-in-link">Sign in</span>
        </Link>
      </div>
      {error && <p className="error-text">{error}</p>}
    </div>
    </div>
  );
}
