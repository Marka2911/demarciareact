import React from "react";
import { useLanguage } from "../context/LanguageContext";
import ButtonsIndex from "../components/ButtonsIndex";
import PageTitle from "../components/PageTitle";
import SearchCollaborators from "../components/SearchCollaborators";

const OurCollaborators = () => {
  const { t } = useLanguage();

  const buttonData = [
    { text: t("buttons.whoAreWe"), link: "/whoAreWe" },
    { text: t("buttons.whatWeDo"), link: "/whatWeDo" },
    { text: t("buttons.contact"), link: "/contact" },
    { text: t("buttons.ourCollaborators"), link: "/ourCollaborators" },
    { text: t("buttons.projects"), link: "/projects" },
  ];

  return (
    <>
      <ButtonsIndex buttons={buttonData} />

      <div
        className="our-collaborators-page"
        style={{
          background: "linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%)",
        }}
      >
        <PageTitle titleKey="pages.ourCollaborators.title" />
        
        <SearchCollaborators />
      </div>
    </>
  );
};

export default OurCollaborators;
