import React from 'react';
import {UserSelector} from "../../redux/UserSlice";
import {useSelector} from "react-redux";

const Profile = ({props}) => {
  const user = useSelector(UserSelector.getCurrentUser)

  return (
    <div className='container'>
      <Avatar avatar={user.avatar} />
      <Header text={user.username} />
      <div className="actions">
        {props.children}
      </div>
    </div>
  )
}

const Avatar = (avatar) => <div className='profile__avatar'>{avatar}</div>
const Header = (text) => <div className='profile__header'>{text}</div>

const ProfileForm = () => <div></div>
const Memberships = () => <div></div>
const UsersList = () => <div></div>

Profile.ProfileForm = ProfileForm
Profile.Memberships = Memberships
Profile.UsersList = UsersList

export default Profile
