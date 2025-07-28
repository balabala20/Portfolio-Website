import MobileMain from "./mobileMain";
import MobileHeader from "./mobileHeader";
import { Routes, Route } from "react-router-dom";
import AdminPage from "../adminPage.js";

function MobileApp() {
  return (
    <Routes>
      <Route path="/" element={[<MobileHeader />, <MobileMain />]} />
      <Route path="/adminPage" element={<AdminPage />} />
    </Routes>
  );
}

export default MobileApp;
