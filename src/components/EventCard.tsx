import { Link } from "react-router-dom";
import Button from "./Button";
import CancelIcon from "../assets/icons/cancel.png";
import EditIcon from "../assets/icons/edit.png";
import attendeesIcon from "../assets/icons/attendees.png";

export default function EventCard() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch bg-gray-50 md:w-[50em] mx-4 sm:mx-8 md:mx-0 p-4 md:p-2 rounded-xl gap-4 relative">
      <div className="flex flex-row-reverse w-full justify-between md:flex-col md:justify-center items-center md:w-1/4 md:bg-gray-200 p-4 rounded-xl">
        <p className="text-gray-900 font-bold">20 / oct / 2024</p>
        <p className="text-gray-900 font-bold text-2xl">15:30</p>
      </div>

      <div className="flex flex-col gap-2 md:w-1/2 justify-start">
        <div className="font-bold text-gray-900 text-wrap">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <div className="text-xs text-gray-700">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </div>
      </div>

      <div className="flex flex-row-reverse md:flex-col gap-1 md:w-1/4 items-center justify-between md:justify-center md:self-center w-full">
        <Link to="/client/users/login">
          <Button>Book Now</Button>
        </Link>
        <p className="text-gray-700 text-xs">Tickets available</p>
      </div>

      <div className="flex gap-1 hover:bg-gray-200 items-center absolute top-0 right-0 -mt-4 p-1 rounded-md hover:scale-105 transition-all duration-75 hover:z-10">
        <img
          className="w-6 h-6 hover:scale-105 transition-all duration-75"
          src={CancelIcon}
        />
        <img
          className="w-6 h-6 hover:scale-105 transition-all duration-75"
          src={EditIcon}
        />
        <Link to="/admin/events/attendence">
          <img
            className="w-6 h-6 hover:scale-105 transition-all duration-75"
            src={attendeesIcon}
          />
        </Link>
      </div>
    </div>
  );
}
