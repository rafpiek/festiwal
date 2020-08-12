import React from 'react';
import Profile from "../components/Profile/Profile";
import {useSelector} from "react-redux";
import {UserSelector} from "../redux/UserSlice";

export const ProfilePage = () => {
  const { user } = useSelector(UserSelector.getCurrentUser)

  const isMember = user.isMember
  const isAdmin = user.isAdmin

  return (
    <div className="container">
      <Profile>
        {!isAdmin && <Profile.ProfileForm />}
        {isMember && <Profile.Memberships />}
        {isAdmin && <Profile.UsersList />}
      </Profile>
    </div>
  )
}
