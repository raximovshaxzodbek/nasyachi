import { Routes, Route } from "react-router-dom";
import { Login, Dashboard, Purchase, Clients } from "../imports";

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/purchase" element={<Purchase />} />
      <Route path="/clients" element={<Clients />} />
    </Routes>
  );
};

export default RoutesPage;
