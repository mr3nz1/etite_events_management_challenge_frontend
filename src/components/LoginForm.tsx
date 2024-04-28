import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { useContext, useState } from "react";
import { UserContext } from "../ctx/UserContext";
import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

export default function LoginForm() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<{ [key: string]: string }>({
    email: "",
    password: "",
  });
  const { user, setUser } = useContext(UserContext);

  function handleChange(name: string, value: string) {
    setUserInfo((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();

      const url = process.env.API_URL;

      const {
        data: {
          data: { token },
        },
      }: AxiosResponse = await axios.post(url + "/users/login", userInfo);

      localStorage.setItem("userToken", token);

      const res: AxiosResponse = await axios.get(url + "/users/getUserInfo", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { _id, name, email, admin } = res.data.data.user;
      setUser({ user: { _id, name, email, admin } });

      toast.success("Success", {
        hideProgressBar: true,
      });

      navigate("/events/all");
    } catch (err) {
      toast.error((err as AxiosError).response?.data.message, {
        hideProgressBar: true,
      });
    }
  }

  return (
    <div className="flex">
      <div className="w-full h-screen  flex justify-center items-center">
        <div className="flex flex-col gap-5 py-20 w-80">
          <h1 className="text-gray-900 font-bold text-3xl">Login</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <Input
              type="email"
              config={{ name: "email", required: true }}
              placeholder="Email"
              onChange={handleChange}
            />
            <Input
              type="password"
              config={{ name: "password", required: true }}
              placeholder="Password"
              onChange={handleChange}
            />
            <div className="flex items-center justify-between">
              <Button>Login</Button>

              <p className="text-xs">
                Don't have an account?{" "}
                <Link
                  to="/users/register"
                  className="color:text-blue-500 underline hover:bold"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
