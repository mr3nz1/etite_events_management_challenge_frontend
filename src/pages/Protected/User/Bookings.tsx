import { useContext, useEffect, useState } from "react";
import SideBar from "../../../components/SideBar";
import axios, { AxiosResponse } from "axios";
import { UserContext } from "../../../ctx/UserContext";
import { useParams } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import { formatDate } from "../../../utils/util";
import BookingRow from "../../../components/BookingRow";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { userId } = useParams();

  async function loadBookings() {
    try {
      setIsLoading(true);
      const url = process.env.API_URL;
      const userToken = localStorage.getItem("userToken");
      const res: AxiosResponse = await axios.get(
        `${url}/bookings/${userId}/get`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      setBookings(res.data.data.bookings);
      setError("");
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setError((err as AxiosError).message);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadBookings();
  }, []);

  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="w-4/5 flex justify-center overflow-y-auto max-h-screen ">
          <div className="flex flex-col gap-5 h-full py-20">
            <h1 className="text-gray-900 font-bold text-3xl">Booked Events </h1>
            {error !== "" ? (
              <div className="flex flex-col gap-5 ">
                <p className="text-xs text-center justify-center">
                  Error loading bookings
                </p>
              </div>
            ) : (
              <>
                {isloading ? (
                  <div className="h-full w-full justify-center itemce-center">
                    <CircleLoader size={50} />
                  </div>
                ) : (
                  <div className="flex flex-1 flex-col gap-5">
                    <table className="hidden lg:block">
                      <thead>
                        <tr>
                          <th className="border text-left px-6 py-2 text-gray-900 text-sm font-bold underline">
                            Date Booked
                          </th>

                          <th className="border text-left px-6 py-2 text-gray-900 text-sm font-bold underline">
                            Event
                          </th>
                          <th className="border text-left px-6 py-2 text-gray-900 text-sm font-bold underline">
                            Location
                          </th>
                          <th className="border text-left px-6 py-2 text-gray-900 text-sm font-bold underline">
                            Event Date
                          </th>
                          <th className="border text-left px-6 py-2 text-gray-900 text-sm font-bold underline">
                            Tickets
                          </th>
                          <th className="border text-left px-6 py-2 text-gray-900 text-sm font-bold underline">
                            Options
                          </th>
                        </tr>
                      </thead>

                      <tbody className="[&>*:nth-child(odd)]:bg-gray-50 ">
                        {bookings.map((booking) => {
                          console.log(booking)
                          return (
                            <BookingRow
                              key={booking._id}
                              booking={booking}
                              loadBookings={loadBookings}
                            />
                          );
                        })}
                      </tbody>
                    </table>

                    <div className="flex flex-col md:flex-row flex-wrap gap-4 lg:hidden w-full">
                      <div className="flex flex-col gap-4 bg-gray-100 p-4 w-full rounded-lg">
                        <div className="flex flex-row justify-between">
                          <p className="text-sm">20/04/2024</p>
                          <p className="text-sm">
                            Count: <span className="font-bold">12</span>
                          </p>
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="text-sm">
                            Name:{" "}
                            <span className="font-bold">Murenzi Paterne</span>
                          </p>
                          <p className="text-sm">
                            Gender: <span className="font-bold">Male</span>
                          </p>
                          <p className="text-sm">
                            Email:{" "}
                            <span className="font-bold">
                              murenzi419@gmail.com
                            </span>
                          </p>
                          <p className="text-sm">
                            Phone: <span className="font-bold">0782750607</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 bg-gray-100 p-4 w-full rounded-lg">
                        <div className="flex flex-row justify-between">
                          <p className="text-sm">20/04/2024</p>
                          <p className="text-sm">
                            Count: <span className="font-bold">12</span>
                          </p>
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="text-sm">
                            Name:{" "}
                            <span className="font-bold">Murenzi Paterne</span>
                          </p>
                          <p className="text-sm">
                            Gender: <span className="font-bold">Male</span>
                          </p>
                          <p className="text-sm">
                            Email:{" "}
                            <span className="font-bold">
                              murenzi419@gmail.com
                            </span>
                          </p>
                          <p className="text-sm">
                            Phone: <span className="font-bold">0782750607</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 bg-gray-100 p-4 w-full rounded-lg">
                        <div className="flex flex-row justify-between">
                          <p className="text-sm">20/04/2024</p>
                          <p className="text-sm">
                            Count: <span className="font-bold">12</span>
                          </p>
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="text-sm">
                            Name:{" "}
                            <span className="font-bold">Murenzi Paterne</span>
                          </p>
                          <p className="text-sm">
                            Gender: <span className="font-bold">Male</span>
                          </p>
                          <p className="text-sm">
                            Email:{" "}
                            <span className="font-bold">
                              murenzi419@gmail.com
                            </span>
                          </p>
                          <p className="text-sm">
                            Phone: <span className="font-bold">0782750607</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 bg-gray-100 p-4 w-full rounded-lg">
                        <div className="flex flex-row justify-between">
                          <p className="text-sm">20/04/2024</p>
                          <p className="text-sm">
                            Count: <span className="font-bold">12</span>
                          </p>
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="text-sm">
                            Name:{" "}
                            <span className="font-bold">Murenzi Paterne</span>
                          </p>
                          <p className="text-sm">
                            Gender: <span className="font-bold">Male</span>
                          </p>
                          <p className="text-sm">
                            Email:{" "}
                            <span className="font-bold">
                              murenzi419@gmail.com
                            </span>
                          </p>
                          <p className="text-sm">
                            Phone: <span className="font-bold">0782750607</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 bg-gray-100 p-4 w-full rounded-lg">
                        <div className="flex flex-row justify-between">
                          <p className="text-sm">20/04/2024</p>
                          <p className="text-sm">
                            Count: <span className="font-bold">12</span>
                          </p>
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="text-sm">
                            Name:{" "}
                            <span className="font-bold">Murenzi Paterne</span>
                          </p>
                          <p className="text-sm">
                            Gender: <span className="font-bold">Male</span>
                          </p>
                          <p className="text-sm">
                            Email:{" "}
                            <span className="font-bold">
                              murenzi419@gmail.com
                            </span>
                          </p>
                          <p className="text-sm">
                            Phone: <span className="font-bold">0782750607</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 bg-gray-100 p-4 w-full rounded-lg">
                        <div className="flex flex-row justify-between">
                          <p className="text-sm">20/04/2024</p>
                          <p className="text-sm">
                            Count: <span className="font-bold">12</span>
                          </p>
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="text-sm">
                            Name:{" "}
                            <span className="font-bold">Murenzi Paterne</span>
                          </p>
                          <p className="text-sm">
                            Gender: <span className="font-bold">Male</span>
                          </p>
                          <p className="text-sm">
                            Email:{" "}
                            <span className="font-bold">
                              murenzi419@gmail.com
                            </span>
                          </p>
                          <p className="text-sm">
                            Phone: <span className="font-bold">0782750607</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// work on this to solve it
