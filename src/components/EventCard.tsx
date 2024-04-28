import { Link } from "react-router-dom";
import Button from "./Button";
import CancelIcon from "../assets/icons/cancel.png";
import EditIcon from "../assets/icons/edit.png";
import attendeesIcon from "../assets/icons/attendees.png";
import { useContext, useState } from "react";
import { UserContext } from "../ctx/UserContext";
import { toast } from "react-toastify";
import axios from "axios";
import Input from "./Input";

interface Props {
  _id: string;
  title: string;
  location: string;
  description: string;
  date: string;
  // numberOfTickets: number;
  cancelled: boolean;
  remainingTickets: number;
  users: string[];
  loadEvents: () => void;
}

export default function EventCard({
  _id,
  title,
  description,
  date,
  cancelled,
  remainingTickets,
  location,
  users,
  loadEvents,
}: Props) {
  const {
    user: { _id: userId, admin },
  } = useContext(UserContext);

  const time = new Date(date);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  async function handleDeleteRequest() {
    try {
      const url = process.env.API_URL + `/events/${_id}/delete`;
      const userToken = localStorage.getItem("userToken");
      const res = await axios.delete(url, {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });
      toast.dismiss();
      toast.success("Deleted event with Id: " + _id, {
        hideProgressBar: true,
      });
      loadEvents();
    } catch (err) {
      console.log(err);
      toast.error("Error deleting event with Id: " + _id, {
        hideProgressBar: true,
      });
    }
  }

  function DeleteMsg({ closeToast }) {
    return (
      <div className="flex flex-col gap-2">
        <p className="text-xs">
          Want to delete event with id: <span className="font-bold">{_id}</span>
        </p>
        <div className="flex gap-4">
          <Button className="text-xs" onClick={closeToast}>
            Cancel
          </Button>
          <Button
            isDark={true}
            className="text-xs"
            onClick={handleDeleteRequest}
          >
            Delete
          </Button>
        </div>
      </div>
    );
  }

  function handleDelete() {
    try {
      toast(<DeleteMsg />, {
        hideProgressBar: true,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function handleBookRequest(numberOfTickets: number) {
    try {
      const url = process.env.API_URL + `/bookings/${_id}/create`;
      const userToken = localStorage.getItem("userToken");
      const res = await axios.post(
        url,
        { numberOfTickets: numberOfTickets },
        {
          headers: {
            Authorization: "Bearer " + userToken,
          },
        }
      );
      toast.dismiss();
      toast.success("Event booked", {
        hideProgressBar: true,
      });
      loadEvents();
    } catch (err) {
      console.log(err);
      toast.error("Booking failed. Try again later.", {
        hideProgressBar: true,
      });
    }
  }

  function BookMsg({
    closeToast,
    remainingTickets,
  }: {
    closeToast: any;
    remainingTickets: number;
  }) {
    const [numberOfTickets, setNumberOfTickets] = useState(0);

    function handleNumberOfTicketsChange(name: string, value: string) {
      setNumberOfTickets(value);
    }

    console.log(remainingTickets);

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (numberOfTickets > 0) {
            handleBookRequest(numberOfTickets);
          }
        }}
        className={`${
          remainingTickets < 1 &&
          "opacity-50 cursor-not-allowed pointer-events-none"
        } flex flex-col gap-2`}
      >
        <p className="text-xs">Want to book for how many people?</p>
        <Input
          type="number"
          placeholder="Number of tickets"
          config={{
            name: "numberOfTickets",
            value: numberOfTickets,
            max: remainingTickets,
            required: true,
          }}
          onChange={handleNumberOfTicketsChange}
        />
        <div className="flex gap-4">
          <Button
            className="text-xs"
            onClick={closeToast}
            config={{ type: "button" }}
          >
            Cancel
          </Button>
          <Button
            isDark={true}
            className="text-xs"
            config={{ type: "submit" }}
            onClick={() => {}}
          >
            Book
          </Button>
        </div>
      </form>
    );
  }

  function handleBook() {
    try {
      toast(<BookMsg remainingTickets={remainingTickets} />, {
        hideProgressBar: true,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div
      className={`flex flex-col md:flex-row justify-between items-start md:items-stretch bg-gray-50 ${
        !cancelled && "hover:bg-gray-100 transition-all duration-75"
      } lg:w-[50em] mx-4 sm:mx-8 md:mx-0 p-4 md:p-0 rounded-xl gap-4 relative`}
    >
      <div
        className={`${
          cancelled && "opacity-50 pointer-events-none"
        } flex flex-row-reverse w-full justify-between md:flex-col md:justify-center items-center md:w-1/4 md:bg-gray-200 p-8 rounded-l-xl`}
      >
        <p className="text-gray-900 font-bold">
          {time.getDate() +
            "/" +
            monthNames[time.getMonth()] +
            "/" +
            time.getFullYear()}
        </p>
        <p className="text-gray-900 font-bold text-2xl">
          {time.getHours()}:{time.getMinutes()}
        </p>
      </div>

      <div
        className={`${
          cancelled && "opacity-50"
        } flex flex-col gap-2 md:w-1/2 justify-start p-4`}
      >
        <h1 className="font-bold text-gray-900 text-wrap text-xl">{title}</h1>
        <div className="flex items-center gap-1">
          <div className="h-4 w-0.5 bg-blue-500 hover:bg-blue-500"></div>
          <p className="text-gray-900 text-wrap text-xs">{location}</p>
        </div>

        <p className="text-xs text-gray-700">{description}</p>
      </div>

      <div
        className={`${
          cancelled ||
          (admin && "opacity-50 cursor-not-allowed pointer-events-none")
        } flex flex-row-reverse md:flex-col gap-1 md:w-1/4 items-center justify-between md:justify-center md:self-center w-full`}
      >
        <Button
          onClick={handleBook}
          className={`${
            users.includes(userId)
              ? "cursor-not-allowed pointer-events-none"
              : ""
          }`}
        >
          {users.includes(userId) ? "Booked" : "Book Now"}
        </Button>
      </div>

      <p className={`text-gray-700 text-xs absolute top-0 left-0 pb-2 pr-3`}>
        <span className="font-bold bg-red-500 rounded text-white px-1 py-0.5">
          {cancelled ? <>Event Cancelled</> : <>{remainingTickets} left</>}
        </span>
      </p>

      {admin && (
        <div className="  flex gap-1 hover:bg-gray-200 items-center absolute top-0 right-0 -mt-4 p-1 rounded-md hover:scale-105 transition-all duration-75 hover:z-10">
          <button
            className="cursor-pointer"
            onClick={() => {
              handleDelete();
            }}
          >
            <img
              className="w-6 h-6 hover:scale-105 transition-all duration-75"
              src={CancelIcon}
            />
          </button>
          <Link to={`/admin/events/${_id}/update`}>
            <img
              className="w-6 h-6 hover:scale-105 transition-all duration-75"
              src={EditIcon}
            />
          </Link>
          <Link to={`/admin/events/${_id}/attendence`}>
            <img
              className="w-6 h-6 hover:scale-105 transition-all duration-75"
              src={attendeesIcon}
            />
          </Link>
        </div>
      )}
    </div>
  );
}
