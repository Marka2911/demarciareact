import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const { t } = useLanguage();

  return (
    <header>
        <div className="header-container">
            <Link to="/">
                <h1>{t('header.title')}</h1>
            </Link>
            <LanguageSelector />
        </div>
    </header>
  );
};

export default Header;
