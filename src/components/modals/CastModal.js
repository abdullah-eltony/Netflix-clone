import React from "react";
import MainModal from "./MainModal";
import { Input } from "../UsedInputs";
import Uploader from "../Uploader";

const CastModal = ({ modalOpen, setModalOpen }) => {
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <h2 className="text-3xl font-bold text-center">Create</h2>
      <Input label="Full Name" placeholder="John Doe" type="text" bg={true} />
      <div className="flex flex-col gap-2">
        <p className="text-border font-semibold text-sm">Image With Title</p>
        <Uploader title="Video" />
        <div className="w-32 h-32 p-2 bg-main border border-border rounded">
          <img
            src="/images/user.png"
            alt="cast img"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
      <button className="w-full bg-subMain font-medium transitions border-2 border-subMain hover:bg-main text-white px-3 sm:px-6  py-3 rounded">
        Add
      </button>
    </MainModal>
  );
};

export default CastModal;
