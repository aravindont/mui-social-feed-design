import FeedComponent from "./components/feed";
import RightbarComponent from "./components/rightbar";
import SidebarComponent from "./components/sidebar";
import {
  Box,
  Container,
  createTheme,
  Stack,
  ThemeProvider,
} from "@mui/material";
import NavbarComponent from "./components/navbar";
import AddComponent from "./components/add";
import { useState } from "react";
function App() {
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <NavbarComponent />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <SidebarComponent setMode={setMode} mode={mode} />
            <FeedComponent />
            <RightbarComponent />
          </Stack>
          <AddComponent />
        </Box>
      </ThemeProvider>
    </>
  );
}
export default App;
