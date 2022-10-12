import { ArrowDownTrayIcon, EnvelopeOpenIcon } from "@heroicons/react/24/solid";
import React, { useEffect } from "react";
import Button from "./Button";

const WorkSection = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  useEffect(() => {
    if (name.length > 0) {
      setIsOpen(true);
    }
    if (name.length === 0) {
      setIsOpen(false);
    }
  }, [name]);

  const isDisabled = name.length === 0 || message.length === 0;

  return (
    <div className="border rounded-lg overflow-hidden flex flex-col p-4 w-full mb-4 bg-white">
      <div className="flex flex-row mb-8 ">
        <EnvelopeOpenIcon className="h-6 w-6 text-slate-400 mr-2" />
        <h3 className="text-xl">Contact</h3>
      </div>
      <input
        type="text"
        placeholder="Name"
        className="focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-sky-300 border rounded-lg p-2 mb-4 w-full"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {isOpen && (
        <textarea
          placeholder="Message"
          rows={5}
          className="focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-sky-300 border rounded-lg p-2 mb-4 w-full"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      )}
      <Button
        clickFn={() => console.log(name + message)}
        className={`${
          isDisabled ? "cursor-not-allowed" : "cursor-pointer hover:bg-sky-600"
        }`}
        disabled={isDisabled}
      >
        <ArrowDownTrayIcon className="h-6 w-6 text-white mr-2" />
        Send
      </Button>
    </div>
  );
};

export default WorkSection;
