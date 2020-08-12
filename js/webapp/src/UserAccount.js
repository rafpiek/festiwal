import React from 'react';
import {useSelector} from 'react-redux';
import {UserSelector as UsersSelector} from './UserSlice';

export const UserAccount = () => {
  const user = useSelector(UsersSelector.getCurrentUser);

  return (
    <div style={styles.container}>
      <div style={styles.container}>
        <p>{user.name}</p>
        <span>{user.surname}</span>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {}
}
