import React, { useState } from "react";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import ProfileList from "./components/ProfileList";
import MapView from "./components/MapView";
import AdminLogin from "./components/AdminLogin";
import profilesData from "../src/profiles.json";
import { Routes, Route, useNavigate } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [nameFilter, setNameFilter] = useState("");
  const [domainFilter, setDomainFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [allProfiles, setAllProfiles] = useState(profilesData);
  const navigate = useNavigate();

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  const handleDeleteProfile = (id) => {
    setAllProfiles((prevProfiles) =>
      prevProfiles.filter((profile) => profile.id !== id)
    );
    navigate("/");
  };

  const handleAddProfile = (newProfile) => {
    setAllProfiles((prev) => [...prev, newProfile]);
    navigate("/");
  };

  const filteredProfiles = allProfiles.filter((profile) => {
    const nameMatch = profile.name
      .toLowerCase()
      .includes(nameFilter.toLowerCase());
    const domainMatch = profile.domain
      .toLowerCase()
      .includes(domainFilter.toLowerCase());
    const cityMatch = profile.city
      .toLowerCase()
      .includes(cityFilter.toLowerCase());
    return nameMatch && domainMatch && cityMatch;
  });

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/admin/dashboard"
          element={
            <AdminDashboard
              profiles={allProfiles}
              onDeleteProfile={handleDeleteProfile}
              onAddProfile={handleAddProfile}
            />
          }
        />
        <Route
          path="/"
          element={
            <>
              <FilterBar
                nameFilter={nameFilter}
                setNameFilter={setNameFilter}
                domainFilter={domainFilter}
                setDomainFilter={setDomainFilter}
                cityFilter={cityFilter}
                setCityFilter={setCityFilter}
              />
              <ProfileList
                profiles={filteredProfiles}
                onSummaryClick={handleSummaryClick}
              />
              <MapView
                profiles={filteredProfiles}
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
