import { createContext, useState } from "react";
import { useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const dbUser = localStorage.getItem("user");
    return dbUser
      ? JSON.parse(dbUser)
      : {
          username: "cooljmessy",
          name: "Peter Messy",
          avatar_url:
          'https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953' ,
        };
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(loggedInUser));
  }, [loggedInUser]);

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
