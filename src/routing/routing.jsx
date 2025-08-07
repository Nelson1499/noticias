import { BrowserRouter as Router, Routes, Route } from "react-router";
import Dashboard from "../pages/dashboard";
import New from "../pages/New";
import Upload from "../pages/upload";
import Controls_news from "../pages/controls_news";
import UploadCategory from "../pages/UploadCategory";


export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />   
        <Route path="/news" element={<New />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/controls_news" element={<Controls_news />} />
        <Route path="/upload_category" element={<UploadCategory />} />
      </Routes>
    </Router>
  );
}
