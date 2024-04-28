import allEventsIcon from "../assets/icons/events.png";
import addEventIcon from "../assets/icons/new_event.png";
import optionsIcon from "../assets/icons/options.png";
import addUserIcon from "../assets/icons/add_user.png";
import manageUsersIcon from "../assets/icons/users.png";
import logoutIcon from "../assets/icons/logout.png";
import bookingsIcon from "../assets/icons/bookings.png";
import SideBarButton from "./SideBarButton";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../ctx/UserContext";
import { toast } from "react-toastify";
import Button from "./Button";

export default function SideBar() {
  const navigate = useNavigate();
  const {
    user: { _id, admin, name },
    setUser,
  } = useContext(UserContext);

  function LogoutMsg({ closeToast }) {
    return (
      <div className="flex flex-col gap-2">
        <p className="text-xs">Are you sure you want to logout</p>
        <div className="flex gap-4">
          <Button className="text-xs" onClick={closeToast}>
            Cancel
          </Button>
          <Button
            isDark={true}
            className="text-xs"
            onClick={() => {
              setUser({ user: { name: "", email: "", admin: false } });
              localStorage.removeItem("userToken");
              toast.dismiss();
              toast.info("logged out", {
                hideProgressBar: true,
              });
              navigate("/users/login", {
                hideProgressBar: true,
              });
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    );
  }

  function handleLogout() {
    toast(<LogoutMsg />, {
      hideProgressBar: true,
    });

    console.log(_id);
  }

  return (
    <>
      <div className="flex flex-col gap-10 items-start h-screen md:w-72 p-6 md:p-10 border-r border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-75">
        <p className="flex md:hidden font-bold text-sm">M</p>
        <p className="hidden md:flex text-sm gap-1">
          Welcome,{"  "}
          <span className=" font-bold underline underline-offset-1">
            {String(name).split(" ")[0]}
          </span>
        </p>
        <div className="flex flex-col gap-5">
          <Link to="/events/all">
            <SideBarButton>
              <img src={allEventsIcon} className="w-6 h-6" />
              <p className="hidden md:flex text-sm font-bold">Events</p>
            </SideBarButton>
          </Link>

          {!admin && (
            <Link to={_id && `/${_id}/bookings`}>
              <SideBarButton>
                <img src={bookingsIcon} className="w-8 h-8" />
                <p className="hidden md:flex text-sm font-bold">
                  Booked Events
                </p>
              </SideBarButton>
            </Link>
          )}

          {admin && (
            <Link to="/admin/events/add">
              <SideBarButton>
                <img src={addEventIcon} className="w-6 h-6" />
                <p className="hidden md:flex text-sm font-bold">Create Event</p>
              </SideBarButton>
            </Link>
          )}
          {/* 
          {!admin && (
            <SideBarButton>
              <img src={addEventIcon} className="w-6 h-6" />
              <p className="hidden md:flex text-sm font-bold">
                Book More Events
              </p>
            </SideBarButton>
          )} */}

          <SideBarButton>
            <img src={optionsIcon} className="w-6 h-6" />
            <p className="hidden md:flex text-sm font-bold cursor-not-allowed">
              Options
            </p>
          </SideBarButton>

          {admin && (
            <Link to="/admin/users/addUser">
              <SideBarButton>
                <img src={addUserIcon} className="w-6 h-6" />
                <p className="hidden md:flex text-sm font-bold">Add User</p>
              </SideBarButton>
            </Link>
          )}

          {admin && (
            <Link to="/admin/users/">
              <SideBarButton>
                <img src={manageUsersIcon} className="w-6 h-6" />
                <p className="hidden md:flex text-sm font-bold">Manage Users</p>
              </SideBarButton>
            </Link>
          )}
        </div>

        <button
          className="mt-auto flex items-center gap-4"
          onClick={handleLogout}
        >
          <img src={logoutIcon} className="w-6 h-6" />
          <div className="hidden md:flex flex-col gap-1 items-start">
            <span className="text-sm font-bold underline underline-offset-1">
              logout
            </span>
            {admin && (
              <span className="text-[0.6rem] font-bold text-red-500">
                ADMIN
              </span>
            )}
          </div>
        </button>
      </div>
    </>
  );
}
