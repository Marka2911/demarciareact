import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ButtonsIndex from '../components/ButtonsIndex';
import PageTitle from '../components/PageTitle';
import SearchProjects from '../components/SearchProjects';

const Projects = () => {
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
      <div className="projects-container" style={{ background: 'linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%)' }}>
        <PageTitle titleKey="pages.projects.title" />
        <SearchProjects />
      </div>
    </>
  );
};

export default Projects; 