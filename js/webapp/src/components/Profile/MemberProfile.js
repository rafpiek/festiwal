import React from 'react';
import {useSelector} from "react-redux";
import {UserSelector} from "../../redux/UserSlice";
import {ProfileForm} from "./UserProfile";

export const MemberProfile = () => {
  const user = useSelector(UserSelector.getCurrentUser)

  const handler1 = f => f
  const handler2 = f => f
  const handler3 = f => f
  const handler4 = f => f
  const handler5 = f => f
  const handler6 = f => f
  const handler7 = f => f
  const handler8 = f => f
  const anotherHandler1 = f => f
  const anotherHandler2 = f => f

  return (
    <div className="container">
      <div className="profile__avatar">{user.avatar}</div>
      <div className="profile__header">{user.username}</div>
      <div className="actions">
        <div className="profile__form">
          <ProfileForm />
        </div>
        <Memberships />
      </div>
    </div>
  )
}

export const Memberships = () => <div></div>
