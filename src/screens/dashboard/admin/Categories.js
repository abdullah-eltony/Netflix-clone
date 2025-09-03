import React from "react";
import Sidebar from "../Sidebar";
import { HiPlusCircle } from "react-icons/hi";
import Table2 from "../../../components/Table2";
import { CategoriesData } from "../../../data/CategoriesData";
import CategoryModal from "../../../components/modals/CategoryModal";
import EditCategoryModal from "../../../components/modals/EditCategoryModal";
const Categories = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [editModalOpen, setEditModalOpen] = React.useState(false);
  return (
    <Sidebar>
      <CategoryModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Categories</h2>
          <button onClick={()=> setModalOpen(true)} className="bg-subMain flex-rows gap-4 font-medium transitions border border-subMain hover:bg-main text-white px-3 sm:px-6 sm:w-auto py-3 rounded">
            <HiPlusCircle />
           Create
          </button>
        </div>
        <Table2 data={CategoriesData} users={false} setEditModalOpen={setEditModalOpen}/>
      </div>
      <EditCategoryModal modalOpen={editModalOpen} setModalOpen={setEditModalOpen}/>
    </Sidebar>
  );
};

export default Categories;
