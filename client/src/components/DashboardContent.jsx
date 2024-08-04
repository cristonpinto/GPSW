import React from 'react';
import './DashboardContent.css';

const DashboardContent = () => {
  const cardData = [
    { title: "Complaints", description: "" },
    { title: "Accidents", description: "" },
    { title: "Certificate Changes", description: "" },
    { title: "Quick Meetings", description: "" },
    { title: "Reports", description: "" },
    
  ];

  return (
    <div className="dashboard-content">
      {cardData.map((card, index) => (
<<<<<<< Updated upstream
        <div className="card5" key={index}>
          <div className="card5-content">
=======
        <div
          className="card5"
          key={index}
          onClick={() => handleCardNavigation(card.route)}
          aria-label={`Navigate to ${card.title}`}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && handleCardNavigation(card.route)}
        >
          {card.notificationCount > 0 && (
            <div className="notification-badge">
              <span>{card.notificationCount}</span>
            </div>
          )}
          <div className="card5-content">
            <FontAwesomeIcon icon={card.icon} size="3x" className="fa-icon" />
>>>>>>> Stashed changes
            <span>{card.title}</span>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardContent;
