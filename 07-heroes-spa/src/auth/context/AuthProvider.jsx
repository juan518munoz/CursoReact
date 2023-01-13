import { useReducer } from "react";
import { types } from "../type/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const initialState = {
  logged: false,
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const handleLogin = (name = "") => {
    const action = {
      type: types.login,
      payload: {
        id: "ABC",
        name: name,
      },
    };
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...authState, handleLogin: handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
