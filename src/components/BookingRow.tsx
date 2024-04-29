import { toast } from "react-toastify";
import { formatDate } from "../utils/util";
import Button from "./Button";
import axios from "axios";
import Input from "./Input";
import { useState } from "react";

interface Props {
  booking: {
    _id: string;
    user: string;
    event: {
      _id: string;
      title: string;
      location: string;
      date: string;
      numberOfTickets: number;
      boughtTickets: number;
    };
    numberOfTickets: number;
    boughtTickets: number;
    createdAt: string;
    cancelled: boolean;
  };
  loadBookings: () => void;
}

export default function BookingRow({ booking, loadBookings }: Props) {
  async function handleCancelRequest() {
    try {
      const url = process.env.API_URL + `/bookings/${booking._id}/update`;

      console.log(url)

      const userToken = localStorage.getItem("userToken");
      await axios.patch(
        url,
        {
          cancelled: true,
        },
        {
          headers: {
            Authorization: "Bearer " + userToken,
          },
        }
      );
      toast.dismiss();
      toast.success("Cancelled booking with Id: " + booking._id, {
        hideProgressBar: true,
      });
      loadBookings();
    } catch (err) {
      console.log(err);
      toast.dismiss();
      toast.error("Error cancelling booking with Id: " + booking._id, {
        hideProgressBar: true,
      });
    }
  }

  function CancelMsg({ closeToast }: { closeToast?: () => void }) {
    return (
      <div className="flex flex-col gap-2">
        <p className="text-xs">
          Want to cancel booking of id:{" "}
          <span className="font-bold">{booking._id}</span>
        </p>
        <div className="flex gap-4">
          <Button className="text-xs" onClick={closeToast}>
            Cancel
          </Button>
          <Button
            isDark={true}
            className="text-xs"
            onClick={handleCancelRequest}
          >
            Continue
          </Button>
        </div>
      </div>
    );
  }

  async function handleCancel() {
    try {
      toast(<CancelMsg />, {
        hideProgressBar: true,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function moreTicketsRequest(numberOfTickets: number) {
    try {
      const url = process.env.API_URL + `/bookings/${booking._id}/update`;

      const userToken = localStorage.getItem("userToken");
      await axios.patch(
        url,
        {
          numberOfTickets,
        },
        {
          headers: {
            Authorization: "Bearer " + userToken,
          },
        }
      );
      toast.dismiss();
      toast.success(
        "Updated number of tickets of booking with Id: " + booking._id,
        {
          hideProgressBar: true,
        }
      );
      loadBookings();
    } catch (err) {
      console.log(err);
      toast.error("Error updating booking with Id: " + booking._id, {
        hideProgressBar: true,
      });
    }
  }

  function MoreTicketsMsg({
    closeToast,
    remainingTickets,
  }: {
    closeToast?: () => void;
    remainingTickets: number;
  }) {
    const [numberOfTickets, setNumberOfTickets] = useState(0);

    function handleNumberOfTicketsChange(name: string, value: string) {
      name;
      setNumberOfTickets(parseInt(value));
    }

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (numberOfTickets > 0) {
            moreTicketsRequest(numberOfTickets);
          }
        }}
        className={`${
          remainingTickets < 1 &&
          "opacity-50 cursor-not-allowed pointer-events-none"
        } flex flex-col gap-2`}
      >
        <p className="text-xs">Want to book for more people?</p>
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

  async function handleMoreTickets() {
    try {
      toast(
        <MoreTicketsMsg
          remainingTickets={
            booking.event.numberOfTickets - booking.event.boughtTickets
          }
        />,
        {
          hideProgressBar: true,
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <tr
      className={`${
        booking.cancelled && "opacity-50"
      } hover:bg-gray-100 transition-all duration-75`}
    >
      <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
        {formatDate(booking.createdAt)}
      </td>

      <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
        {booking.event.title}
      </td>
      <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
        {booking.event.location}
      </td>
      <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
        {booking.event.date}
      </td>
      <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
        {booking.numberOfTickets}
      </td>
      <td className="border text-left px-6 py-2 text-gray-900 text-sm flex items-center gap-2">
        <button
          onClick={handleMoreTickets}
          className={`${
            booking.cancelled && "cursor-not-allowed pointer-events-none"
          } text-blue-500 hover:underline transition-all duration-75`}
        >
          More Tickets
        </button>
        <button
          onClick={handleCancel}
          className={` *:
          ${booking.cancelled && "cursor-not-allowed pointer-events-none"}
          text-red-500 hover:underline transition-all duration-75`}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
}
