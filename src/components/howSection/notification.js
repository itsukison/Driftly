import React, { useState } from 'react';
import './notification.css';
import StarBorder from './StarBorder';
import FadeContent from './FadeContent';

const NotificationModal = () => {
  const [showImage, setShowImage] = useState(false);

  const showNotificationImage = () => setShowImage(true);
  const hideNotificationImage = () => setShowImage(false);

  return (
    <div className="notification-wrapper">
      <div className="notification-container">
        <button className="notification-button" onClick={showNotificationImage}>
          <div className="notification-content">
            <span className="app-icon"><img src="https://i.ibb.co/XrjDRMnr/Adobe-Express-file-3.png" /></span>
            <div className="notification-text">
              <p className="app-name">Driftly</p>
              <p className="notification-message">A moment was captured here. <br /> Open the drift bottle to experience it.</p>
            </div>
          </div>
        </button>
      </div>

      {showImage && (
        <FadeContent blur={true} duration={300} easing="ease-out" initialOpacity={0}>
        <div className={`image-container ${showImage ? 'active' : ''}`}>
          <img
            src="https://i.ibb.co/1fRSWKZG/Adobe-Express-file.png"
            alt="Captured Moment"
            className="notification-image"
          />
          <button className="close-button" onClick={hideNotificationImage}>
            &times;
          </button>
        </div>
        </FadeContent>
      )}
    </div>
  );
};

export default NotificationModal;