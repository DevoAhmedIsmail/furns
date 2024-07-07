import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Header from "../components/shared/Header/Header";

export default function MainRoutes() {
  return (
    <div className="">
        <Header />
        <div className="">
          <Routes>
            <Route path="/*" element={<Navigate to={"/"} />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
    </div>
  );
}
