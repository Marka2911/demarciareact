import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const HomeButton = () => {
  const { t } = useLanguage();
  
  return (
    <div className="home-button-container">
      <Link to="/home" className="home-button">
        <span className="home-icon">🏠</span>
        <span className="home-text">{t("buttons.home")}</span>
      </Link>
    </div>
  );
};

export default HomeButton;
