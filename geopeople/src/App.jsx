// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProfileList from "./components/ProfileList";
import MapView from "./components/MapView";
import AdminLogin from "./components/AdminLogin";
import profilesData from "../src/profiles.json";

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ProfileList
                profiles={profilesData}
                onSummaryClick={handleSummaryClick}
              />
              <MapView
                profiles={profilesData}
                selectedProfile={selectedProfile}
              />
            </>
          }
        />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </>
  );
}

export default App;
