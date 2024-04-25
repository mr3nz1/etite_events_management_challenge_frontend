import SideBar from "../../../components/SideBar";

export default function AttendeeList() {
  return (
    <>
      <div className="flex">
        <SideBar isAdmin={true} />
        <div className="px-4 md:w-full justify-center pt-20 overflow-y-scroll max-h-screen">
          <div className="flex justify-center">
            <div className="flex flex-col gap-5 min-h-0">
              <h1 className="text-gray-900 font-bold text-3xl">
                Attendee List
              </h1>

              <div className="flex flex-1 flex-col gap-5">
                <table className="hidden lg:block">
                  <tr>
                    <th className="border text-left px-6 py-2 text-gray-900 text-sm font-bold underline">
                      Date Booked
                    </th>
                    <th className="border text-left px-6 py-2 text-gray-900 text-sm font-bold underline">
                      Name
                    </th>
                    <th className="border text-left px-6 py-2 text-gray-900 text-sm font-bold underline">
                      Gender
                    </th>
                    <th className="border text-left px-6 py-2 text-gray-900 text-sm font-bold underline">
                      Email
                    </th>
                    <th className="border text-left px-6 py-2 text-gray-900 text-sm font-bold underline">
                      Phone
                    </th>
                    <th className="border text-left px-6 py-2 text-gray-900 text-sm font-bold underline">
                      Tickets
                    </th>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition-all duration-75">
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      20 / 04 / 2024
                    </td>

                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      Murenzi Paterne
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      Male
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      murenzi419@gmail.com
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      0723908534
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      12
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-all duration-75">
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      20 / 04 / 2024
                    </td>

                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      Murenzi Paterne
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      Male
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      murenzi419@gmail.com
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      0723908534
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      12
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition-all duration-75">
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      20 / 04 / 2024
                    </td>

                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      Murenzi Paterne
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      Male
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      murenzi419@gmail.com
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      0723908534
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      12
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-all duration-75">
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      20 / 04 / 2024
                    </td>

                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      Murenzi Paterne
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      Male
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      murenzi419@gmail.com
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      0723908534
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      12
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition-all duration-75">
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      20 / 04 / 2024
                    </td>

                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      Murenzi Paterne
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      Male
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      murenzi419@gmail.com
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      0723908534
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      12
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-all duration-75">
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      20 / 04 / 2024
                    </td>

                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      Murenzi Paterne
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      Male
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      murenzi419@gmail.com
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      0723908534
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      12
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition-all duration-75">
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      20 / 04 / 2024
                    </td>

                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      Murenzi Paterne
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      Male
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      murenzi419@gmail.com
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      0723908534
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      12
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-all duration-75">
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      20 / 04 / 2024
                    </td>

                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      Murenzi Paterne
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      Male
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      murenzi419@gmail.com
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      0723908534
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      12
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition-all duration-75">
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      20 / 04 / 2024
                    </td>

                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      Murenzi Paterne
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      Male
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      murenzi419@gmail.com
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      0723908534
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      12
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-all duration-75">
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      20 / 04 / 2024
                    </td>

                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      Murenzi Paterne
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      Male
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      murenzi419@gmail.com
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      0723908534
                    </td>
                    <td className="border text-left px-6 py-2 text-gray-900 text-sm ">
                      12
                    </td>
                  </tr>
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
                        Name: <span className="font-bold">Murenzi Paterne</span>
                      </p>
                      <p className="text-sm">
                        Gender: <span className="font-bold">Male</span>
                      </p>
                      <p className="text-sm">
                        Email:{" "}
                        <span className="font-bold">murenzi419@gmail.com</span>
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
                        Name: <span className="font-bold">Murenzi Paterne</span>
                      </p>
                      <p className="text-sm">
                        Gender: <span className="font-bold">Male</span>
                      </p>
                      <p className="text-sm">
                        Email:{" "}
                        <span className="font-bold">murenzi419@gmail.com</span>
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
                        Name: <span className="font-bold">Murenzi Paterne</span>
                      </p>
                      <p className="text-sm">
                        Gender: <span className="font-bold">Male</span>
                      </p>
                      <p className="text-sm">
                        Email:{" "}
                        <span className="font-bold">murenzi419@gmail.com</span>
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
                        Name: <span className="font-bold">Murenzi Paterne</span>
                      </p>
                      <p className="text-sm">
                        Gender: <span className="font-bold">Male</span>
                      </p>
                      <p className="text-sm">
                        Email:{" "}
                        <span className="font-bold">murenzi419@gmail.com</span>
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
                        Name: <span className="font-bold">Murenzi Paterne</span>
                      </p>
                      <p className="text-sm">
                        Gender: <span className="font-bold">Male</span>
                      </p>
                      <p className="text-sm">
                        Email:{" "}
                        <span className="font-bold">murenzi419@gmail.com</span>
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
                        Name: <span className="font-bold">Murenzi Paterne</span>
                      </p>
                      <p className="text-sm">
                        Gender: <span className="font-bold">Male</span>
                      </p>
                      <p className="text-sm">
                        Email:{" "}
                        <span className="font-bold">murenzi419@gmail.com</span>
                      </p>
                      <p className="text-sm">
                        Phone: <span className="font-bold">0782750607</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// work on this to solve it
