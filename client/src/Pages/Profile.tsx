import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const data = useSelector((state: any) => state.user.data.userData);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {data.fullName}</p>
      <p>Email: {data.email}</p>
    </div>
  );
};

export default Profile;
