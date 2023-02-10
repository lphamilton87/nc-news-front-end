import { useEffect, useState } from "react";
import { getUsers } from "../utils/api";
import { Card } from "react-bootstrap";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
    });
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <div className="user-div">
            <Card border="secondary" key={user.name}>
              <Card.Title>
                <label className="card-label">Name: </label>
                {user.name}
              </Card.Title>
              <Card.Title>
                <label className="card-label">Username: </label>
                {user.username}
              </Card.Title>
              <Card.Img
                src={user.avatar_url}
                alt={user.title}
                className="userImg"
              ></Card.Img>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
