import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ELD from "./pages/ELD";

function App() {
  return (
    <div className="bg-[#070606] max-w-[1440px] mx-auto">
      <BrowserRouter>
        <Header />
        <div className="mt-[100px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eld-service" element={<ELD />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
