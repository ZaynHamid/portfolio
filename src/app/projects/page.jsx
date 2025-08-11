"use client";
import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ResponsiveAppBar from "../components/navbar";

export default function Projects() {
  const projects = [
    {
      title: "Stripe Payment System",
      date: "May 2025 - June 2025",
      description:
        "Developed a secure, full-stack payment platform integrating Stripe for subscriptions, one-time charges, and usage-based billing. Implemented JWT-based authentication and built an admin dashboard for tracking payment history. Designed the backend in Flask with a MySQL database, and delivered a responsive Next.js frontend for a seamless user experience.",
      repoLink: "https://github.com/ZaynHamid/stripe-backend",
    },
    {
      title: "E-commerce Backend with DB and Auth",
      date: "April 2025 - June 2025",
      description:
        "Designed and implemented a scalable e-commerce backend using Flask and MySQL, built with RESTful architecture. Integrated Stripe Checkout for payments, implemented JWT authentication with role-based access control, and developed secure product and cart management. Enhanced security through bcrypt password hashing and rigorous token validation.",
      repoLink: "https://github.com/ZaynHamid/ecommerce-backend",
    },
    {
      title: "Reminder System",
      date: "Nov 2024 - Jan 2025",
      description:
        "Developed a user reminder service using BullMQ and Redis for reliable job scheduling and queue management. Implemented configurable task frequencies, retry logic, and automated email notifications with Nodemailer to ensure timely and consistent reminders.",
      repoLink: "https://github.com/ZaynHamid/bulllmq-reminder",
    },
  ];

  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ mt: 6 }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: 600,
            fontSize: { xs: "1.5rem", sm: "1.75rem" },
          }}
        >
          Projects
        </Typography>

        <Box sx={{ mt: 4 }}>
          {projects.map((project, index) => (
            <Box key={index} sx={{ mb: 6 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 500,
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: { xs: "1.2rem", sm: "1.5rem" },
                }}
              >
                {project.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.7)",
                  my: 1,
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                }}
              >
                {project.date}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  mb: 2,
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
              >
                {project.description}
              </Typography>

              <Button
                variant="outlined"
                target="_blank"
                rel="noopener noreferrer"
                href={project.repoLink}
                startIcon={<GitHubIcon />}
                sx={{
                  color: "#fff",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "8px",
                  textTransform: "none",
                  fontWeight: 500,
                  px: 2.5,
                  py: 1,
                  fontSize: { xs: 12, sm: 14 },
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    borderColor: "rgba(255, 255, 255, 0.4)",
                  },
                }}
              >
                Go to Repo
              </Button>
            </Box>
          ))}
        </Box>
      </Container>
      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          borderTop: "0.05px solid #cccccc41",
        }}
      >
        Zayn
      </footer>
    </>
  );
}
