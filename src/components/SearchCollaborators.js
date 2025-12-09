import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import org1 from '../img/org1.jpg';
import org2 from '../img/org2.jpg';
import org3 from '../img/org3.jpg';
import org4 from '../img/org4.jpg';

const SearchCollaborators = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  // Test data for collaborators
  const collaborators = [
    {
      id: 1,
      name: "TechCorp Solutions",
      description: "Leading technology solutions provider specializing in AI and machine learning applications. We partner with innovative companies to transform their digital infrastructure.",
      image: org1
    },
    {
      id: 2,
      name: "Green Energy Partners",
      description: "Sustainable energy solutions company focused on renewable resources and eco-friendly technologies. Committed to building a greener future.",
      image: org2
    },
    {
      id: 3,
      name: "HealthTech Innovations",
      description: "Healthcare technology company developing cutting-edge medical devices and digital health solutions to improve patient care worldwide.",
      image: org3
    },
    {
      id: 4,
      name: "EduConnect Foundation",
      description: "Educational technology nonprofit dedicated to bridging the digital divide and providing quality education to underserved communities.",
      image: org4
    },
    {
      id: 5,
      name: "Urban Development Co",
      description: "Smart city solutions provider creating sustainable urban infrastructure and improving quality of life through innovative technology.",
      image: org1
    }
  ];

  // Filter collaborators based on search term
  const filteredCollaborators = collaborators.filter(collaborator =>
    collaborator.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="search-collaborators-container">
      {/* Search Title */}
      <motion.h2 
        className="search-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t('pages.ourCollaborators.searchTitle') || "Find Our Collaborators"}
      </motion.h2>
      
      {/* Search Input */}
      <motion.div 
        className="search-input-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <input
          type="text"
          placeholder={t('pages.ourCollaborators.searchPlaceholder') || "Search collaborators..."}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </motion.div>

      {/* Results */}
      <motion.div 
        className="collaborators-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {filteredCollaborators.map((collaborator) => (
            <motion.div
              key={collaborator.id}
              className="collaborator-card"
              variants={itemVariants}
              layout
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 8px 25px rgba(39,200,206,0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="collaborator-image">
                <img src={collaborator.image} alt={collaborator.name} />
              </div>
              <div className="collaborator-content">
                <h3 className="collaborator-name">{collaborator.name}</h3>
                <p className="collaborator-description">{collaborator.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredCollaborators.length === 0 && searchTerm && (
        <motion.div 
          className="no-results"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>No collaborators found matching "{searchTerm}"</p>
        </motion.div>
      )}
    </div>
  );
};

export default SearchCollaborators; 