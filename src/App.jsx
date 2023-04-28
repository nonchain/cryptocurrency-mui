// Libraries
import { useMemo, useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
// Components
import Navbar from "./components/navbar/Navbar";
// Files
import { customTheme } from "./theme/theme";

function App() {
  const [mode, setMode] = useState("light");
  // const colorMode = useMemo(
  //   () => ({
  //     toggleColorMode: () => {
  //       setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  //     },
  //   }),
  //   []
  // );

  const theme = useMemo(() => createTheme(customTheme(mode)), [mode]);
  
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar />
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}

export default App;
