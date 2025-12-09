import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const BusinessName = () => {
  const { t } = useLanguage();

  return (
    <div className="business-name-container">
      <h1>{t('header.title')}</h1>
    </div>
  );
};

export default BusinessName; 