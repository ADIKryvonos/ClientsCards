import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { GetUsers } from 'services/operations';
import UsersCard from 'components/UsersCard/UserCard';
import LoadMore from 'components/LoadMore/LoadMore';
import { Loader } from 'components/Loader/Loader';

import { BackButton } from 'components/LoadMore/LoadMore.styled';

const USERS_PER_PAGE = 3;
const USERS_LIMIT = 15;

function Tweets() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setisLoading] = useState(false);
  // const [showBtn, setShowBtn] = useState(false);

  const queryLink = `?page=${page}&limit=${USERS_PER_PAGE}`;

  useEffect(() => {
    let ignore = false;

    setisLoading(true);

    GetUsers(queryLink)
      .then(({ data }) => {
        if (!ignore) {
          setUsers(preUsers => [...preUsers, ...data]);
        }
      })
      .catch(error => toast.error(`Opps, error: "${error}", try again`))
      .finally(() => setisLoading(false));

    return () => (ignore = true);

  }, [queryLink]);

  const isUserLimit = page >= Math.ceil(USERS_LIMIT / USERS_PER_PAGE);

  const loadMoreBtnClick = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3500,
        }}
      />

      <Link to={backLinkHref}>
        <BackButton type="button">Go back</BackButton>
      </Link>

      <UsersCard users={users} />

      {isLoading ? (
        <Loader />
      ) : (
        !isUserLimit && <LoadMore onClick={loadMoreBtnClick} />
      )}
    </>
  );
}

export default Tweets;
