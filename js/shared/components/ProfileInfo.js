import React from 'react';

export const ProfileInfo = (props) => {
  const { view: View, ...restProps } = props
  //Some logi here
  const handleProfile = () => {

  }

  return <View  handleProfile={handleProfile} {...restProps} />
}
