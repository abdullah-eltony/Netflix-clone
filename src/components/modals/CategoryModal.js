import React from "react";
import MainModal from "./MainModal";
import { Input } from "../UsedInputs";

const CategoryModal = ({ modalOpen, setModalOpen }) => {
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <h2 className="text-3xl font-bold text-center">Create</h2>
      <Input label="Category" placeholder="Actions" type="text" bg={true} />
      <button className="w-full bg-subMain font-medium transitions border-2 border-subMain hover:bg-main text-white px-3 sm:px-6  py-3 rounded">
        Add
      </button>
    </MainModal>
  );
};

export default CategoryModal;
