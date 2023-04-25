import React from 'react';
import UserCard from 'components/User/User';
import { Wrap } from './UserCard.styled';

const UsersCard = ({ users }) => {
  return (
    <Wrap>
      {users.map(({ id, ...props }) => (
        <UserCard key={id} props={props} id={id} />
      ))}
    </Wrap>
  );
};

export default UsersCard;
