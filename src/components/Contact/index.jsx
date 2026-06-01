import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {validateEmail} from "../../utils/helper.js";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 3,
        backgroundColor: "#f4f6f8",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 640,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
          Send a message and I&apos;ll get back to you as soon as possible.
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            sx={{ mb: 2 }}
            onBlur={handleChange}
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            sx={{ mb: 2 }}
            onBlur={handleChange}
          />
          <TextField
            name="message"
            label="Message"
            v
            multiline
            rows={5}
            variant="outlined"
            margin="normal"
            fullWidth
            sx={{ mb: 3 }}
            onBlur={handleChange}
          />
          <Button type="submit" variant="contained" size="large">
            Send Message
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export { Contact };
