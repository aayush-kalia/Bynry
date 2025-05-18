import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ profile, onSummaryClick }) => {
  return (
    <div className="profile-card">
      <img src={profile.photo} alt={profile.name} className="profile-photo" />
      <h3>{profile.name}</h3>
      <p>
        <strong>Domain:</strong> {profile.domain}
      </p>
      <p>
        <strong>Location:</strong> {profile.city}
      </p>
      <p>
        <strong>Experience:</strong> {profile.yearsOfExperience} years
      </p>
      <button onClick={() => onSummaryClick(profile)}>Summary</button>
    </div>
  );
};

export default ProfileCard;
