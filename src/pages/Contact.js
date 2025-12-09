import React from "react";
import { useLanguage } from "../context/LanguageContext";
import ButtonsIndex from "../components/ButtonsIndex";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
import PageTitle from "../components/PageTitle";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: "spring",
      stiffness: 60,
    },
  }),
};

const socialVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.18,
    rotate: -8,
    transition: { type: "spring", stiffness: 300 },
  },
};

const Contact = () => {
  const { t } = useLanguage();

  const buttonData = [
    { text: t("buttons.whoAreWe"), link: "/whoAreWe" },
    { text: t("buttons.whatWeDo"), link: "/whatWeDo" },
    { text: t("buttons.contact"), link: "/contact" },
    { text: t("buttons.ourCollaborators"), link: "/ourCollaborators" },
    { text: t("buttons.projects"), link: "/projects" },
  ];

  const contactCards = [
    {
      icon: <PhoneIcon sx={{ color: "#27c8ce", fontSize: 32 }} />,
      title: t("pages.contact.phone"),
      value: t("pages.contact.phoneValue"),
    },
    {
      icon: <EmailIcon sx={{ color: "#27c8ce", fontSize: 32 }} />,
      title: t("pages.contact.email"),
      value: t("pages.contact.emailValue"),
    },
    {
      icon: <LocationOnIcon sx={{ color: "#27c8ce", fontSize: 32 }} />,
      title: t("pages.contact.address"),
      value: t("pages.contact.addressValue"),
    },
  ];

  const socialLinks = [
    {
      href: "https://facebook.com/xarelo",
      color: "#4267B2",
      icon: <FacebookIcon sx={{ fontSize: 36 }} />,
      label: "Facebook",
    },
    {
      href: "https://twitter.com/xarelo",
      color: "#1DA1F2",
      icon: <TwitterIcon sx={{ fontSize: 36 }} />,
      label: "Twitter",
    },
    {
      href: "https://instagram.com/xarelo",
      color: "#C13584",
      icon: <InstagramIcon sx={{ fontSize: 36 }} />,
      label: "Instagram",
    },
    {
      href: "https://linkedin.com/company/xarelo",
      color: "#0077B5",
      icon: <LinkedInIcon sx={{ fontSize: 36 }} />,
      label: "LinkedIn",
    },
  ];

  return (
    <>
      <ButtonsIndex buttons={buttonData} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60vh",
            background: "linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%)",
            py: 6,
          }}
        >
          <PageTitle titleKey="pages.contact.title" />

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ width: "100%" }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                mb: 4,
                color: "#555",
                maxWidth: 600,
                textAlign: "center",
                mx: "auto",
              }}
            >
              {t("pages.contact.subtitle")}
            </Typography>
          </motion.div>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
              justifyContent: "center",
              width: "100%",
              maxWidth: 1500,
            }}
          >
            {contactCards.map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                style={{ flex: 1, minWidth: 260,  margin: 8 }}
              >
                <Box
                  tabIndex={0}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    background: "#fff",
                    boxShadow: "0 2px 12px rgba(39,200,206,0.08)",
                    borderRadius: 3,
                    p: 3,
                    gap: 2,
                    transition: "box-shadow 0.3s, transform 0.3s",
                    cursor: "pointer",
                    "&:hover, &:focus": {
                      boxShadow: "0 6px 24px rgba(39,200,206,0.18)",
                      transform: "translateY(-4px) scale(1.03)",
                      outline: "none",
                    },
                  }}
                  aria-label={card.title + ": " + card.value}
                >
                  {card.icon}
                  <Box>
                    <Typography variant="h6" sx={{ color: "#222" }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#555" }}>
                      {card.value}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
          {/* Social Networks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ width: "100%" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                mt: 5,
                justifyContent: "center",
              }}
            >
              {socialLinks.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: s.color,
                    display: "inline-flex",
                    outline: "none",
                  }}
                  aria-label={t("pages.contact.social") + " " + s.label}
                  tabIndex={0}
                  variants={socialVariants}
                  initial="rest"
                  whileHover="hover"
                  whileFocus="hover"
                >
                  {s.icon}
                </motion.a>
              ))}
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </>
  );
};

export default Contact;
