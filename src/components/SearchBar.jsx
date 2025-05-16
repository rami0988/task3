
// export default SearchBar;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, setCityFilter } from "../redux/usersSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchTerm, cityFilter, data } = useSelector((state) => state.users);

  const uniqueCities = [...new Set(data.map((user) => user.address.city))];

  return (
    <div className="bg-white p-4 rounded-lg shadow flex flex-col md:flex-row items-center gap-4 mb-6">
      <input
        type="text"
        placeholder="🔍 ابحث بالاسم أو الإيميل"
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        className="border border-[#1B1717] p-2 rounded-md w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-[#CE1212]"
      />
      <select
        value={cityFilter}
        onChange={(e) => dispatch(setCityFilter(e.target.value))}
        className="border border-[#1B1717] p-2 rounded-md w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-[#CE1212]"
      >
        <option value="">🌍 كل المدن</option>
        {uniqueCities.map((city) => (
          <option key={city} value={city} className="text-[#1B1717]">
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
