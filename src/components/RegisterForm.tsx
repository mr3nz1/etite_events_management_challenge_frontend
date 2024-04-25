import Button from "./Button";
import Input from "./Input";

export default function RegisterForm() {
  return (
    <div className="flex">
      <div className="flex flex-col gap-5 py-20 w-full md:w-80">
        <h1 className="text-gray-900 font-bold text-3xl">Create New User</h1>

        <div className="flex flex-col gap-5">
          <Input placeholder="Full Names" onClick={() => {}} />
          <Input placeholder="Phone Number" onClick={() => {}} />
          <Input type="email" placeholder="Email" onClick={() => {}} />
          <Input type="email" placeholder="Password" onClick={() => {}} />
          <Input type="email" placeholder="Password Again" onClick={() => {}} />
          <div className="self-start px-4 flex items-center text-xs gap-1">
            <Input
              type="checkbox"
              config={{ id: "css", name: "fav_language", value: "CSS" }}
              onClick={() => {}}
            />
            <p>Is admin</p>
          </div>
          <div className="mt-2 flex w-full">
            <Button className="w-full">Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
