import React from 'react';
import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory';


export const App = () => {
  return (
   <AppContainer>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'Statistics title'} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={TransactionHistory} />
   </AppContainer>
  );
};
