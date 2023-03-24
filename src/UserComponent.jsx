import React from "react";

export const UserComponent = ({ userData }) => {
  return userData ? (
    <div className="user-card">
      <ul>
        {userData.avatar_url && (
          <img
            src={userData.avatar_url}
            alt={userData.name}
            className="user-avatar"
          />
        )}
        {userData.name && <li className="user-name">{userData.name}</li>}
        {userData.bio && <li className="user-bio">{userData.bio}</li>}
        {userData.location && <li className="user-bio">{userData.location}</li>}
      </ul>
    </div>
  ) : (
    ""
  );
};
