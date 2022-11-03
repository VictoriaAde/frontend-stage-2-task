import React from 'react';
import Header from './Header';
import Main from './Main';

const Profile = () => {
  return (
    <main className="flex flex-col items-center py-12 bg-milk">
      <Header />
      <Main />
    </main>
  );
};

export default Profile;
