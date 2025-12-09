import React from "react";
import { useLanguage } from "../context/LanguageContext";

const PageTitle = ({ titleKey }) => {
  const { t } = useLanguage();

  return (
    <div className="page-title-container">
      <h2 className="page-title">{t(titleKey)}</h2>
    </div>
  );
};

export default PageTitle; 