import "./App.css";
import Home from "./components/home/Home";

import Navbar from "./components/Shared/Navbar/Navbar";
import ThemeProvider from "./context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
