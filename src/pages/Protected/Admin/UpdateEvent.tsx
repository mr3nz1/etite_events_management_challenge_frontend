import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import SideBar from "../../../components/SideBar";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";
import { CircleLoader } from "react-spinners";
import { formatDate } from "../../../utils/util";

export default function UpdateEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [eventInfo, setEventInfo] = useState<{
    [key: string]: string;
  }>({
    title: "",
    location: "",
    description: "",
    date: "",
    numberOfTickets: "",
    cancelled: "false",
  });
  const [error, setError] = useState("");

  async function handleEventInfoChange(name: string, value: string | number) {
    setEventInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  }

  async function handleRequest() {
    try {
      setLoading(true);
      console.log(id);
      const url = `${process.env.API_URL}/events/${id}/update`;
      const userToken = localStorage.getItem("userToken");

      const res = await axios.patch(url, eventInfo, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      toast.success("Success. Event updated.", {
        hideProgressBar: true,
      });
      navigate(-1);
    } catch (err) {
      setLoading(false);
      toast.error((err as AxiosError).message, {
        hideProgressBar: true,
      });
      console.log(err);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    handleRequest();
  }

  async function loadEvent() {
    try {
      setLoading(true);
      const url = `${process.env.API_URL}/events/${id}/get`;

      const {
        data: {
          data: {
            event: {
              title,
              location,
              description,
              date,
              numberOfTickets,
              cancelled,
            },
          },
        },
      } = await axios.get(url);

      setEventInfo({
        title: title,
        location: location,
        description: description,
        date: date,
        numberOfTickets: numberOfTickets,
        cancelled: cancelled ? "true" : "false",
      });

      setLoading(false);
    } catch (err) {
      toast.error("Error loading event with Id: " + id, {
        hideProgressBar: true,
      });
      setLoading(false);
      console.log(err);
      setError((err as AxiosError).message);
    }
  }

  useEffect(() => {
    loadEvent();
  }, []);

  return (
    <div className="flex">
      <SideBar />
      <div className="w-4/5 flex justify-center overflow-y-auto max-h-screen ">
        <div className="flex flex-col gap-5 h-full py-20">
          <h1 className="text-gray-900 font-bold text-3xl">Add Event</h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col flex-1 justify-center"
          >
            {loading ? (
              <div className="h-full flex justify-center items-center">
                <CircleLoader className="text-gray-900" />
              </div>
            ) : (
              <>
                {error !== "" ? (
                  <div className="h-full w-full justify-center items-center">
                    <p className="text-red-500">Error loading event.</p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-5 ">
                    <Input
                      config={{
                        name: "title",
                        value: eventInfo.title,
                        required: true,
                      }}
                      placeholder="Event Title"
                      onChange={handleEventInfoChange}
                    />
                    <Input
                      config={{
                        name: "location",
                        value: eventInfo.location,
                        required: true,
                      }}
                      placeholder="Location"
                      onChange={handleEventInfoChange}
                    />
                    <Input
                      config={{
                        name: "description",
                        value: eventInfo.description,
                        required: true,
                      }}
                      placeholder="Description"
                      onChange={handleEventInfoChange}
                    />
                    <div className="flex flex-col md:flex-row justify-between gap-8">
                      <Input
                        config={{
                          name: "date",
                          value: formatDate(eventInfo.date),
                          required: true,
                        }}
                        type="datetime-local"
                        placeholder="Description"
                        onChange={handleEventInfoChange}
                      />
                      <Input
                        config={{
                          name: "numberOfTickets",
                          value: eventInfo.numberOfTickets,
                          required: true,
                        }}
                        type="number"
                        placeholder="Total tickets"
                        onChange={handleEventInfoChange}
                      />
                    </div>
                    <div className="flex gap-2 text-sm items-center">
                      <select
                        defaultValue={eventInfo.cancelled!}
                        name="Cancelled"
                        className="w-full border-b border-gray-900 p-2 checked:bg-gray-300"
                        onChange={(e) => {
                          handleEventInfoChange(
                            "cancelled",
                            e.currentTarget.value
                          );
                        }}
                      >
                        <option className="outline-none" value="true">
                          Cancelled
                        </option>
                        <option className="outline-none" value="false">
                          Not cancelled
                        </option>
                      </select>
                      {/* <input type="checkbox" onChange={(e) => console.log(e)} />
                      <p>Cancelled</p> */}
                    </div>
                  </div>
                )}
              </>
            )}

            <div className="flex items-center self-end gap-8 mt-auto">
              <Button
                bgColor="bg-red-500"
                borderColor="border-red-500"
                textColor="text-red-500"
                isDark={true}
                onClick={() => {
                  navigate(-1);
                }}
                config={{
                  type: "button",
                  disabled: loading,
                }}
              >
                Cancel
              </Button>
              <Button
                config={{ type: "submit", disabled: loading }}
                className={`${
                  loading && "cursor-not-allowed pointer-events-none"
                }`}
              >
                Update Event
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
