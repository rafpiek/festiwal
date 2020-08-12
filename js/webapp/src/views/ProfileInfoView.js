import React from 'react';

export const ProfileInfoView = ({ user }) =>
  <div className="container">
    <h1>{user.username}</h1>
    <p>{user.bio}</p>
  </div>
