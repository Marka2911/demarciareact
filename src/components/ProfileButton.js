import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

const ProfileButton = () => {
  const { user, isAuthenticated } = useAuth();
  const { t } = useLanguage();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Link to="/profile" className="profile-button">
      <div className="profile-icon">
        <span className="profile-avatar">
          {user?.name?.charAt(0)?.toUpperCase() || 'U'}
        </span>
      </div>
      <span className="profile-text">
        {user?.name || t('profile.profile') || 'Perfil'}
      </span>
    </Link>
  );
};

export default ProfileButton;
