import { Box, Container, Typography, Link } from "@mui/material";

function Footer() {
  return (
<<<<<<< HEAD
    <footer className="footer">
      <div className="footer-content">
        <p>Connect with me:</p>
        <div className="social-links">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/your-twitter-handle"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
=======
    <Box
      component="footer"
      sx={{ py: 3, px: 2, mt: "auto", backgroundColor: "#f8f8f8" }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          My Website Footer
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://linkedin.com">
            LinkedIn
          </Link>{" "}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
>>>>>>> feature/about
  );
}

export { Footer };
