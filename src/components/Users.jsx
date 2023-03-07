import { useEffect, useState } from "react";
import { getUsers } from "../utils/api";

import UserCard from "./UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
      setLoading(false);
    });
  }, []);
  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <section>
      <h1>Users </h1>
      {users.map((user) => {
        return <UserCard key={user.username} user={user} />;
      })}
    </section>
    // <div>
    //   {users.map((user) => {
    //     return (
    //       <div className="user-div">
    //         <Card border="secondary" key={user.name}>
    //           <Card.Title>
    //             <label className="card-label">Name: </label>
    //             {user.name}
    //           </Card.Title>
    //           <Card.Title>
    //             <label className="card-label">Username: </label>
    //             {user.username}
    //           </Card.Title>
    //           <Card.Img
    //             src={user.avatar_url}
    //             alt={user.title}
    //             className="userImg"
    //           ></Card.Img>
    //         </Card>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default Users;
