import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>LoginPage</h1>

      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({
            id: 123,
            name: "Juan Martin Munoz",
            email: "juan@munoz.com",
          })
        }
      >
        Set user
      </button>
    </>
  );
};
