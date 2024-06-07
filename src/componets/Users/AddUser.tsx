import React from "react";

const AddUser: React.FC = () => {
  const adduserHandler = (event:React.FormEvent) => {
    event.preventDefault();
  };


  return (
    <form onSubmit={adduserHandler}>
      <label htmlFor="username">유저명</label>
      <input id="username" type="text" />

      <label htmlFor="age">나에</label>
      <input id="age" type="numbre" />
      <button type="submit" >유저추가</button>
    </form>
  );
};

export default AddUser;
