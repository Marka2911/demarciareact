import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeButton from "./HomeButton";
import LoginModal from "./LoginModal";
import LanguageSelector from "./LanguageSelector";
import ProfileButton from "./ProfileButton";
import { useAuth } from "../context/AuthContext";

const ButtonsIndex = ({ buttons }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <>
      <div className="buttons-container horizontal">
        <HomeButton />
        <div className="buttons-container-content">
          {buttons.map((button, index) => (
            <Link key={index} to={button.link} className="button-link">
              <button className="index-button">{button.text}</button>
            </Link>
          ))}
        </div>
        {/* Login/Profile Button */}
        <div className="login-language-container">
          {isAuthenticated ? (
            <ProfileButton />
          ) : (
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="index-button login-button"
            >
              <span className="login-icon">👤</span>
              <span>Login</span>
            </button>
          )}

          <LanguageSelector />
        </div>
        {/* Language Selector */}
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};

export default ButtonsIndex;
