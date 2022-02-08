import "./App.css";
import Home from "./components/home/Home";
import Footer from "./components/Shared/Footer/Footer";
import Navbar from "./components/Shared/Navbar/Navbar";
import ThemeProvider from "./context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
