import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import { Login } from "../pages/login";
import { MyAds } from "../pages/myAds";
import { ProductDetail } from "../pages/productDetail";
import { Register } from "../pages/register";
import { RequestResetPassword } from "../pages/requestResetPassword";
import { ResetPassword } from "../pages/resetPassword";
import { UserProfile } from "../pages/userProfile";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/myAds" element={<MyAds />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/userProfile/:id" element={<UserProfile />} />
      <Route path="/request-password" element={<RequestResetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};
