import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import OwlsWelcome from "./Components/OwlsWelcome";
import "react-toastify/dist/ReactToastify.css";
import Package from "./Components/Package";
import LastPage from "./Components/Lastpage";

export default function App() {
  return (
    <div className="app">
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<OwlsWelcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/welcome" element={<OwlsWelcome />} />
            <Route path="/package" element={<Package />} />
            <Route path="/love" element={<LastPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
