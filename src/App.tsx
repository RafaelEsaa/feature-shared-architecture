import { RouterProvider } from "react-router-dom";
import { router } from "./shared/router/Router";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#85B6FF",
    },
    secondary: {
      main: "#0E2359",
    },
    background: {
      default: "#F2F2F2",
      paper: "#858282",
    },
    text: {
      primary: "#3D3D3D",
      secondary: "#FFFFFF",
    },
    error: {
      main: "#FF1744",
    },
    warning: {
      main: "#FF9100",
    },
    info: {
      main: "#2196F3",
    },
    success: {
      main: "#4CAF50",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "2.125rem",
    },
    h2: {
      fontWeight: 700,
      fontSize: "1.5rem",
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
