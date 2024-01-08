import React from 'react';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusStyle = {
    backgroundColor: isOnline ? 'green' : 'red',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    display: 'block',
  };

  return (
    <li className="item">
      <span style={statusStyle}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
