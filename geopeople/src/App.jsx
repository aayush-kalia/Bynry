// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProfileList from "./components/ProfileList";
import MapView from "./components/MapView";
import AdminLogin from "./components/AdminLogin";
import profilesData from "../src/profiles.json"; // adjust if needed

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <Router>
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
              {/* Pass location, isSelected, and name */}
              <MapView
                location={selectedProfile?.location}
                isSelected={true}
                name={selectedProfile?.name}
              />
            </>
          }
        />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
