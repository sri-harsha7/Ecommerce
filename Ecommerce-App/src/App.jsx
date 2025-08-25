import { BrowserRouter, Routes, Route } from "react-router-dom";
const URL = import.meta.env.VITE_BACKEND_URL;
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Login from "./pages/Login";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <NavBar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
