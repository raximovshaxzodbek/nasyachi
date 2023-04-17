import { Routes, Route } from "react-router-dom";
import {
  Login,
  Dashboard,
  Purchase,
  Clients,
  OnePurchase,
  OneClients,
  Category,
} from "../imports";

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/purchases" element={<Purchase />} />
      <Route path="/purchases/:id" element={<OnePurchase />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/clients/:id" element={<OneClients />} />
      <Route path="/category" element={<Category />} />
    </Routes>
  );
};

export default RoutesPage;
