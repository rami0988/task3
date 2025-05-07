import React, { useState } from "react";
import InputField from "../components/InputField";
import { showSuccess, showError } from "../components/AlertToast";
import { useNavigate } from "react-router-dom";

export default function ForgetPassword() {
  const [form, setForm] = useState({ email: "" });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        "https://a676ec18-1fee-4e5f-903e-1858f964ef22.mock.pstmn.io/forgotPassword",
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
      } else {
        showError(data.message);
      }
    } catch (error) {
      showError("Error on reset: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EEEBDD]/40 backdrop-blur-md py-10 px-4">
      <div className="w-full max-w-md p-6 rounded-xl shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-6 text-[#1B1717] text-center">
          Enter Your Email..
        </h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
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
              "Send"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
