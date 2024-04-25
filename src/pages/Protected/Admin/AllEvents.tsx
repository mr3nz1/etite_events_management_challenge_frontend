import EventCard from "../../../components/EventCard";
import SideBar from "../../../components/SideBar";

export default function AllEvents() {
  return (
    <>
      <div className="flex">
        <SideBar isAdmin={true} />
        <div className="w-4/5 flex justify-center items-center overflow-y-scroll max-h-screen">
          <div className="flex flex-col gap-5">
            <h1 className="text-gray-900 font-bold text-3xl">Events</h1>

            <div className="flex flex-col gap-5">
              <EventCard />
              <EventCard />
              <EventCard />
              {/* <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard /> */}
            </div>

            {/* <div className="flex justify-center gap-3">
              <Button isDark={true}>Back</Button>
              <Button>Next</Button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
