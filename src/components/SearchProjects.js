import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import org1 from '../img/org1.jpg';
import org2 from '../img/org2.jpg';
import org3 from '../img/org3.jpg';
import org4 from '../img/org4.jpg';

const SearchProjects = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  // Test data for projects
  const projects = [
    {
      id: 1,
      name: "Smart City Infrastructure",
      description: "Revolutionary urban development project implementing IoT sensors and AI-powered traffic management systems to create sustainable, efficient cities of the future.",
      image: org1,
      category: "Urban Development"
    },
    {
      id: 2,
      name: "Renewable Energy Grid",
      description: "Large-scale solar and wind energy integration project designed to provide clean, sustainable power to entire communities while reducing carbon footprint.",
      image: org2,
      category: "Energy"
    },
    {
      id: 3,
      name: "Digital Healthcare Platform",
      description: "Comprehensive telemedicine solution connecting patients with healthcare providers through advanced video conferencing and AI-powered diagnostics.",
      image: org3,
      category: "Healthcare"
    },
    {
      id: 4,
      name: "Educational Technology Hub",
      description: "Innovative learning management system providing interactive educational content and personalized learning experiences for students worldwide.",
      image: org4,
      category: "Education"
    },
    {
      id: 5,
      name: "Sustainable Agriculture Initiative",
      description: "Smart farming project utilizing precision agriculture techniques and data analytics to optimize crop yields while preserving natural resources.",
      image: org1,
      category: "Agriculture"
    }
  ];

  // Filter projects based on search term
  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.category.toLowerCase().includes(searchTerm.toLowerCase())
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
    <div className="search-projects-container">
      {/* Search Title */}
      <motion.h2 
        className="search-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t('pages.projects.searchTitle') || "Discover Our Projects"}
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
          placeholder={t('pages.projects.searchPlaceholder') || "Search projects or categories..."}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </motion.div>

      {/* Results */}
      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              layout
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 8px 25px rgba(39,200,206,0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-name">{project.name}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
                <p className="project-description">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && searchTerm && (
        <motion.div 
          className="no-results"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>No projects found matching "{searchTerm}"</p>
        </motion.div>
      )}
    </div>
  );
};

export default SearchProjects; 