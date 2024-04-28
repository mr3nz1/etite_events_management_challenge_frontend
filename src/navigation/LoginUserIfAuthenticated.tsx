import { useNavigate } from "react-router-dom";
import { UserContext } from "../ctx/UserContext";
import React, { useContext, useEffect } from "react";

interface Props {
  children: React.JSX.Element;
}

export default function LoginUserIfAuthenticated({ children }: Props) {
  const navigate = useNavigate();
  const {
    user: { name, email },
  } = useContext(UserContext);

  useEffect(() => {
    if (name !== "" || email !== "") navigate("/admin/events/all");
  }, []);

  return <>{children}</>;
}



// refactor loginUserIfAuthenticated and ProtectedRoute. Put both in the same file