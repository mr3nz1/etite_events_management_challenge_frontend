import { createContext } from "react";
// import { UserInfoType, UserState } from "../../utils/types";
import React, { useReducer } from "react";
import { UserActionType, UserInfoType, UserState } from "../utils/types";
import { userInfo } from "os";
// import userReducer from "./userReducer";

function userReducer(state: UserState, action: UserActionType): UserState {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: { ...action.payload.user } };
    case "DELETE_USER":
      return state;
    default:
      return state;
  }
}

export const UserContext = createContext<UserState>({
  user: {
    _id: "",
    name: "",
    email: "",
    admin: false,
  },
  setUser: () => {},
  removeUser: () => {},
});

const initialState: UserState = {
  user: {
    _id: "",
    name: "",
    email: "",
    admin: false,
  },
  setUser: () => {},
  removeUser: () => {},
};

export default function UserProvider({
  children,
}: {
  children: React.JSX.Element | React.JSX.Element[];
}) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  async function setUser(userInfo: UserInfoType) {
    console.log(userInfo)
    return dispatch({ type: "SET_USER", payload: userInfo });
  }

  async function deleteUser() {}

  const value = {
    ...state,
    setUser,
    deleteUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
