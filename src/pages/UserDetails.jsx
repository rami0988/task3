
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserDetails = () => {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.data.find((u) => u.id.toString() === id)
  );

  if (!user) {
    return <div className="text-center text-[#1B1717] mt-8">المستخدم غير موجود</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#EEEBDD]">
      <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-[#1B1717] mb-6 text-center">تفاصيل المستخدم</h1>
        <div className="space-y-4">
          <p className="flex items-center">
            <strong className="text-[#1B1717] w-1/3">الاسم الكامل:</strong>
            <span className="text-gray-700">{user.name}</span>
          </p>
          <p className="flex items-center">
            <strong className="text-[#1B1717] w-1/3">الإيميل:</strong>
            <span className="text-gray-700">{user.email}</span>
          </p>
          <p className="flex items-center">
            <strong className="text-[#1B1717] w-1/3">المدينة:</strong>
            <span className="text-gray-700">{user.address.city}</span>
          </p>
          <p className="flex items-center">
            <strong className="text-[#1B1717] w-1/3">رقم الهاتف:</strong>
            <span className="text-gray-700">{user.phone}</span>
          </p>
          <p className="flex items-center">
            <strong className="text-[#1B1717] w-1/3">الاسم المستخدم:</strong>
            <span className="text-gray-700">{user.username}</span>
          </p>
          <p className="flex items-center">
            <strong className="text-[#1B1717] w-1/3">الموقع:</strong>
            <span className="text-gray-700">{user.website}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

