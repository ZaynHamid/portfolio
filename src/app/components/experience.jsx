"use client";
import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Container } from "@mui/material";

export default function Experience() {
  return (
    <Box
      id="experience"
      sx={{
        color: "rgba(255, 255, 255, 0.9)",
        py: 5,
        px: { xs: 3, md: 8 },
        backgroundColor: "transparent",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, textAlign: "center", mb: 4 }}
        >
          Experience
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          Fiverr
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 400, mb: 0.5 }}>
          Freelance Backend Developer
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontStyle: "italic", color: "rgba(255,255,255,0.7)", mb: 2 }}
        >
          2021 – Present
        </Typography>

        <List sx={{ pl: 4 }}>
          {[
            "Integrated multiple payment gateways to enable secure, seamless transaction processing across client platforms.",
            "Automated key business workflows using webhooks, reducing manual intervention and improving operational efficiency.",
            "Designed and integrated third-party APIs to expand application features and improve interoperability with external services.",
            "Managed both SQL and NoSQL databases, optimizing data storage and retrieval for performance and scalability.",
            "Utilized Docker for containerization, ensuring consistent development and production environments",
          ].map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                display: "list-item",
                listStyle: "disc",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
}
