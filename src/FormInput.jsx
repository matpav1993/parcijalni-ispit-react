import React from "react";
import { Button } from "react-bootstrap";

export const FormInput = ({ onFormSubmit }) => {
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <label htmlFor="user" className="inputLabel">
        Github username:
      </label>
      <input
        className="inputForm"
        placeholder="e.g. facebook"
        name="inputForm"
        type="text"
      />
      <Button className="goButton" type="submit">
        GO!
      </Button>
    </form>
  );
};
