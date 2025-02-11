import React from "react";
import "../index.css"; 

const Card = (props) => {
  const profile = props;
  return (
    <div className="github-profile">
      <img src={profile.avatar_url} alt="Profile" />
      <div className="info">
        <div className="name">{profile.name}</div>
        <div className="company">{profile.company}</div>
      </div>
    </div>
  );
};

export default Card;
