import React from 'react'
import UsersList from '../../componets/Users/UsersList'
import AddUser from '../../componets/Users/AddUser'

const AddUserPage:React.FC = () => {
  return (
    <div>
        <AddUser />

        <UsersList users={[]}  />
    </div>
  )
}

export default AddUserPage