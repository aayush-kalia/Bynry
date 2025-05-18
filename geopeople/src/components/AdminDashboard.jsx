import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = ({ profiles, onDeleteProfile, onAddProfile }) => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const [newProfile, setNewProfile] = useState({
    id: "",
    name: "",
    domain: "",
    city: "",
    yearsOfExperience: "",
    photo: "",
  });

  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const handleChange = (e) => {
    setNewProfile({ ...newProfile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newProfile.name || !lat || !lng) return;

    const completeProfile = {
      ...newProfile,
      id: Date.now(),
      location: {
        lat: parseFloat(lat),
        lng: parseFloat(lng),
      },
    };

    onAddProfile(completeProfile);

    // Reset form
    setNewProfile({
      id: "",
      name: "",
      domain: "",
      city: "",
      yearsOfExperience: "",
      photo: "",
    });
    setLat("");
    setLng("");
    setShowForm(false);
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : "Add Profile"}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="add-profile-form">
          <input
            name="name"
            placeholder="Name"
            value={newProfile.name}
            onChange={handleChange}
            required
          />
          <input
            name="domain"
            placeholder="Domain"
            value={newProfile.domain}
            onChange={handleChange}
          />
          <input
            name="city"
            placeholder="City"
            value={newProfile.city}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Latitude"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Longitude"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
            required
          />
          <input
            name="yearsOfExperience"
            placeholder="Experience (years)"
            value={newProfile.yearsOfExperience}
            onChange={handleChange}
          />
          <input
            name="photo"
            placeholder="Photo URL"
            value={newProfile.photo}
            onChange={handleChange}
          />
          <button type="submit">Add</button>
        </form>
      )}

      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            {profile.name} - {profile.domain}
            <button onClick={() => onDeleteProfile(profile.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
