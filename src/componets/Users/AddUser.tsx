import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser: React.FC = () => {
  const adduserHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={adduserHandler}>
        <label htmlFor="username" className="text-label">유저명</label>
        <input id="username" type="text" />

        <br/>
        <label htmlFor="age" className="text-label">나이</label>
        <input id="age" type="numbre" />

        <div className="text-center">
          <button type="submit" className="button">
            유저추가
          </button>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
