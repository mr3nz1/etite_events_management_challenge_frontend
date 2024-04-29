import { useEffect, useState } from "react";
import EventCard from "../../../components/EventCard";
import SideBar from "../../../components/SideBar";
import { Event } from "../../../utils/types";
import axios, { AxiosError, AxiosResponse } from "axios";
import { CircleLoader } from "react-spinners";

export default function AllEvents() {
  const [events, setEvents] = useState<Event[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadEvents() {
    try {
      setIsLoading(true);
      const url = process.env.API_URL;
      const res: AxiosResponse = await axios.get(url + "/events/all");

      setEvents(res.data.data.events);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setError((err as AxiosError).message);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <>
      <div className="flex w-screen">
        <SideBar />
        <div className="w-4/5 flex justify-center overflow-y-auto max-h-screen ">
          <div className="flex flex-col gap-5 pt-32">
            <h1 className="text-gray-900 font-bold text-3xl">Events</h1>

            {error !== "" ? (
              <div className="flex flex-col gap-5 justify-center">
                <p className="text-xs text-center">Error loading events</p>
              </div>
            ) : (
              <>
                {isLoading ? (
                  <div>
                    <CircleLoader size={50} />
                  </div>
                ) : (
                  <div className="flex flex-col gap-5 ">
                    {events.map((event) => (
                      <EventCard
                        _id={event._id!}
                        key={event._id!}
                        title={event.title!}
                        description={event.description!}
                        location={event.location!}
                        cancelled={event.cancelled!}
                        date={event.date!}
                        users={event.users!}
                        remainingTickets={
                          event.numberOfTickets! - event.boughtTickets!
                        }
                        loadEvents={loadEvents}
                      />
                    ))}
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
