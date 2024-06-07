import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

export type UserType = {
  username: string;
  age: number;
  id: string;
};

export type ErrorType = {
  title: string;
  message: string;
};

interface AddUserProps {
  onAddUser: (user: UserType) => void;
}

const AddUser: React.FC<AddUserProps> = (props) => {
  const [enteredInput, setEnteredInput] = useState<UserType>({
    username: "",
    age: 0,
    id: "",
  });
  const [error, setError] = useState<ErrorType>({ title: "", message: "" });

  const addUserHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (
      !enteredInput ||
      enteredInput.username.trim().length === 0 ||
      enteredInput.age <= 0
    ) {
      setError({
        title: "유저 정보를 입력해주세요",
        message: "유저명과 나이를 입력해주세요",
      });

      return;
    }
    props.onAddUser(enteredInput);

    setEnteredInput({ username: "", age: 0, id: "" });
  };

  const inputChangeHandler = (key: string, value: string) => {
    setEnteredInput((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const onClose = () => {
    setError({ title: "", message: "" });
  };

  return (
    <>
      {error.title && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={onClose}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username" className="text-label">
            유저명
          </label>
          <input
            id="username"
            type="text"
            value={enteredInput.username}
            onChange={(event) =>
              inputChangeHandler("username", event.target.value)
            }
          />
          <br />
          <label htmlFor="age" className="text-label">
            나이
          </label>
          <input
            id="age"
            type="number"
            value={enteredInput.age}
            onChange={(event) => inputChangeHandler("age", event.target.value)}
            min={0}
          />
          <div className="text-center">
            <button type="submit" className="button">
              유저추가
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
