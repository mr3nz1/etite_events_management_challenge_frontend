import { useContext, useEffect, useState } from "react";
import { UserContext } from "../ctx/UserContext";
import { useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { CircleLoader } from "react-spinners";

export default function ProtectRoutes({
  children,
}: {
  children: React.JSX.Element | React.JSX.Element[];
}) {
  const navigate = useNavigate();
  const {
    user: { name, email, admin },
    setUser,
  } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getUserInfo(token: string) {
      try {
        const url = process.env.API_URL;
        const res: AxiosResponse = await axios.get(url + "/users/getUserInfo", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { _id, name, email, admin } = res.data.data.user;
        setUser({ user: { _id, name, email, admin } });
        setIsLoading(false);
      } catch (err) {
        navigate("/users/login");
      }
    }

    if (name === "" || email === "") {
      const token = localStorage.getItem("userToken");

      if (token === null) {
        console.log(token);
        console.log("if no token");
        // setIsLoading(false);
        navigate("/users/login");
      } else {
        getUserInfo(token!);
      }
    } else {
      navigate("admin/events/all");
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="h-screen w-screen flex justify-center items-center">
          <CircleLoader size={100} />
        </div>
      ) : (
        [children]
      )}
    </>
  );
}
