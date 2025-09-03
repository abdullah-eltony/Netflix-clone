import React from "react";
import MainModal from "./MainModal";
import { Input } from "../UsedInputs";

const EditCategoryModal = ({ modalOpen, setModalOpen }) => {
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <h2 className="text-3xl font-bold text-center">Edit</h2>
      <Input label="Full Name" placeholder="John Doe" type="text" bg={true} />
      <button className="w-full bg-subMain font-medium transitions border-2 border-subMain hover:bg-main text-white px-3 sm:px-6  py-3 rounded">
        Update
      </button>
    </MainModal>
  );
};

export default EditCategoryModal;
