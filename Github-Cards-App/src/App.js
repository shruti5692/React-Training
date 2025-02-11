import React, { useState } from "react";
import CardList from "./components/CardList";
import Form from "./components/Form";

const App = ({ title }) => {
  const [profiles, setProfiles] = useState([]);

  const addNewProfile = (profileData) => {
    setProfiles([...profiles, profileData]);
  };

  return (
    <div>
      <h1 className="header">{title}</h1>
      <Form onSubmit={addNewProfile} />
      <CardList profiles={profiles} />
    </div>
  );
};

export default App;
