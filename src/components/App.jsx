import React from 'react';
import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory';
import friendList from 'components/dataBase/friends.json';
import user from 'components/dataBase/user.json';
import statistics from 'components/dataBase/data.json';
import transactionHistory from 'components/dataBase/transactions.json';


export const App = () => {
  return (
   <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'statistics title'} stats={statistics} />
      <FriendList friends={friendList} />
      <TransactionHistory items={transactionHistory} />
   </div>
  );
};
