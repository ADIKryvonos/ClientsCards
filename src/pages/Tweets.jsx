import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { GetUsers } from 'services/operations';
import UsersCard from 'components/UsersCard/UserCard';
import LoadMore from 'components/LoadMore/LoadMore';
import { Loader } from 'components/Loader/Loader';

import { BackButton } from 'components/LoadMore/LoadMore.styled';

const per_page = 3;
const totalUser = 15;

function Tweets() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setisLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

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

  const loadMoreBtnClick = () => {
    setPage(page + 1);
  };

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
        <BackButton type="button">Go back</BackButton>
      </Link>

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
