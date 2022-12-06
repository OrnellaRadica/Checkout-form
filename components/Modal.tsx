import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: JSX.Element;
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
    }, 5000);
    return () => clearTimeout(timeout);
  }, [isOpen]);

  if (mounted && isOpen) {
    return createPortal(
      <div
        className="absolute top-0 h-screen w-screen bg-black/20 flex items-center justify-center animate-fadeIn"
        onClick={handleClose}
      >
        <div className="bg-white animate-scale capitalize flex flex-col gap-6 justify-center items-center w-11/12 max-w-[319px] sm:w-[319px] rounded-lg p-8 sm:shadow-lg sm:border sm:border-gray-50">
          {children}
        </div>
      </div>,
      document.body
    );
  }
  return null;
};

export default Modal;
