import React, { useState } from 'react'
import AddUser, { UserType } from '../../componets/Users/AddUser'
import UsersList from './../../componets/Users/UsersList';


const AddUserPage:React.FC = () => {
  const [usersList, setUsersList] = useState<UserType[]>([]);


  const addUserHandler = ({ username, age }: UserType) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { username,age,id:Math.random().toString()}];
    });
  };


  return (
    <div>
        <AddUser onAddUser={addUserHandler} />
        <UsersList users={usersList}  />
    </div>
  )
}

export default AddUserPage