import RegisterForm from "../../../components/RegisterForm";
import SideBar from "../../../components/SideBar";

export default function AddUser() {
  return (
    <div className="flex">
      <SideBar isAdmin={true} />
      <div className="w-4/5 flex justify-center">
        <RegisterForm hidden={true} />
      </div>
    </div>
  );
}
