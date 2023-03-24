import { useState } from "react";
import "./App.css";
import { FormDetails } from "./FormDetails";
import { FormInput } from "./FormInput";

const requestOptions = {
  headers: {
    Authorization: "Bearer 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",
  },
};

function App() {
  const [userData, setUserData] = useState(null);
  const [reposData, setReposData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [reset, setReset] = useState(true);

  const fetchUserData = async (username) => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}`,
        requestOptions
      );
      if (response.status === 200 || response.status === 201) {
        const data = await response.json();
        setUserData(data);
        setError(false);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  const fetchReposData = async (username) => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`,
        requestOptions
      );
      if (response.status === 200 || response.status === 201) {
        const data = await response.json();
        setReposData(data);
        setError(false);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const repo = e.target[0].value;
    if (repo) {
      setLoading(true);
      fetchReposData(username, repo);
      fetchUserData(username);
      setLoading(false);
    }
    setReset(false);
  };
  const handleFormReset = (e) => {
    setUserData("");
    setReposData([]);
    setReset(true);
  };

  return (
    <>
      {loading && <div>Loading...</div>}
      {reset ? (
        <FormInput onFormSubmit={handleFormSubmit} />
      ) : (
        <FormDetails
          userData={userData}
          repos={reposData}
          error={error}
          onFormReset={handleFormReset}
        />
      )}
    </>
  );
}

export default App;
