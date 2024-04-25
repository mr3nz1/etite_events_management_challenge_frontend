import allEventsIcon from "../assets/icons/events.png";
import addEventIcon from "../assets/icons/new_event.png";
import optionsIcon from "../assets/icons/options.png";
import addUserIcon from "../assets/icons/add_user.png";
import manageUsersIcon from "../assets/icons/users.png";
import logoutIcon from "../assets/icons/logout.png";
import SideBarButton from "./SideBarButton";
import { Link } from "react-router-dom";

interface Props {
  isAdmin?: boolean;
}

export default function SideBar({ isAdmin }: Props) {
  return (
    <>
      <div className="flex flex-col gap-10 items-start h-screen md:w-72 p-6 md:p-10 border-r border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-75">
        <p className="flex md:hidden font-bold text-sm">M</p>
        <p className="hidden md:flex text-sm ">
          Welcome,{" "}
          <span className=" font-bold underline underline-offset-1">
            Murenzi
          </span>
        </p>
        <div className="flex flex-col gap-5">
          {isAdmin ? (
            <Link to="/admin/events/all">
              <SideBarButton>
                <img src={allEventsIcon} className="w-6 h-6" />
                <p className="hidden md:flex text-sm font-bold">All Events</p>
              </SideBarButton>
            </Link>
          ) : (
            <SideBarButton>
              <img src={allEventsIcon} className="w-6 h-6" />
              <p className="hidden md:flex text-sm font-bold">Booked Events</p>
            </SideBarButton>
          )}

          {isAdmin ? (
            <Link to="/admin/events/add">
              <SideBarButton>
                <img src={addEventIcon} className="w-6 h-6" />
                <p className="hidden md:flex text-sm font-bold">Create Event</p>
              </SideBarButton>
            </Link>
          ) : (
            // <Link to="/">
            <SideBarButton>
              <img src={addEventIcon} className="w-6 h-6" />
              <p className="hidden md:flex text-sm font-bold">
                Book More Events
              </p>
            </SideBarButton>
            // </Link>
          )}

          <SideBarButton>
            <img src={optionsIcon} className="w-6 h-6" />
            <p className="hidden md:flex text-sm font-bold">Options</p>
          </SideBarButton>

          {isAdmin && (
            <Link to="/admin/users/addUser">
              <SideBarButton>
                <img src={addUserIcon} className="w-6 h-6" />
                <p className="hidden md:flex text-sm font-bold">Add User</p>
              </SideBarButton>
            </Link>
          )}
          {isAdmin && (
            <Link to="/admin/users/">
              <SideBarButton>
                <img src={manageUsersIcon} className="w-6 h-6" />
                <p className="hidden md:flex text-sm font-bold">Manage Users</p>
              </SideBarButton>
            </Link>
          )}
        </div>
        <button className="mt-auto flex items-center gap-4">
          <img src={logoutIcon} className="w-6 h-6" />
          <div className="hidden md:flex flex-col gap-1 items-start">
            <span className="text-sm font-bold underline underline-offset-1">
              logout
            </span>
            {isAdmin && (
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
