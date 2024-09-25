import React from "react";

export default function Hw1({ numbers, user, users }) {
  const filterUsers = (users) => {
    let result = [];
    for (let index = 0; index < users.length; index++) {
      if (users[index].id > 100) {
        result.push(users[index]);
      }
    }
    return result;
  };

  return (
    <div>
      <div>{numbers && numbers.length > 0 ? numbers.join(", ") : null}</div>

      <div>{numbers?.filter((num) => num % 2 === 0).join(", ")}</div>

      <div>
        <p>{user ? `Hello ${user.firstName}` : "Hello Guest"}</p>
      </div>

      <div>
        {filterUsers(users).map((user) => (
          <p>{`User ${user.id} name: ${user.firstName} ${user.lastName}`}</p>
        ))}
      </div>
    </div>
  );
}
