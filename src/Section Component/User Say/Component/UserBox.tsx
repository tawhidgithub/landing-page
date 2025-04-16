import React, { FC } from "react";
import UserBoxProps from "../interface/userBox.interface";

const UserBox: FC<UserBoxProps> = ({ imageUrl, message, userInfo }) => {
  return (
    <div className="bg-white shadow-lg p-8 rounded-lg hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4">
      <img
        src={imageUrl}
        alt="User Avatar"
        className="w-16 h-16 rounded-full"
      />
      <div>
        <p className="text-gray-600 mb-4">{message}</p>
        <strong>{userInfo}</strong>
      </div>
    </div>
  );
};

export default UserBox;
