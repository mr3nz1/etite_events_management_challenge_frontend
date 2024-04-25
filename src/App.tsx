import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import CreateEvent from "./pages/Protected/Admin/CreateEvent";
import Events from "./pages/UnProtected/Events";
import UpdateEvent from "./pages/Protected/Admin/UpdateEvent";
import AllEvents from "./pages/Protected/Admin/AllEvents";
import AttendeeList from "./pages/Protected/Admin/AttendeeList";
import ManageUsers from "./pages/Protected/Admin/ManageUsers";
import AddUser from "./pages/Protected/Admin/AddUser";

export default function App() {
  const router = createBrowserRouter([
    // User Routes
    // Auth Routes
    {
      path: "/client/events",
      element: <Events />,
    },
    {
      path: "/client/users/login",
      element: <Login />,
    },
    {
      path: "/client/users/register",
      element: <Register />,
    },
    // Admin Routes
    {
      path: "/admin/events/all",
      element: <AllEvents />,
    },
    {
      path: "/admin/events/add",
      element: <CreateEvent />,
    },
    {
      path: "/admin/events/update",
      element: <UpdateEvent />,
    },
    {
      path: "/admin/events/attendence",
      element: <AttendeeList />,
    },
    {
      path: "/admin/users/",
      element: <ManageUsers />,
    },
    {
      path: "/admin/users/addUser",
      element: <AddUser />,
    },
  ]);

  return <RouterProvider router={router} />;
}
