import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

export default function RegisterForm({ hidden }: { hidden?: boolean }) {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<{ [key: string]: string }>({
    name: "",
    email: "",
    password: "",
    passwordAgain: "",
    isAdmin: "",
  });

  function handleChange(name: string, value: string) {
    setUserInfo((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const url = process.env.API_URL + "/users/register";

      const { email, name, password } = userInfo;

      await axios.post(url, {
        email,
        name,
        password,
      });

      toast("Success", {
        hideProgressBar: true,
      });

      navigate("/users/login");
    } catch (err) {
      interface CustomError {
        response: AxiosResponse | { data: { message: string } };
      }
      toast((err as CustomError).response?.data.message, {
        hideProgressBar: true,
      });
    }
  }

  return (
    <div className="flex">
      <div className="flex flex-col gap-5 py-20 w-full md:w-80">
        <h1 className="text-gray-900 font-bold text-3xl">Create New User</h1>

        <form
          onSubmit={handleSubmit}
          className={`flex flex-col gap-5 ${
            hidden && "opacity-50 pointer-events-none"
          }`}
        >
          <Input
            placeholder="Full Names"
            config={{ name: "name", required: true, minLength: 3 }}
            onChange={handleChange}
          />
          {/* <Input placeholder="Phone Number" onChange={() => {}} /> */}
          <Input
            type="email"
            placeholder="Email"
            config={{ name: "email" }}
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Password"
            config={{ name: "password" }}
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Password Again"
            config={{ name: "passwordAgain" }}
            onChange={handleChange}
          />
          <div className="self-start px-4 flex items-center text-xs gap-1">
            <Input
              type="checkbox"
              config={{ id: "css", name: "fav_language", value: "CSS" }}
              onChange={(e) => {
                console.log(e);
              }}
            />
            <p>Is admin</p>
          </div>
          <div className="flex items-center justify-between">
            <Button className="">Register</Button>
            <p className="text-xs">
              Have an account?{" "}
              <Link
                to="/users/Login"
                className="color:text-blue-500 underline hover:bold"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
