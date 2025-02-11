import React, { useState } from "react";
import axios from "axios";

const Form = ({ onSubmit }) => {
  const [userName, setUserName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.get(`https://api.github.com/users/${userName}`);
      onSubmit(res.data); // Send data to App component
      setUserName(""); // Clear input
    } catch (error) {
      console.error("User not found or API error", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="GitHub username"
        required
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <button type="submit">Add Card</button>
    </form>
  );
};

export default Form;
