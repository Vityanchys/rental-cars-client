import React from 'react';
import UsersPage from "./UsersPage";


function Users(props) {
  return (
    <div className="vehicles"> {
      props.users.map((user) => {
        return <UsersPage
          key={user.id}
          user={user}
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          phone={user.phone}
          passportId={user.passportId}
          admin={user.admin}
          id={user.id}
        />
      })}
    </div>
  );
}

export default Users;
