import { BrowserRouter, Routes, Route } from "react-router-dom";
const URL = import.meta.env.VITE_BACKEND_URL;
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
