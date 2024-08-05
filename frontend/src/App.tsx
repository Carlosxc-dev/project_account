import { useState } from "react";
import { ThemeProvider } from "styled-components";

//themes
import Light from "./styles/theme/light";
//pages
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import Home from "./pages/home/home";

function App() {
  const [theme, setTheme] = useState(Light);

  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  );
}

export default App;
