import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import projects from "../../utils/projects.js";
import Grid from "@mui/material/Grid";

const placeholderImage =
  "https://via.placeholder.com/345x140?text=Project+Preview";

function Project() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center" sx={{ my: 10 }}>
        My Projects
      </Typography>
      <article>
        <Grid container spacing={5}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.title}>
              <Card
                sx={{
                  maxWidth: 345,
                  transition: "transform 0.2s",
                  "&:hover": { transform: "translateY(-6px)" },
                }}
              >
                <CardMedia
                  component="img"
                  alt={project.title}
                  height="140"
                  image={project.image || placeholderImage}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Button>
                  <Button
                    size="small"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </article>
    </Container>
  );
}

export { Project };
