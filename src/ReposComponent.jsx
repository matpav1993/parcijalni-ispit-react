import React from "react";

export const ReposComponent = ({ repos }) => {
  return (
    <div className="repos-list">
      <h3>Repositories</h3>
      {repos &&
        repos.length > 0 &&
        repos.map((repo) => (
          <div key={repo.id} className="repos-card">
            <h4 className="repos-name">{repo.name}</h4>
            <p className="repos-description">{repo.description}</p>
          </div>
        ))}
    </div>
  );
};
