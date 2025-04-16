import React, { Fragment, useEffect } from "react";

const users = ["Raphael", "Robert", "Arif"];


const Users = () => {
  // useEffect (() => {
  //   console.log("First useEffect running");
  // });
  // manupulating the DOM
  // useEffect(() => {
  //   const li
  // })
  return (
    // <div>
    //   <ol id="users">
    //     {/* ✅ Map through users and render each in a <li> with a unique key */}
    //     {users.map((user, index) => (
    //       <li key={index}>{user}</li>
    //     ))}
    //   </ol>
    // </div>
    <div>
      <ol id="users">
        {/* Lists and keys */}
        {users.map((user, index) => {
          return <li key={index}>{user}</li>;
        })}
      </ol>
    </div>
  );
};

export default Users;
