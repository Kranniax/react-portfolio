import { Navigation } from '../Navigation/index.jsx';
import { AppBar, Toolbar, Typography} from "@mui/material";
function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h3" sx={{ flexGrow: 1 }}>
          Shane's Portfolio
        </Typography>
        <Navigation></Navigation>
      </Toolbar>
    </AppBar>
  );
}

export {Header};
