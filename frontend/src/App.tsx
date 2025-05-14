import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Typography,
} from "@mui/material";
import { RestaurantList } from "./components/RestaurantList";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ mt: 4, mb: 4 }}
        >
          Restaurant Listing Platform
        </Typography>
        <RestaurantList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
