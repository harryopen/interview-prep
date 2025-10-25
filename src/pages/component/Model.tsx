import React, { useRef, useState } from "react";
import useClickOutside from "../../customHooks/useClickOutside";

const Model = () => {
  const [showModal, setShowModal] = useState<Boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const escapeModal = () => {
    setShowModal(false);
  };
  
  useClickOutside(ref, escapeModal);
  return (
    <>
      <button
        className="rounded bg-blue-300 text-white p-2"
        onClick={() => setShowModal(true)}
      >
        show Modal
      </button>
      {showModal && (
        <div
          ref={ref}
          className=" h-[500px] w-[500px]fixed inset-0 bg-black/50 flex items-center justify-center"
        >
          {" "}
          click anywhere other than model to escape modal
        </div>
      )}
    </>
  );
};

export default Model;
