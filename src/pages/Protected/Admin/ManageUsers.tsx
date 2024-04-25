import SideBar from "../../../components/SideBar";

export default function ManageUsers() {
  return (
    <>
      <div className="flex">
        <SideBar isAdmin={true} />
        <div className="w-4/5 flex justify-center mt-20 overflow-y-scroll max-h-screen">
          <div className="flex flex-col gap-5">
            <h1 className="text-gray-900 font-bold text-3xl">Manage Users</h1>

            <div className="flex flex-col gap-5">
              <table>
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
                    Actions
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
                  <td className="border text-left px-6 py-2 text-gray-900 text-sm flex item-center gap-4">
                    <button className="text-blue-500 text-sm font-bold hover:underline transition-all duration-75">
                      Edit
                    </button>{" "}
                    <button className="text-red-500 text-sm font-bold hover:underline transition-all duration-75">
                      Delete
                    </button>
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
                  <td className="border text-left px-6 py-2 text-gray-900 text-sm flex item-center gap-4">
                    <button className="text-blue-500 text-sm font-bold hover:underline transition-all duration-75">
                      Edit
                    </button>{" "}
                    <button className="text-red-500 text-sm font-bold hover:underline transition-all duration-75">
                      Delete
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
