import Button from "../../../components/Button";
import Input from "../../../components/Input";
import SideBar from "../../../components/SideBar";

export default function CreateEvent() {
  return (
    <div className="flex">
      <SideBar isAdmin={true} />
      <div className="md:w-4/5 flex justify-center m-4 md:items-center overflow-y-scroll max-h-screen">
        <div className="flex flex-col gap-5 h-full py-20">
          <h1 className="text-gray-900 font-bold text-3xl">Add Event</h1>

          <div className="flex flex-col gap-5">
            <Input placeholder="Event Title" onClick={() => {}} />
            <Input placeholder="Location" onClick={() => {}} />
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <Input placeholder="dd / mm / yy" onClick={() => {}} />
              <Input placeholder="hours : minutes" onClick={() => {}} />
              <Input
                type="number"
                placeholder="Total tickets"
                onClick={() => {}}
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-8 mt-auto">
            <Button
              bgColor="bg-red-500"
              borderColor="border-red-500"
              textColor="text-red-500"
              isDark={true}
            >
              Cancel
            </Button>
            <Button>Create Event</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
