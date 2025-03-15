import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import RegisterAdmin from "./components/RegisterAdmin";
import Assesment from "./components/Assesment";
import AdminHome from "./pages/AdminHome";
import UploadTest from "./components/UploadTest";
import PreviousTests from "./components/PreviousTests";
import EditTest from "./components/EditTest";
import LandingPage from "./components/LandingPage";
import ProtectedRoute from "./components/ProtectedRoute";
import RegisterStudent from "./components/RegisterStudent";
import AdminChat from "./components/AdminChat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterAdmin />} />

      {/* Admin Protected Routes */}
      <Route path="/admin" element={<ProtectedRoute requiredRole="admin"><AdminHome /></ProtectedRoute>} />
      <Route path="/upload" element={<ProtectedRoute requiredRole="admin"><UploadTest /></ProtectedRoute>} />
      <Route path="/previous-tests" element={<ProtectedRoute requiredRole="admin"><PreviousTests /></ProtectedRoute>} />
      <Route path="/edit-test" element={<ProtectedRoute requiredRole="admin"><EditTest /></ProtectedRoute>} />
      <Route path="/register-student" element={<ProtectedRoute requiredRole="admin"><RegisterStudent /></ProtectedRoute>} />

      {/* Chat Protected Route */}
      <Route path="/chats" element={<ProtectedRoute requiredRole="admin"><AdminChat /></ProtectedRoute>} />
  
      {/* Student Protected Route */}
      <Route path="/assessment" element={<ProtectedRoute requiredRole="student"><Assesment /></ProtectedRoute>} />
    </Routes>
  );
}

export default App;
