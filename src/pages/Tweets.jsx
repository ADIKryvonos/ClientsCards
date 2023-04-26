import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { GetUsers } from 'services/operations';
import UsersCard from 'components/UsersCard/UserCard';
import LoadMore from 'components/LoadMore/LoadMore';
import { Loader } from 'components/Loader/Loader';
// import FilterStyled from 'components/Filter/Filter';

import { Button } from 'components/LoadMore/LoadMore.styled';

function Tweets() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setisLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  // const [filtered, setFiltered] = useState(users);

  const per_page = 3;
  const totalUser = 15;

  useEffect(() => {
    setisLoading(true);

    const fetch = async () => {
      try {
        const { data } = await GetUsers(page, per_page);

        if (users === []) {
          setUsers(data);
        } else {
          setUsers([...users, ...data]);
        }

        setShowBtn(page < Math.ceil(totalUser / per_page));
        setisLoading(false);
      } catch (error) {
        setisLoading(false);
        toast.error(`Opps, error: "${error}", try again`);
      }
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const loadMoreBtnClick = async () => {
    setPage(page + 1);
  };

  // const statusFilter = status => {
  //   if (status === 'All') {
  //     setFiltered(users);
  //   } else {
  //     const newUserList = users.filter(user => user.complited === status);
  //     setFiltered(newUserList);
  //   }
  // };

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3500,
        }}
      />

      <Link to={backLinkHref}>
        <Button type="button">Go back</Button>
      </Link>

      {/* <FilterStyled onClick={statusFilter} /> */}
      <UsersCard users={users} />

      {isLoading ? (
        <Loader />
      ) : (
        showBtn && <LoadMore onClick={loadMoreBtnClick} />
      )}
    </>
  );
}

export default Tweets;
