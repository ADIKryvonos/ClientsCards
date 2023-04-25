import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { GetUsers } from 'services/operations';
import UsersCard from 'components/UsersCard/UsersCard';
import LoadMore from 'components/LoadMore/LoadMore';
import { Loader } from 'components/Loader/Loader';
import FilterStyled from 'components/Filter/Filter';

function Tweets() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setisLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [filtered, setFiltered] = useState(users);

  const per_page = 3;
  const totalUser = 15;

  useEffect(() => {
    setisLoading(true);

    const fetch = async () => {
      try {
        const { data } = await GetUsers(page, per_page);
        setUsers(data);
        setShowBtn(page < Math.ceil(totalUser / per_page));
        setisLoading(false);
      } catch (error) {
        setisLoading(false);
        toast.error(`Opps, error: "${error}", try again`);
      }
    };
    fetch();
  }, [page]);

  useEffect(() => {
    setFiltered([...users]);
  }, [users]);

  const loadMoreBtnClick = async () => {
    setPage(page + 1);
    const { data } = await GetUsers(page, per_page);
    setUsers([...users, ...data]);
  };

  const statusFilter = status => {
    if (status === 'All') {
      setFiltered(users);
    } else {
      const newUserList = users.filter(user => user.complited === status);
      setFiltered(newUserList);
    }
  };

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3500,
        }}
      />
      <FilterStyled onClick={statusFilter} />
      <UsersCard users={filtered} />

      {isLoading ? (
        <Loader />
      ) : (
        showBtn && <LoadMore onClick={loadMoreBtnClick} />
      )}
    </>
  );
}

export default Tweets;
