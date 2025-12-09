import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import WorkingAnimation from '../components/WorkingAnimation';
import ButtonsIndex from '../components/ButtonsIndex';
import BusinessName from '../components/BusinessName';

const Housing = () => {
  const { t } = useLanguage();
  
  const buttonData = [
    { text: t('buttons.whoAreWe'), link: '/whoAreWe' },
    { text: t('buttons.whatWeDo'), link: '/whatWeDo' },
    { text: t('buttons.contact'), link: '/contact' },
    { text: t('buttons.ourCollaborators'), link: '/ourCollaborators' },
    { text: t('buttons.projects'), link: '/projects' }
  ];

  return (
    <>
      <ButtonsIndex buttons={buttonData} />
      <div className="index-container" style={{ background: 'linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%)' }}>
        <h2>{t('initialPage.housing')}</h2>
        <BusinessName />
        <WorkingAnimation />
        <p>{t('pages.housing.content')}</p>
      </div>
    </>
  );
};

export default Housing; 