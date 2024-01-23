import * as React from 'react';
import Avatar from '@mui/material/Avatar';

export default function ImageAvatars({profileImage}) {
  return (
      <Avatar alt="current user profile" src={profileImage}/>
  );
}