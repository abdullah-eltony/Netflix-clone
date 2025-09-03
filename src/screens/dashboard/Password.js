import { Input } from "../../components/UsedInputs";
import Sidebar from "./Sidebar";

const Passwrod = () => {
  return (
    <Sidebar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Change Password</h2>
        <Input
          label="Previous Password"
          placeholder="*****"
          type="password"
          bg={true}
        />
        <Input
          label="New Password"
          placeholder="*****"
          type="password"
          bg={true}
        />
        <Input
          label="Confirm Password"
          placeholder="*****"
          type="password"
          bg={true}
        />
        <div className="flex my-4 justify-end">
          <button className="bg-main transitions hover:bg-subMain border border-subMain text-white font-medium px-6 w-full sm:w-auto py-3 rounded">
            Change Password
          </button>
        </div>
      </div>
    </Sidebar>
  );
};
export default Passwrod;
