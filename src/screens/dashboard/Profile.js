import React from "react";
import Sidebar from "./Sidebar";
import Uploader from "../../components/Uploader";
import { Input } from "../../components/UsedInputs";

const Profile = () => {
  return (
      <Sidebar>
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold">Profile</h2>
          <Uploader />
          <Input
            label="Full Name"
            placeholder="John Doe"
            type="text"
            bg={true}
          />
          <Input
            label="Email"
            placeholder="netFlixio@gmail.com"
            type="email"
            bg={true}
          />
          <div className="flex gap-4 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4">
            <button className="bg-subMain transitions hover:bg-main border border-subMain text-white font-medium px-6 w-full sm:w-auto py-3 rounded">
              Delete Account
            </button>
            <button className="bg-main transitions hover:bg-subMain border border-subMain text-white font-medium px-6 w-full sm:w-auto py-3 rounded">
              Update Profile
            </button>
          
          </div>
        </div>
      </Sidebar>
  );
};

export default Profile;
