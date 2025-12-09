import React from 'react';
import { useLanguage } from '../context/LanguageContext';   
const WhoAreWe = () => {
  const { t } = useLanguage();
  return (
    <div>
      <h1>{t('whoAreWe')}</h1>
    </div>
  );
};

export default WhoAreWe;