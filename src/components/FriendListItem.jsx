import React from 'react';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusColor = isOnline ? 'green' : 'red';

  return (
    <li className="item">
      <span style={{ backgroundColor: statusColor }} className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
