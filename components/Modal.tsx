import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CheckIcon } from "./Icons";

interface Props {
  children: string;
  isOpen: boolean;
  handleClose: () => void;
}

const Modal: React.FC<Props> = ({ children, isOpen, handleClose }) => {
  const [mounted, setMounted] = useState(false);

  // Be sure that we are going to render this portal only in the browser.
  useEffect(() => setMounted(true), []);

  // Close the modal after 10 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleClose();
    }, 8000);
    return () => clearTimeout(timeout);
  }, [isOpen]);

  if (mounted && isOpen) {
    return createPortal(
      <div
        className="absolute top-0 h-screen w-screen bg-black/20 flex items-center justify-center"
        onClick={handleClose}
      >
        <div className=" bg-white capitalize flex flex-col gap-6 justify-center items-center w-[319px] rounded-lg p-8 sm:shadow-lg sm:border sm:border-gray-50">
          <div className="rounded-full bg-transparent border-2 border-primary p-2">
            <CheckIcon />
          </div>

          <h2 className="font-bold text-xl leading-6">{children}</h2>
        </div>
      </div>,
      document.body
    );
  }
  return null;
};

export default Modal;