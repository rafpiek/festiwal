import React from 'react';
import ProfileInfoViewModule from "../shared/view_modules/ProfileInfoViewModule";

export default class ProfileInfo extends ProfileInfoViewModule {

  render () {
    const { user } = this.props

    return (
      <div className="container">
        <h1>{user.username}</h1>
        <p>{user.bio}</p>
      </div>
    )
  }
}
