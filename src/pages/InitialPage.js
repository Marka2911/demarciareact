import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import ButtonsIndex from "../components/ButtonsIndex";

const squares = [
  { key: "housing", route: "/housing" },
  { key: "work", route: "/work" },
  { key: "food", route: "/food" },
  { key: "yourVoice", route: "/your-voice" },
  { key: "publicCollab", route: "/public-collab" },
  { key: "map", route: "/map" },
];

const InitialPage = () => {
  const { t } = useLanguage();
  
  const buttonData = [
    { text: t("buttons.whoAreWe"), link: "/whoAreWe" },
    { text: t("buttons.whatWeDo"), link: "/whatWeDo" },
    { text: t("buttons.contact"), link: "/contact" },
    { text: t("buttons.ourCollaborators"), link: "/ourCollaborators" },
    { text: t("buttons.projects"), link: "/projects" },
  ];
  
  return (
    <div 
      className="initial-page-container" 
    >
      {/* Navigation Buttons (includes Home button) */}
      <ButtonsIndex buttons={buttonData} />
      
      {/* Grid of Squares */}
      <div className="initial-page-grid">
        {squares.map((sq) => (
          <Link to={sq.route} className="initial-square" key={sq.key}>
            <div className="square-content">
              <span>{t(`initialPage.${sq.key}`)}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InitialPage;
