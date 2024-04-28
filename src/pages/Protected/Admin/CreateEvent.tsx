import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import SideBar from "../../../components/SideBar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";
import { CircleLoader } from "react-spinners";

export default function CreateEvent() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [eventInfo, setEventInfo] = useState<{
    [key: string]: string | number;
  }>({
    title: "",
    location: "",
    description: "",
    date: "",
    numberOfTickets: "",
  });

  async function handleEventInfoChange(name: string, value: string | number) {
    setEventInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  }

  async function handleRequest() {
    try {
      setLoading(true);
      const url = `${process.env.API_URL}/events/create`;
      const userToken = localStorage.getItem("userToken");

      const res = await axios.post(url, eventInfo, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      toast.success("Success. Event created.", {
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
              <div className="flex flex-col gap-5 ">
                <Input
                  config={{ name: "title", required: true }}
                  placeholder="Event Title"
                  onChange={handleEventInfoChange}
                />
                <Input
                  config={{ name: "location", required: true }}
                  placeholder="Location"
                  onChange={handleEventInfoChange}
                />
                <Input
                  config={{ name: "description", required: true }}
                  placeholder="Description"
                  onChange={handleEventInfoChange}
                />
                <div className="flex flex-col md:flex-row justify-between gap-8">
                  <Input
                    config={{ name: "date", required: true }}
                    type="datetime-local"
                    placeholder="Description"
                    onChange={handleEventInfoChange}
                  />
                  <Input
                    config={{ name: "numberOfTickets", required: true }}
                    type="number"
                    placeholder="Total tickets"
                    onChange={handleEventInfoChange}
                  />
                </div>
              </div>
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
                className={`${loading && "cursor-not-allowed pointer-events-none"}`}
              >
                Create Event
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
