import { Dialog, DialogPanel } from "@headlessui/react";
import React, { useRef, Fragment } from "react";
import { IoClose } from "react-icons/io5";

const MainModal = ({ modalOpen, setModalOpen , children }) => {
  const cacelButtonRef = useRef();
  return (
    <>
      <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        className="fixed inset-0 z-30 overflow-y-auto"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black bg-opacity-50">
          <DialogPanel className="flex flex-col gap-2 max-w-lg space-y-4 border bg-main border-border p-12 sm:w-4/5 md:w-3/5 lg:w-2/5 w-full align-middle overflow-y-auto text-white rounded-2xl opacity-100 scale-100">
            {children}
          </DialogPanel>
        </div>
        <div className="absolute top-5 right-5">
          <button
            onClick={() => setModalOpen(false)}
            ref={cacelButtonRef}
            type="button"
            className="inline-flex items-center w-10 h-10 flex-cols text-base hover:bg-red-600  bg-white hover:text-white text-subMain rounded-full transitions"
          >
            <IoClose />
          </button>
        </div>
      </Dialog>
    </>
  );
};

export default MainModal;
