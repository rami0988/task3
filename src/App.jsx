import { Routes, Route, Navigate } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import ForgetPassword from './pages/ForgetPassword'
import { ToastContainer } from 'react-toastify'
import UserDetails from './pages/UserDetails';
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/UserDetails" element={<UserDetails />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
      <ToastContainer position="top-center" />
    </>
  )
}
