import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

export default function LoginForm() {
  return (
    <div className="flex">
      <div className="w-full h-screen  flex justify-center items-center">
        <div className="flex flex-col gap-5 py-20 w-80">
          <h1 className="text-gray-900 font-bold text-3xl">Login</h1>

          <div className="flex flex-col gap-5">
            <Input placeholder="Email" onClick={() => {}} />
            <Input placeholder="Password" onClick={() => {}} />
            <Link to="/admin/events/all">
              <Button>Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
