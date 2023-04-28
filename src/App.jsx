// Libraries
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
// Components
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  );
}

export default App;
