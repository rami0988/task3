
import React, { useEffect, useState } from "react";
import InputField from "../components/InputField";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, clearMessages } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { showSuccess, showError } from "../components/AlertToast";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, successMessage } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (successMessage) {
      showSuccess(successMessage);
      dispatch(clearMessages());
      navigate("/login");
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
    if (form.password !== form.confirmPassword) {
      showError("The passwords do not match");
      return;
    }
    dispatch(registerUser(form));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EEEBDD]/40 backdrop-blur-md py-10 px-4">
      <div className="w-full max-w-md p-6 rounded-xl shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-6 text-[#1B1717] text-center">
          Create new account
        </h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
          />
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
          <InputField
            label="Confirm Password"
            name="confirmPassword"
            value={form.confirmPassword}
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
              "Create"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
