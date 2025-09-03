import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left px-5 py-3 leading-6 whitespace-nowrap";
const Rows = (data, i, users , setEditModalOpen) => {
  if (users) {
    return (
      <tr key={i}>
        <td className={Text}>
          <div className="w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden">
            <img
              src={`/images/actors/${data.img}`}
              alt={data.fullName}
              className="h-full w-full object-cover"
            />
          </div>
        </td>
        <td className={`${Text} truncate`}>{data.id}</td>
        <td className={`${Text}`}>12, Jan 2023</td>
        <td className={`${Text}`}>{data.fullName}</td>
        <td className={`${Text}`}>{data.email}</td>
        <td className={`${Text} flex-rows gap-2 justify-end items-center mt-3`}>
          <button className="bg-subMain text-white  rounded flex-rows gap-2 py-1 w-6 h-6 flex-cols">
            <AiOutlineDelete />
          </button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr key={data._id}>
        <td className={`${Text} truncate`}>2R75T8</td>
        <td className={`${Text}`}>12, Jan 2023</td>
        <td className={`${Text}`}>{data.title}</td>
        <td className={`${Text} flex-rows gap-2 justify-end`}>
          <button className="bg-dry border-border border rounded flex-rows gap-2 text-border py-1 px-2 items-center" onClick={()=> setEditModalOpen(true)}>
            Edit <FaEdit className="text-green-500" />
          </button>
          <button className="bg-subMain text-white  rounded flex-rows gap-2 py-1 w-6 h-6 flex-cols">
            <AiOutlineDelete />
          </button>
        </td>
      </tr>
    );
  }
};
const Table2 = ({ data, users , setEditModalOpen }) => {
  return (
    <div className="overflow-x-scroll overflow-hidden relative w-full">
      <table className="w-full table-auto border border-border divide-y divide-border">
        <thead>
          {users ? (
            <tr className="bg-dryGray">
              <th scope="col" className={`${Head}`}>
                Image
              </th>
              <th scope="col" className={`${Head}`}>
                ID
              </th>
              <th scope="col" className={`${Head}`}>
                Date
              </th>
              <th scope="col" className={`${Head}`}>
                Full Name
              </th>
              <th scope="col" className={`${Head}`}>
                Email
              </th>
              <th scope="col" className={`${Head} text-end`}>
                Actions
              </th>
            </tr>
          ) : (
            <tr className="bg-dryGray">
              <th scope="col" className={`${Head}`}>
                ID
              </th>
              <th scope="col" className={`${Head}`}>
                DATE
              </th>
              <th scope="col" className={`${Head}`}>
                TITLE
              </th>
              <th scope="col" className={`${Head} text-end`}>
                Actions
              </th>
            </tr>
          )}
        </thead>
        <tbody className="bg-main divide-y divide-gray-800">
          {data.map((item, index) => Rows(item, index, users , setEditModalOpen))}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
