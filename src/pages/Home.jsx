import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/usersSlice';
import Loader from '../components/Loader';
import SearchBar from '../components/SearchBar';
import UserTable from '../components/UserTable';

const Home = () => {
  const dispatch = useDispatch();
  const { data, status, error, searchTerm, cityFilter } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  const filteredUsers = data.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = cityFilter ? user.address.city === cityFilter : true;
    return matchesSearch && matchesCity;
  });

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">قائمة المستخدمين</h1>
      <SearchBar />
      {status === 'loading' && <Loader />}
      {status === 'failed' && (
        <div className="text-red-500">حدث خطأ: {error}</div>
      )}
      {status === 'succeeded' && <UserTable users={filteredUsers} />}
    </div>
  );
};

export default Home;
