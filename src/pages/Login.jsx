import React, { useEffect, useState } from "react";
import InputField from "../components/InputField";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearMessages } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { showSuccess, showError } from "../components/AlertToast";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, successMessage, user } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (successMessage) {
      showSuccess(successMessage);
      dispatch(clearMessages());
      navigate("/Home");
    }
  }, [successMessage, dispatch, navigate]);

  useEffect(() => {
    if (error) {
      showError(error);
      dispatch(clearMessages());
    }
  }, [error, dispatch]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EEEBDD]/40 backdrop-blur-md py-10 px-4">
      <div className="w-full max-w-md p-6 rounded-xl shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-6 text-[#1B1717] text-center">
          Enter Your Data..
        </h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
          />
          <InputField
            label="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            type={showPassword ? "text" : "password"}
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 mt-4 rounded text-white font-medium flex items-center justify-center ${
              loading ? "bg-gray-500 cursor-not-allowed" : ""
            }`}
            style={{ backgroundColor: loading ? "#999999" : "#810000" }}
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
            ) : (
              "Login"
            )}
          </button>

          <p className="text-center text-sm text-[#1B1717] mt-4">
            You don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-[#CE1212] font-medium cursor-pointer hover:underline"
            >
              Create
            </span>
            <span className="mx-2">|</span>
            <span
              onClick={() => navigate("/forgot-password")}
              className="text-[#CE1212] font-medium cursor-pointer hover:underline"
            >
              Forgot your password?
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
