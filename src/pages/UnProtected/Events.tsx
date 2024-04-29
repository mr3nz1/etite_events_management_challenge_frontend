import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import EventCard from "../../components/EventCard";
import { CircleLoader } from "react-spinners";
import { Event } from "../../utils/types";

export default function Events() {
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
      <div className="flex w-screen h-screen justify-center items-center py-4">
        <div className="flex flex-col gap-5">
          <h1 className="text-gray-900 font-bold text-3xl">Events</h1>

          <div className="flex flex-col gap-5">
            <>
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
            </>
          </div>
        </div>
      </div>
    </>
  );
}
