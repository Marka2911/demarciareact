import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ButtonsIndex from "../components/ButtonsIndex";
import whatWeDoVideo from "../videos/testvideo.mkv";
import org1 from '../img/org1.jpg';
import org2 from '../img/org2.jpg';
import org3 from '../img/org3.jpg';
import org4 from '../img/org4.jpg';
import ProjectShowcase from '../components/ProjectShowcase';
import PageTitle from "../components/PageTitle";

const WhatWeDo = () => {
  const { t } = useLanguage();

  const buttonData = [
    { text: t("buttons.whoAreWe"), link: "/whoAreWe" },
    { text: t("buttons.whatWeDo"), link: "/whatWeDo" },
    { text: t("buttons.contact"), link: "/contact" },
    { text: t("buttons.ourCollaborators"), link: "/ourCollaborators" },
    { text: t("buttons.projects"), link: "/projects" },
  ];

  const projects = [
    {
      title: t("initialPage.housing"),
      image: org1,
      videos: [whatWeDoVideo, whatWeDoVideo, whatWeDoVideo],
      descriptions: [
        t("projects.housing.desc1"),
        t("projects.housing.desc2"),
        t("projects.housing.desc3"),
      ],
    },
    {
      title: t("initialPage.work"),
      image: org2,
      videos: [whatWeDoVideo, whatWeDoVideo, whatWeDoVideo],
      descriptions: [
        t("projects.work.desc1"),
        t("projects.work.desc2"),
        t("projects.work.desc3"),
      ],
    },
    {
      title: t("initialPage.food"),
      image: org3,
      videos: [whatWeDoVideo, whatWeDoVideo, whatWeDoVideo],
      descriptions: [
        t("projects.food.desc1"),
        t("projects.food.desc2"),
        t("projects.food.desc3"),
      ],
    },
    {
      title: t("initialPage.yourVoice"),
      image: org4,
      videos: [whatWeDoVideo, whatWeDoVideo, whatWeDoVideo],
      descriptions: [
        t("projects.yourVoice.desc1"),
        t("projects.yourVoice.desc2"),
        t("projects.yourVoice.desc3"),
      ],
    },
    {
      title: t("initialPage.publicCollab"),
      image: org1,
      videos: [whatWeDoVideo, whatWeDoVideo, whatWeDoVideo],
      descriptions: [
        t("projects.publicCollab.desc1"),
        t("projects.publicCollab.desc2"),
        t("projects.publicCollab.desc3"),
      ],
    },
    {
      title: t("initialPage.map"),
      image: org2,
      videos: [whatWeDoVideo, whatWeDoVideo, whatWeDoVideo],
      descriptions: [
        t("projects.map.desc1"),
        t("projects.map.desc2"),
        t("projects.map.desc3"),
      ],
    },
  ];

  return (
    <>
      <ButtonsIndex buttons={buttonData} />

      <div className="what-we-do-page" style={{ background: 'linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%)' }}>
        <PageTitle titleKey="pages.whatWeDo.title" />
        <div className="what-we-do-video-container">
          <video src={whatWeDoVideo} controls className="what-we-do-video" />
        </div>
        <div className="what-we-do-text-container">
          <h1>{t("pages.whatWeDo.title")}</h1>
          <p>{t("pages.whatWeDo.content")}</p>
        </div>
        <ProjectShowcase projects={projects} />
      </div>
    </>
  );
};

export default WhatWeDo;
