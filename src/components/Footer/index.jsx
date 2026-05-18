import { Box, Container, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{ py: 3, px: 2, mt: "auto", backgroundColor: "#f8f8f8" }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          Shane's Portfolio
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "} {new Date().getFullYear()}{" "}
          <Link
            color="inherit"
            href="https://www.linkedin.com/in/shane-bramble-wade"
            target="_blank"
          >
            LinkedIn
          </Link>{" "}
          <Link
            color="inherit"
            href="https://github.com/Kranniax"
            target="_blank"
          >
            GitHub
          </Link>{" "}
          <Link
            color="inherit"
            href="https://www.instagram.com/iamshanewade/"
            target="_blank"
          >
            Instagram
          </Link>{" "}
          <Link color="inherit" href="https://x.com/kranniax" target="_blank">
            X
          </Link>{" "}
        </Typography>
      </Container>
    </Box>
  );
}

export { Footer };
