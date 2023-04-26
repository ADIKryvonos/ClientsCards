import React, { useState } from 'react';

import { UserWrap, Img, Line, Li, Ul, Button, ImgWrap } from './User.styled';
import { FollowingUser } from 'services/operations';
import LogoSvg from 'images/LogoSvg/LogoSvg';
import BgSvg from 'images/BgSvg/BgSvg';

const UserCard = ({ props, id }) => {
  const { followers, avatar, tweets, user, complited } = props;
  const [idCard] = useState(id);
  const [followersCount, setFollowersCount] = useState(followers);
  const [complitedStatus, setComplitedStatus] = useState(complited ?? false);

  const buttonToggle = async () => {
    setComplitedStatus(!complitedStatus);

    if (complitedStatus) {
      setFollowersCount(followersCount - 1);
      await FollowingUser(idCard, followersCount - 1, !complitedStatus);
    } else {
      setFollowersCount(followersCount + 1);
      await FollowingUser(idCard, followersCount + 1, !complitedStatus);
    }
  };

  function numberWithSpaces(x) {
    var parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  return (
    <UserWrap>
      <LogoSvg />
      <BgSvg />
      <Line />

      <ImgWrap>
        <Img src={avatar} alt={user}></Img>
      </ImgWrap>

      <Ul>
        <Li>{numberWithSpaces(tweets)} TWEETS</Li>
        <Li>{numberWithSpaces(followersCount)} FOLLOWERS</Li>
      </Ul>

      <Button type="button" props={complitedStatus} onClick={buttonToggle}>
        {!complitedStatus ? 'Follow' : 'Following'}
      </Button>
    </UserWrap>
  );
};

export default UserCard;
