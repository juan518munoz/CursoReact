import { useState } from "react";
import { UserContext } from "./UserContext";

/*const user = {
    id: 123,
    name: 'Juan Martin Munoz',
    email: 'juan@munoz.com'
}*/

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const loginUser = () => {
    setUser({
      id: 123,
      name: "Juan Martin Munoz",
      email: "juan@munoz.com",
    })
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
