"use client";
import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Stack,
} from "@mui/material";

export default function ContactForm() {
  const [state, formspreeSubmit] = useForm('process.env.NEXT_PUBLIC_FORMSPREE_ID');

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [localErrors, setLocalErrors] = useState({});

  useEffect(() => {
    if (state.succeeded) {
      alert("Thanks for submitting!");
      setFormValues({ name: "", email: "", message: "" });
    }
  }, [state.succeeded]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setLocalErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errors = {};
    if (!formValues.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formValues.email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formValues.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!formValues.message.trim()) {
      errors.message = "Message is required";
    }
    setLocalErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      formspreeSubmit(e);
    }
  };

  const hasError = (field) =>
    localErrors[field] || (Array.isArray(state.errors) && state.errors.some((e) => e.field === field));

  return (
    <Box
      id="contact"
      sx={{
        color: "rgba(255, 255, 255, 0.9)",
        py: 8,
        px: { xs: 3, md: 8 },
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 600, textAlign: "center", mb: 4 }}>
        Contact
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: "600px",
          mx: "auto",
        }}
        noValidate
        autoComplete="off"
      >
        <Stack spacing={2}>
          <TextField
            fullWidth
            label="Name"
            id="name"
            name="name"
            variant="outlined"
            required
            value={formValues.name}
            onChange={handleChange}
            error={!!hasError("name")}
            helperText={localErrors.name || <ValidationError prefix="Name" field="name" errors={state.errors} />}
            InputProps={{
              sx: {
                borderRadius: "10px",
                backgroundColor: "#1c1c1c",
                color: "#fff",
              },
            }}
            InputLabelProps={{
              sx: {
                color: "rgba(255,255,255,0.7)",
              },
            }}
          />

          <TextField
            fullWidth
            label="Email"
            id="email"
            name="email"
            type="email"
            variant="outlined"
            required
            value={formValues.email}
            onChange={handleChange}
            error={!!hasError("email")}
            helperText={localErrors.email || <ValidationError prefix="Email" field="email" errors={state.errors} />}
            InputProps={{
              sx: {
                borderRadius: "10px",
                backgroundColor: "#1c1c1c",
                color: "#fff",
              },
            }}
            InputLabelProps={{
              sx: {
                color: "rgba(255,255,255,0.7)",
              },
            }}
          />

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Message"
            id="message"
            name="message"
            variant="outlined"
            required
            value={formValues.message}
            onChange={handleChange}
            error={!!hasError("message")}
            helperText={localErrors.message || <ValidationError prefix="Message" field="message" errors={state.errors} />}
            InputProps={{
              sx: {
                borderRadius: "10px",
                backgroundColor: "#1c1c1c",
                color: "#fff",
              },
            }}
            InputLabelProps={{
              sx: {
                color: "rgba(255,255,255,0.7)",
              },
            }}
          />

          <Button
            type="submit"
            variant="outlined"
            disabled={state.submitting}
            sx={{
              mt: 1,
              borderRadius: "9999px",
              textTransform: "none",
              color: "#fff",
              borderColor: "rgba(255,255,255,0.4)",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0.6)",
              },
            }}
          >
            Send
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
