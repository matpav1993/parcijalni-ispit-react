import React from "react";
import { Button } from "react-bootstrap";
import { ReposComponent } from "./ReposComponent";
import { UserComponent } from "./UserComponent";

export const FormDetails = ({ error, userData, repos, onFormReset }) => {
  return (
    <div className="form-details">
      {error ? (
        <p className="error-message">Not found!</p>
      ) : (
        <>
          <UserComponent userData={userData} />
          <ReposComponent repos={repos} />
        </>
      )}
      <Button onClick={onFormReset} className="resetButton">
        Reset
      </Button>
    </div>
  );
};
