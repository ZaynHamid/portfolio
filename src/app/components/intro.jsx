"use client";
import { Box, Chip, Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Intro() {
  const router = useRouter();

  const skills = [
    'JavaScript',
    'Node.js',
    'Express',
    'REST APIs',
    'MySQL',
    'MongoDB',
    'Docker',
    'Redis',
    'BullMQ',
    'Flask',
    'JWT',
    'Stripe',
  ];

  return (
    <Container
      maxWidth="md"
      sx={{
        maxWidth: "700px",
        mx: "auto",
        mt: 6,
        px: 2,
        textAlign: "left",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          color: "rgba(255, 255, 255, 0.95)",
          mb: 2,
          fontSize: { xs: "1.2rem", sm: "1.4rem" },
        }}
      >
        Backend Developer
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "rgba(255, 255, 255, 0.75)",
          fontSize: { xs: "1rem", sm: "1.1rem" },
          lineHeight: 1.6,
        }}
      >
        Backend developer with 3+ years of experience building secure, scalable server-side applications using Node.js, Express, and REST APIs. Skilled in integrating payment gateways (Stripe, PayPal), developing efficient API endpoints, and setting up automation flows to streamline operations and reduce manual work. Proven ability to help teams improve efficiency, cut operational costs, and scale systems effectively.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1.5,
          mt: 3,
          mb: 2,
        }}
      >
        {skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            sx={{
              bgcolor: 'grey.800',
              color: 'white',
              fontWeight: 600,
              fontSize: '0.9rem',
              minWidth: 80,
            }}
          />
        ))}
      </Box>

      <Button
        variant="contained"
        sx={{
          bgcolor: '#222222',
          color: 'white',
          fontWeight: 600,
          px: 4,
          py: 1.5,
          mt: 2,
          '&:hover': {
            bgcolor: '#333333',
          },
        }}
        onClick={() => router.push('/projects')}
      >
        View My Work
      </Button>
    </Container>
  );
}
