import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import WorkingAnimation from '../components/WorkingAnimation';
import ButtonsIndex from '../components/ButtonsIndex';
import BusinessName from '../components/BusinessName';
import Footer from '../components/Footer';
import FollowingPost from '../components/FollowingPost';
import InsidePost from '../components/InsidePost';
import CreacioPosts from '../components/CreacioPosts';
import DescobrirPersones from '../components/DescobrirPersones';
const YourVoice = () => {
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
      
      <div className="your-voice-content">
        <h2>{t('initialPage.yourVoice')}</h2>
        <div className='your-voice-wrapper'>
          <div className='all-your-voice-container'>
            {/* <FollowingPost/> */}
            {/* <InsidePost/> */}
            {/* <CreacioPosts/>             */}
            <DescobrirPersones/>
          </div>
          <Footer/>
        </div>
      </div>
      
      </div>
    </>
  );
};

export default YourVoice; 