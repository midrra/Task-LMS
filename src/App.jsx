import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";
import Contact from "./pages/Contact";
import AboutUS from "./pages/AboutUS";
import NotFound from "./pages/NotFound";
import InstructorDashboard from "./pages/instructor/InstructorDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about-us" element={<AboutUS />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="/student/my-courses"
        element={
          <ProtectedRoute allowedRoles={["student"]}>
            <StudentDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/instructor/dashboard"
        element={
          // <ProtectedRoute allowedRoles={["instructor"]}>
          <InstructorDashboard />
          // </ProtectedRoute>
        }
      />

      <Route
        path="/admin/dashboard"
        element={
          // <ProtectedRoute allowedRoles={["admin"]}>
          <AdminDashboard />
          // </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
