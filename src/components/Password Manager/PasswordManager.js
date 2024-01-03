import React, { useState } from "react";
import "./PasswordManager.css";
import generate from "../../util/generate-pass";

export default function PasswordManager() {
  const [generatedPass, setGeneratedPass] = useState("");
  const generatePass = () => {
    const pass = generate(12);
    setGeneratedPass(pass);
  };

  const addPasswordHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="password-manager">
      <div className="password-input">
        <h1>Add Password</h1>
        <form onSubmit={addPasswordHandler}>
          <div className="input-element">
            <label htmlFor="password">Enter Website/Platform Name</label>
            <input
              type="text"
              placeholder="Enter website/platform name"
              required
            />
          </div>
          <div className="input-element">
            <label htmlFor="password">Enter Username</label>
            <input type="text" placeholder="Enter username" required />
          </div>
          <div className="input-element">
            <label htmlFor="password">Enter Password</label>
            <input
              type="text"
              value={generatedPass}
              placeholder="Enter password"
              onChange={(e) => setGeneratedPass(e.target.value)}
              required
            />
            <button onClick={generatePass}>Generate Password</button>
          </div>
          <input type="submit" value="Add" />
        </form>
      </div>
      <div className="passwords-container"></div>
    </div>
  );
}
