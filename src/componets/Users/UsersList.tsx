import React from "react";
import { UserType } from "./AddUser";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

interface UserListProps {
  users: UserType[];
}


const UsersList: React.FC<UserListProps> = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.username} ({user.age} 세)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
