import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

export type UserType = {
  username: string;
  age: number;
};

const AddUser: React.FC = () => {
  const [enteredInput, setEnteredInput] = useState<UserType>({username: '', age:0 });

  const addUserHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if(!enteredInput || enteredInput.username.trim().length === 0 || enteredInput.age<=0 ) {
      return; 
    }
    setEnteredInput({username: '', age: 0});
    console.log("enteredInput:", enteredInput);
  };

  const inputChangeHandler = (key: string, value: string) => {
    setEnteredInput((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

 

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username" className="text-label">유저명</label>
        <input
          id="username"
          type="text"
          value={enteredInput.username}
          onChange={(event) => inputChangeHandler("username", event.target.value)}
        />
        <br/>
        <label htmlFor="age" className="text-label">나이</label>
        <input
          id="age"
          type="number"
          value={enteredInput.age}
          onChange={(event) => inputChangeHandler("age", event.target.value)}
        />
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
