import { FaEdit } from "react-icons/fa";
import Uploader from "../../../components/Uploader";
import { Input, Message, Select } from "../../../components/UsedInputs";
import { CategoriesData } from "../../../data/CategoriesData";
import { users } from "../../../data/users";
import Sidebar from "../Sidebar";
import { MdDelete } from "react-icons/md";
import {ImUpload} from "react-icons/im"
import React from "react";
import CastModal from "../../../components/modals/CastModal";
import EditCastModal from "../../../components/modals/EditCastModal";
const AddMovie = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [editModalOpen, setEditModalOpen] = React.useState(false);
  return (
    <Sidebar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Create New Movie</h2>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <Input
            label="Movie Title"
            placeholder="Game of Thrones"
            type="text"
            bg={true}
          />
          <Input label="Hours" placeholder="2hr" type="text" bg={true} />
        </div>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <Input
            label="Language Used"
            placeholder="English"
            type="text"
            bg={true}
          />
          <Input
            label="Year of Relase"
            placeholder="2022"
            type="number"
            bg={true}
          />
        </div>

        {/*images*/}
        <div className="w-full grid md:grid-cols-2 gap-6">
          {/* image without title */}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image Without Title
            </p>
            <Uploader />
            <div className="w-32 h-32 p-2 bg-main border border-border rounded">
              <img
                src="/images/99.jpg"
                alt="img without title"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
          {/* image with title */}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image With Title
            </p>
            <Uploader />
            <div className="w-32 h-32 p-2 bg-main border border-border rounded">
              <img
                src="/images/88.jpg"
                alt="img without title"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
        {/* Description*/}
        <Message
          label={"Movie Description"}
          placeholder="make it short and sweet"
        />
        {/* Category */}
        <div className="text-sm w-full">
          <Select label="Category" options={CategoriesData} />
        </div>
        {/* video */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-border font-semibold text-sm">
            Movie Vedio
          </label>
          <Uploader />
        </div>

        {/* CASTS*/}
        <div className="w-full grid lg:grid-cols-2 gap-6 items-start">
          <button className="w-full py-4 bg-main border border-subMain border-dashed text-white" onClick={() => setModalOpen(true)}>
            Add Cast
          </button>
          <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-4 ">
            {users.map((user, i) => (
              <div
                key={i}
                className="p-2 italic text-xs text-text rounded flex-cols bg-main border border-border"
              >
                <img
                  src={`/images/actors/${user.img}`}
                  alt={user.name}
                  className="w-full h-24 sm:h-32 lg:h-24 object-cover rounded mb-2"
                />
                <p className="text-white truncate text-ellipsis text-center w-full ">
                  {user.fullName}
                </p>
                <div className="flex-rows mt-2 w-full gap-2">
                  <button className="w-6 h-6 bg-dry border flex-cols border-border rounded text-subMain">
                    <MdDelete />
                  </button>
                  <button className="w-6 h-6 bg-dry border flex-cols border-border rounded text-green-600" onClick={() => setEditModalOpen(true)}>
                    <FaEdit />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
            {/* SUBMIT */}
        <button className="bg-subMain flex-rows gap-6 text-white font-medium w-full py-4 rounded">
          <ImUpload/> Publish Movie
         </button>
      </div>
      <CastModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <EditCastModal modalOpen={editModalOpen} setModalOpen={setEditModalOpen}/>
    </Sidebar>
  );
};
export default AddMovie;
