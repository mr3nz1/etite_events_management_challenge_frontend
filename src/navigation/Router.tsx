import {
  Link,
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import AddUser from "../pages/Protected/Admin/AddUser";
import AllEvents from "../pages/Protected/Admin/AllEvents";
import AttendeeList from "../pages/Protected/Admin/AttendeeList";
import CreateEvent from "../pages/Protected/Admin/CreateEvent";
import ManageUsers from "../pages/Protected/Admin/ManageUsers";
import UpdateEvent from "../pages/Protected/Admin/UpdateEvent";
import Events from "../pages/UnProtected/Events";
import ProtectRoutes from "./ProtectRoutes";
import Bookings from "../pages/Protected/User/Bookings";

export default function Router() {
  const router = createHashRouter([
    // User Routes
    // Auth Routes
    // {
    //   path: "/",
    //   element: <Events />,
    // },
    {
      path: "/users/login",
      element: (
        <ProtectRoutes>
          <Login />
        </ProtectRoutes>
      ),
    },
    {
      path: "/users/register",
      element: (
        <ProtectRoutes>
          <Register />
        </ProtectRoutes>
      ),
    },
    // Admin Routes
    {
      path: "/events/all",
      element: (
        <ProtectRoutes>
          <AllEvents />
        </ProtectRoutes>
      ),
    },
    {
      path: "/admin/events/add",
      element: (
        <ProtectRoutes>
          <CreateEvent />
        </ProtectRoutes>
      ),
    },
    {
      path: "/admin/events/:id/update",
      element: (
        <ProtectRoutes>
          <UpdateEvent />
        </ProtectRoutes>
      ),
    },
    {
      path: "/admin/events/:eventId/attendence",
      element: (
        <ProtectRoutes>
          <AttendeeList />
        </ProtectRoutes>
      ),
    },
    {
      path: "/admin/users/",
      element: (
        <ProtectRoutes>
          <ManageUsers />
        </ProtectRoutes>
      ),
    },
    {
      path: "/admin/users/addUser",
      element: (
        <ProtectRoutes>
          <AddUser />
        </ProtectRoutes>
      ),
    },
    {
      path: "/:userId/bookings",
      element: (
        <ProtectRoutes>
          <Bookings />
        </ProtectRoutes>
      ),
    },
    {
      path: "*",
      element: (
        <div className="h-screen w-screen flex justify-center items-center">
          <div className="px-8 py-4 text-center flex flex-col gap-1">
            <p className="text-sm">Oops</p>
            <h1 className="text-3xl font-bold">404</h1>
            <p className="text-sm">Page not found</p>
            <Link to="/users/login" className="mt-4">
              <p className="text-xs underline">Go to home</p>
            </Link>
          </div>
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
