import React, { useState } from "react";
import InputField from "../components/InputField";
import { showSuccess, showError } from "../components/AlertToast";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // حالة لإظهار كلمة المرور
  const navigate = useNavigate();
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword)
      return showError("The passwords do not match");

    try {
      const res = await fetch(
        "https://a676ec18-1fee-4e5f-903e-1858f964ef22.mock.pstmn.io/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      const data = await res.json();
      if (data.success) {
        showSuccess(data.message);
        navigate("/login");
      } else showError(data.message);
    } catch {
      showError(" erorr on creating acount  ");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EEEBDD]/40 backdrop-blur-md py-10 px-4">
      <div className="w-full max-w-md p-6 rounded-xl shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-6 text-[#1B1717] text-center">
          Create new acount
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
