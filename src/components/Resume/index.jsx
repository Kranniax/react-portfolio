import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function Resume() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Resume
      </Typography>
      <Typography variant="body1" paragraph>
        I'm a front-end developer focused on building responsive, accessible,
        and user-friendly web applications using React, JavaScript, HTML, CSS,
        and Material UI.
      </Typography>
      <Button
        variant="contained"
        href={
          process.env.PUBLIC_URL +
          "/Shane_Bramble_Wade_Resume_React_Portfolio.pdf"
        }
        target="_blank"
        rel="noopener noreferrer"
        sx={{ mb: 4 }}
      >
        Download Resume
      </Button>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Skills
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="React & React Router" />
              </ListItem>
              <ListItem>
                <ListItemText primary="JavaScript (ES6+)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="HTML5 & CSS3" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Material UI" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Responsive design" />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Experience
            </Typography>
            <Typography variant="body2" paragraph>
              Developed web projects with user-centric interfaces, integrated
              APIs, and interactive features suited for modern portfolios and
              business applications.
            </Typography>
            <Typography variant="body2" paragraph>
              Strong collaboration skills with designers and developers to
              deliver polished, production-ready solutions.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export { Resume };
