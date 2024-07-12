import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";

export default function MainRoutes() {
  return (
    <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/*" element={<Navigate to={"/"} />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
    </div>
  );
}
