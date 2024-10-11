<<<<<<< HEAD
import React, { useState } from 'react';
import './SupervisorAcci.css';

const SupervisorAccident = () => {
  const [showApproved, setShowApproved] = useState(true);

  const accidents = [
    { title: "Chemical Burn Incident", status: "Approved" },
    { title: "Fall from Height", status: "Line manager" },
    { title: "Electrical Hazards", status: "Approved" },
    { title: "Allergic Reaction", status: "Line manager" },
  ];

  const handleShowApproved = () => setShowApproved(true);
  const handleShowLineManager = () => setShowApproved(false);
=======
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaUserTie, FaCheck } from 'react-icons/fa';
import './SupervisorAcci.css';

const SupervisorAccident = () => {
  const [showApproved, setShowApproved] = useState(false);
  const [accidents, setAccidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [position, setPosition] = useState(null);
  const [filterLocation, setFilterLocation] = useState('');
  const [filterStartDate, setFilterStartDate] = useState('');
  const [filterEndDate, setFilterEndDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccidents = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/accidents');
        const data = await response.json();

        const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setAccidents(sortedData);
      } catch (error) {
        console.error('Error fetching accidents:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAccidents();

    const storedUsername = localStorage.getItem('username');
    const storedPosition = localStorage.getItem('position');
    setUsername(storedUsername);
    setPosition(storedPosition);
  }, []);

  const handleShowApproved = () => setShowApproved(true);
  const handleShowLineManager = () => setShowApproved(false);

  const handleAddAccident = () => {
    window.open('/add-accident', '_blank');
  };
>>>>>>> 71bcfcc6365ad64a29b13ed74f2a8b0137cf16ac

  const handleAccidentClick = (accident) => {
    window.open(`/accident-show/${accident._id}`, '_blank');
  };

  const getAdditionalText = (status) => {
    const checks = [];
    if (status === 'Line Manager Review') {
      checks.push('Supervisor');
    }
    if (status === 'Branch Manager Review') {
      checks.push('Supervisor', 'Line Manager');
    }
    if (status === 'QA Review') {
      checks.push('Supervisor', 'Line Manager', 'Branch Manager');
    }
    return checks.map((role, index) => (
      <div key={index} className="check-item">
        <FaCheck /> {role}
      </div>
    ));
  };

  const renderAccidentList = (accidents) => {
    return accidents.map((accident, index) => (
      <div
        className={`accident-item ${accident.status === 'Approved' ? 'approved' : 'line-manager'}`}
        key={index}
        onClick={() => handleAccidentClick(accident)}
      >
        <div className="accident-info">
          {Array.isArray(accident.attachments) && accident.attachments.length > 0 && (
            <img
              src={accident.attachments[0]}
              alt="Attachment"
              className="accident-image"
            />
          )}
          <div className="accident-details">
            <div className="accident-title">
              {accident.description.length > 50
                ? `${accident.description.substring(0, 100)}...`
                : accident.description}
            </div>
            <div className="accident-location-department">
              <FaMapMarkerAlt /> {accident.accidentLocation} | <FaUserTie /> {accident.department}
            </div>
          </div>
        </div>
        <div className="accident-status">
          <div className="status-text">
            {accident.status}
            <span className={`status-dot ${accident.status === 'Approved' ? 'approved' : 'line-manager'}`}></span>
          </div>
          <div className="additional-info">{getAdditionalText(accident.status)}</div>
        </div>
      </div>
    ));
  };

  const filteredAccidents = accidents.filter((accident) => {
    const matchesLocation = filterLocation ? accident.accidentLocation.toLowerCase().includes(filterLocation.toLowerCase()) : true;
    const matchesDate = filterStartDate && filterEndDate
      ? new Date(accident.date) >= new Date(filterStartDate) && new Date(accident.date) <= new Date(filterEndDate)
      : true;
    return matchesLocation && matchesDate && (
      showApproved ? accident.status === 'Approved' :
      position === 'Admin' ? ['Line Manager Review', 'Branch Manager Review', 'QA Review'].includes(accident.status) :
      position === 'Line Manager' ? accident.status === 'Line Manager Review' :
      position === 'Branch Manager' ? accident.status === 'Branch Manager Review' :
      position === 'QA' ? accident.status === 'QA Review' :
      position === 'Supervisor' ? ['Line Manager Review', 'Branch Manager Review', 'QA Review'].includes(accident.status) :
      accident.status === 'Pending Review'
    );
  });

  return (
    <div className="supervisor-accident">
<<<<<<< HEAD
      <button className="add-accident-button">Add Accident</button>
      <h2>Recent Accidents</h2>
      <div className="button-group">
        <button
          className={`toggle-button ${showApproved ? 'active' : ''}`}
          onClick={handleShowApproved}
        >
          Approved
        </button>
        <button
          className={`toggle-button ${!showApproved ? 'active' : ''}`}
          onClick={handleShowLineManager}
        >
          Not Approved
        </button>
      </div>
      <div className="accident-list">
        {showApproved
          ? accidents
              .filter(accident => accident.status === "Approved")
              .map((accident, index) => (
                <div className="accident-item approved" key={index}>
                  <div className="accident-title">{accident.title}</div>
                  <div className="accident-status">
                    {accident.status}
                    <span className="status-dot approved"></span>
                  </div>
                </div>
              ))
          : accidents
              .filter(accident => accident.status === "Line manager")
              .map((accident, index) => (
                <div className="accident-item line-manager" key={index}>
                  <div className="accident-title">{accident.title}</div>
                  <div className="accident-status">
                    {accident.status}
                    <span className="status-dot line-manager"></span>
                  </div>
                </div>
              ))}
=======
      <div className="filter-section">
        <input
          type="text"
          placeholder="Filter by location"
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
        />
        <input
          type="date"
          value={filterStartDate}
          onChange={(e) => setFilterStartDate(e.target.value)}
        />
        <input
          type="date"
          value={filterEndDate}
          onChange={(e) => setFilterEndDate(e.target.value)}
        />
>>>>>>> 71bcfcc6365ad64a29b13ed74f2a8b0137cf16ac
      </div>
      {position === 'Supervisor' && (
        <button className="add-accident-button" onClick={handleAddAccident}>
          Add Accident
        </button>
      )}
      <div className="button-group">
        <button
          className={`toggle-button1 ${!showApproved ? 'active' : ''}`}
          onClick={handleShowLineManager}
        >
          Approval Processing
        </button>
        <button
          className={`toggle-button ${showApproved ? 'active' : ''}`}
          onClick={handleShowApproved}
        >
          Closed
        </button>
      </div>
      
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="accident-list">
          {renderAccidentList(filteredAccidents)}
        </div>
      )}
    </div>
  );
};

export default SupervisorAccident;