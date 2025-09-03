import React from "react";
import Sidebar from "../Sidebar";
import Table from "../../../components/Table";
import { moviesData } from "../../../data/moviesData";
import { FaListAlt, FaUser } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import Card from "../../../components/Card";

const Dashboard = () => {
    const Cards = [
        {
          title: "Total Movies",
          subtitle: 90,
          Icon: FaListAlt,
          iconBg:"bg-[#ea580c]"
        },
        {
          title: "Total Categories",
          subtitle: 8,
          Icon: HiViewGridAdd,
          iconBg:"bg-[#1d4ed8]"
        },
        {
          title: "Total Users",
          subtitle: 134,
          Icon: FaUser,
          iconBg:"bg-[#16a34a]"
        }
        
    ]
  return (
    <Sidebar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Movies List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {Cards.map((card,index)=>(
                <Card key={index} {...card}/>
            ))}
        </div>
        <h3 className="text-md font-medium text-border">Recent Movies</h3>
        <Table data={moviesData} admin={true} />
      </div>
    </Sidebar>
  );
};

export default Dashboard;
