import { CircleLoader } from "react-spinners";
import SideBar from "../../../components/SideBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios, { AxiosError, AxiosResponse } from "axios";

export default function AttendeeList() {
  const [users, setUsers] = useState<{ name: ""; email: "" }[] | []>([]);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { eventId } = useParams();

  async function loadUsers() {
    try {
      setIsLoading(true);
      const url = process.env.API_URL;
      const userToken = localStorage.getItem("userToken");
      const res: AxiosResponse = await axios.get(
        `${url}/events/${eventId}/get`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      setError("");
      setIsLoading(false);
      setUsers(res.data.data.event.users);
    } catch (err) {
      console.log(err);
      setError((err as AxiosError).message);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="w-4/5 flex justify-center overflow-y-auto max-h-screen ">
          <div className="flex flex-col gap-5 h-full py-20">
            <h1 className="text-gray-900 font-bold text-3xl">
              People who bought tickets of the
            </h1>
            {error !== "" ? (
              <div className="flex flex-col gap-5 ">
                <p className="text-xs text-center justify-center">
                  Error loading users
                </p>
              </div>
            ) : (
              <>
                {isloading ? (
                  <div className="h-full w-full justify-center itemce-center">
                    <CircleLoader size={50} />
                  </div>
                ) : (
                  <div className="flex flex-1 flex-col gap-5 items-center">
                    <table className="hidden lg:block">
                      <thead>
                        <tr>
                          <th className="border text-left px-6 py-2 text-gray-900 text-sm font-bold underline">
                            Name
                          </th>

                          <th className="border text-left px-6 py-2 text-gray-900 text-sm font-bold underline">
                            Email
                          </th>
                          {/* <th className="border text-left px-6 py-2 text-gray-900 text-sm font-bold underline">
                            Tickets
                          </th> */}
                          {/* <th className="border text-left px-6 py-2 text-gray-900 text-sm font-bold underline">
                            Event Date
                          </th>
                          <th className="border text-left px-6 py-2 text-gray-900 text-sm font-bold underline">
                            Tickets
                          </th>
                          <th className="border text-left px-6 py-2 text-gray-900 text-sm font-bold underline">
                            Options
                          </th> */}
                        </tr>
                      </thead>

                      <tbody className="[&>*:nth-child(odd)]:bg-gray-50 ">
                        {users.map((user) => {
                          return (
                            <tr
                              className={`hover:bg-gray-100 transition-all duration-75`}
                            >
                              <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                                {user.name}
                              </td>

                              <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                                {user.email}
                              </td>
                              {/* <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                                Tickets
                              </td> */}
                            </tr>
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
