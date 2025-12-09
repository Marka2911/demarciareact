import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const ProjectShowcase = ({ projects }) => {
  const [selected, setSelected] = useState(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const videosRef = useRef(null);

  const handleButtonClick = (idx) => {
    setSelected(idx);
    if (!hasScrolled && videosRef.current) {
      videosRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setHasScrolled(true);
    }
  };

  return (
    <div className="what-we-do-projects-videos-container">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minWidth: 150,
          width: "100%",
          gap: 2,
          justifyContent: "center",
          mb: 4,
        }}
      >
        {projects.map((proj, idx) => (
          <ButtonBase
            key={proj.title}
            focusRipple
            onClick={() => handleButtonClick(idx)}
            style={{
              width: "10vw",
              height: 180,
              margin: 8,
              borderRadius: 12,
              overflow: "hidden",
              position: "relative",
              outline: selected === idx ? "3px solid #27c8ce" : "none",
              boxShadow:
                selected === idx ? "0 4px 16px rgba(39,200,206,0.15)" : "none",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundImage: `url(${proj.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.7)",
              }}
            />
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 2,
                color: "#fff",
                fontWeight: 600,
                fontSize: "1.3rem",
                letterSpacing: 1,
                zIndex: 1,
                textShadow: `
                  -1px -1px 0 #000, 
                   1px -1px 0 #000, 
                  -1px  1px 0 #000, 
                   1px  1px 0 #000
                `,
              }}
            >
              {proj.title}
            </Typography>
          </ButtonBase>
        ))}
      </Box>
      {selected !== null && (
        <Box
          ref={videosRef}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "center",
            width: "100%",
          }}
        >
          {projects[selected].videos.map((video, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                mb: 2,
                background: "#f8fafd",
                borderRadius: 10,
                boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                p: 2,
              }}
            >
              <video
                src={video}
                controls
                style={{
                  width: 320,
                  height: 180,
                  borderRadius: 8,
                  marginRight: 24,
                }}
              />
              <Typography
                variant="body1"
                sx={{ color: "#333", fontSize: "1.1rem" }}
              >
                {projects[selected].descriptions[idx]}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </div>
  );
};

export default ProjectShowcase;
