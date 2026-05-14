import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
      <Navbar/>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/contact" element={<Contact/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;