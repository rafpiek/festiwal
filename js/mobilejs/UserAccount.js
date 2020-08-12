import React from 'react';
import {useSelector} from 'react-redux';
import {UserSelector as UsersSelector} from './UserSlice';
import {View, Text, StyleSheet} from 'react-native';

export const UserAccount = () => {
  const user = useSelector(UsersSelector.getCurrentUser);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>{user.name}</Text>
        <Text>{user.surname}</Text>
        <Text>{user.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
