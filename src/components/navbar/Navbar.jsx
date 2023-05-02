// Libraries
import { AppBar, Box, Stack, Toolbar, Typography, Switch } from "@mui/material";
import { Link } from "react-router-dom";
// Files
import Logo from "../../../public/icon.svg";

function Navbar() {
  return (
    <AppBar>
      <Toolbar>
        <Stack width="100%" direction="row" alignItems="center" justifyContent="space-between">
          <Link to="/" replace>
            <Stack direction="row" alignItems="center" gap="0.75rem">
              <Box component="img" src={Logo} alt="Logo" width={32}/>
              <Typography component="h2" sx={{
                color: "title",
                fontSize: "1.75rem",
                fontWeight: "600"
              }}>Rito</Typography>
            </Stack>
          </Link>
          <Stack direction="row" alignItems="center" gap="1.5rem">
            <Link to="/">
              <Typography component="p" sx={{
                color: "title",
                fontSize: "1rem"
              }}>Home</Typography>
            </Link>  
            <Link to="/currencies">
              <Typography component="p" sx={{
                color: "title",
                fontSize: "1rem"
              }}>Cryptocurrencies</Typography>
            </Link>  
            <Link to="/news">
              <Typography component="p" sx={{
                color: "title",
                fontSize: "1rem"
              }}>News</Typography>
            </Link>  
            <Box>
              <Switch variant="dark-mode" />
            </Box>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
