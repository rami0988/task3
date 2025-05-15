// import React from "react";
// import { Link } from "react-router-dom";

// const UserCard = ({ user }) => {
//   return (
//     <div className="bg-white shadow hover:shadow-md transition-shadow rounded-lg p-6 w-full sm:w-80">
//       <h2 className="text-xl font-bold text-gray-800 mb-2">{user.name}</h2>
//       <p className="text-sm text-gray-600 mb-1">
//         <strong>📧 Email:</strong> {user.email}
//       </p>
//       <p className="text-sm text-gray-600 mb-1">
//         <strong>🏙️ City:</strong> {user.address.city}
//       </p>
//       <p className="text-sm text-gray-600 mb-2">
//         <strong>📞 Phone:</strong> {user.phone}
//       </p>
//       <Link
//         to={`/users/${user.id}`}
//         className="inline-block text-blue-600 hover:underline font-semibold"
//       >
//         View Details →
//       </Link>
//     </div>
//   );
// };

// export default UserCard;
import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow hover:shadow-md transition-shadow rounded-lg p-6 w-full sm:w-80">
      <h2 className="text-xl font-bold text-[#1B1717] mb-2">{user.name}</h2>
      <p className="text-sm text-[#1B1717] mb-1">
        <strong>📧 Email:</strong> {user.email}
      </p>
      <p className="text-sm text-[#1B1717] mb-1">
        <strong>🏙️ City:</strong> {user.address.city}
      </p>
      <p className="text-sm text-[#1B1717] mb-2">
        <strong>📞 Phone:</strong> {user.phone}
      </p>
      <Link
        to={`/users/${user.id}`}
        className="inline-block text-[#CE1212] hover:underline font-semibold"
      >
        View Details →
      </Link>
    </div>
  );
};

export default UserCard;
