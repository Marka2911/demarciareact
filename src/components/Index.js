import React from 'react';
import ButtonsIndex from './ButtonsIndex';
import { useLanguage } from '../context/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  
  const buttonData = [
    { text: t('buttons.whoAreWe'), link: "/whoAreWe" },
    { text: t('buttons.whatWeDo'), link: "/whatWeDo" },
    { text: t('buttons.ourCollaborators'), link: "/ourCollaborators" },
    { text: t('buttons.contact'), link: "/contact" },
    { text: t('buttons.projects'), link: "/projects" }
  ];

  return (
    <div className="index-container">
      <ButtonsIndex buttons={buttonData} />
    </div>
  );
};

export default Index; 