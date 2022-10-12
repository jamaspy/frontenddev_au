import { Transition } from "@headlessui/react";
import React from "react";
import { GrClose } from "react-icons/gr";
import { HiMenu } from "react-icons/hi";
const RoundedWrapper = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className={`relative rounded-t-3xl min-h-screen overflow-hidden flex flex-col ${
        !isOpen ? "bg-slate-50 shadow" : "bg-transparent shadow-none"
      }  rounded-b-3xl`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-12 w-12 rounded-full absolute top-8 right-8 z-10 bg-white flex items-center justify-center"
      >
        {isOpen ? <GrClose /> : <HiMenu />}
      </button>

      <Transition
        className=""
        show={isOpen}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 rotate-[-120deg] scale-50"
        enterTo="opacity-100 rotate-0 scale-100"
        leave="transform duration-100 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100 "
        leaveTo="opacity-0 scale-95 "
      >
        <div className="flex items-center justify-center flex-col min-h-[97vh] w-full rounded-3xl bg-gradient-to-b from-cyan-500 to-blue-50 opacity-75 ">
          <p className="text-white text-4xl mb-8 hover:font-semibold drop-shadow">
            Home
          </p>
          <p className="text-white text-4xl mb-8 hover:font-semibold drop-shadow">
            Articles
          </p>
          <p className="text-white text-4xl mb-8 hover:font-semibold drop-shadow">
            Projects
          </p>
          <p className="text-white text-4xl hover:font-semibold drop-shadow">
            Contact
          </p>
        </div>
      </Transition>

      {!isOpen ? children : null}
    </div>
  );
};

export default RoundedWrapper;
