import React from "react";
import Sidebar from "../Sidebar";
import Table2 from "../../../components/Table2";
import { users } from "../../../data/users";
const Users = () => {
  return (
    <Sidebar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Users</h2>
        <Table2 data={users} users={true} />
      </div>
    </Sidebar>
  );
};

export default Users;
