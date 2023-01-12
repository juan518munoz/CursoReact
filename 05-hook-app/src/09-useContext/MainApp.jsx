import { Route, Routes, Navigate, Link } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "../Components";
import { HooksApp } from "../HooksApp";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="hook" element={<HooksApp />} />

        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </UserProvider>
  );
};
