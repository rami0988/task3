// import React from "react";
// import { Link } from "react-router-dom";

// const UserTable = ({ users }) => {
//   return (
//     <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
//       <thead className="bg-gray-100">
//         <tr className="text-left text-gray-700 text-sm uppercase tracking-wider">
//           <th className="px-6 py-3">الاسم الكامل</th>
//           <th className="px-6 py-3">الإيميل</th>
//           <th className="px-6 py-3">المدينة</th>
//           <th className="px-6 py-3">رقم الهاتف</th>
//           <th className="px-6 py-3 text-center">تفاصيل</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user, index) => (
//           <tr
//             key={user.id}
//             className={`${
//               index % 2 === 0 ? "bg-white" : "bg-gray-50"
//             } hover:bg-gray-100 transition`}
//           >
//             <td className="px-6 py-4">{user.name}</td>
//             <td className="px-6 py-4">{user.email}</td>
//             <td className="px-6 py-4">{user.address.city}</td>
//             <td className="px-6 py-4">{user.phone}</td>
//             <td className="px-6 py-4 text-center">
//               <Link
//                 to={`/users/${user.id}`}
//                 className="text-blue-500 hover:underline"
//               >
//                 عرض
//               </Link>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default UserTable;
import React from "react";
import { Link } from "react-router-dom";

const UserTable = ({ users }) => {
  return (
    <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
      <thead className="bg-[#EEEBDD]">
        <tr className="text-left text-[#1B1717] text-sm uppercase tracking-wider">
          <th className="px-6 py-3">الاسم الكامل</th>
          <th className="px-6 py-3">الإيميل</th>
          <th className="px-6 py-3">المدينة</th>
          <th className="px-6 py-3">رقم الهاتف</th>
          <th className="px-6 py-3 text-center">تفاصيل</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr
            key={user.id}
            className={`${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            } hover:bg-[#EEEBDD] transition`}
          >
            <td className="px-6 py-4 text-[#1B1717]">{user.name}</td>
            <td className="px-6 py-4 text-[#1B1717]">{user.email}</td>
            <td className="px-6 py-4 text-[#1B1717]">{user.address.city}</td>
            <td className="px-6 py-4 text-[#1B1717]">{user.phone}</td>
            <td className="px-6 py-4 text-center">
              <Link
                to={`/users/${user.id}`}
                className="text-[#CE1212] hover:underline"
              >
                عرض
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
