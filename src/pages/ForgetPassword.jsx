import React, { useEffect } from "react";
import InputField from "../components/InputField";
import { showSuccess, showError } from "../components/AlertToast";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setEmail,
  clearMessages,
  sendResetEmail,
} from "../redux/forgetPasswordSlice";

export default function ForgetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { email, loading, error, successMessage } = useSelector(
    (state) => state.forgetPassword
  );

  useEffect(() => {
    if (error) {
      showError(error);
      dispatch(clearMessages());
    }
  }, [error, dispatch]);

  useEffect(() => {
    if (successMessage) {
      showSuccess(successMessage);
      dispatch(clearMessages());
      navigate("/login");
    }
  }, [successMessage, dispatch, navigate]);

  const handleChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendResetEmail(email));
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
            value={email}
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
