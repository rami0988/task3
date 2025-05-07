import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EEEBDD]/40 backdrop-blur-md py-10 px-4">
      <div className="p-8">
        <h1 className="text-2xl font-bold">Welcome to the control panel</h1>
      </div>
    </div>
  );
}
