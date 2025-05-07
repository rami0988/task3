import React from "react";
import { FiEye, FiEyeOff } from "react-icons/fi"; // 👈 أيقونات العين

export default function InputField({ label, type, value, onChange, name, showPassword, toggleShowPassword }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {name === "password" && (
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
          >
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
}
