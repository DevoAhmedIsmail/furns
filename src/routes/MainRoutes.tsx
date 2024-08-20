import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";
import Aboutus from "../pages/Aboutus/Aboutus";
import Shop from "../pages/Shop/Shop";

export default function MainRoutes() {
  return (
    <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/*" element={<Navigate to={"/"} />} />
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<Aboutus />} />
            <Route path="/shop/:categoryName" element={<Shop />} />
          </Routes>
        </div>
        <Footer />
    </div>
  );
}
