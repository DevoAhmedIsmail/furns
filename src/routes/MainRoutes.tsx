import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Navbar from "../components/shared/Navbar/Navbar";

export default function MainRoutes() {
  return (
    <div className="">
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/*" element={<Navigate to={"/"} />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
    </div>
  );
}
