"use client";
import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        my:5
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "rgba(255, 255, 255, 0.95)",
          fontWeight: 500,
          maxWidth: "700px",
          mb: 1.5,
          fontSize: { xs: "1.6rem", sm: "2rem" },
          lineHeight: 1.3,
        }}
      >
        Hi, I'm Zayn — Backend Developer <br />
        specializing in Node.js & API Integration
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "rgba(255, 255, 255, 0.7)",
          maxWidth: "600px",
          fontSize: { xs: "1rem", sm: "1.1rem" },
          mb: 3,
          lineHeight: 1.5,
        }}
      >
        Helping businesses scale and automate their operations
      </Typography>

      <Button
        variant="contained"
        size="medium"
        startIcon={<DownloadIcon />}
        sx={{
          backgroundColor: "#1f1f1f",
          color: "#fff",
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 500,
          px: 2.5,
          py: 1.2,
          fontSize: { xs: "0.9rem", sm: "1rem" },
          "&:hover": {
            backgroundColor: "#2a2a2a",
          },
        }}
        href="/resume.pdf"
        download
      >
        Download Resume
      </Button>

      <Box
        sx={{
          mt: 2,
          display: "flex",
          gap: 0.5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          aria-label="GitHub"
          href="https://github.com/ZaynHamid"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              transform: "scale(1.2)",
              color: "rgba(255, 255, 255, 1)",
            },
          }}
        >
          <GitHubIcon fontSize="medium" />
        </IconButton>

        <IconButton
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/zayn-dev/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              transform: "scale(1.2)",
              color: "rgba(255, 255, 255, 1)",
            },
          }}
        >
          <LinkedInIcon fontSize="medium" />
        </IconButton>

        <IconButton
          aria-label="Fiverr"
          href="https://www.fiverr.com/zaynhamid"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              transform: "scale(1.2)",
              color: "rgba(255, 255, 255, 1)",
            },
          }}
        >
          <svg
            viewBox="0 0 192 192"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth={12}
            strokeLinejoin="round"
            style={{ fill: "none" }}
            width={24}
            height={24}
          >
            <path d="M121.1 170h34.75V67.04H90.21v-7.72s0-9.01 9.01-9.01h21.88V22H99.22s-43.76 0-43.76 37.32v7.72h-19.3v28.31h19.3v74.64h34.75V95.36h30.89V170Z" />
          </svg>
        </IconButton>
      </Box>

      <Typography
        variant="body2"
        sx={{ color: "rgba(255, 255, 255, 0.7)", mt: 1, userSelect: "text" }}
      >
        zainhamid982@gmail.com
      </Typography>
    </Box>
  );
}
