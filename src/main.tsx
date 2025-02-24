import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import Register from "./pages/Register";
import DummyForm from "./pages/DummyForm";
import PaymentPage from "./pages/Payment";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dummy-form" element={<DummyForm />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import Register from "./pages/Register";
import DummyForm from "./pages/DummyForm";
import PaymentPage from "./pages/Payment";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dummy-form" element={<DummyForm />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
