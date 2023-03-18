import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import "../styles/modals/modal.css";
import { ModalBox, ModalContainer, ModalContent } from "./styledModal";
import { ModalProps } from "../../util/interfaces";

const Modal: React.FC<ModalProps> = ({ showModal, message }) => {

  const [timeoutReached, setTimeoutReached] = useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (showModal) {
      timerId = setTimeout(() => {
        setTimeoutReached(true);
      }, 5000);
    }

    return () => {
      clearTimeout(timerId);
      setTimeoutReached(false);
      
    };
  }, [showModal]);

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const modalContent = (
    <ModalBox
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 300,
        },
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
        transition: { duration: 0.6 },
      }}
      onClick={handleModalClick}
    >
      <ModalContent
        initial={{ y: -30, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.5 },
        }}
      >
        <div className="modal-content">
          {message.map((msg) => (
            <p key={msg}>
              {`${msg}`}
              <br />
              <br />
            </p>
          ))}
        </div>
      </ModalContent>
    </ModalBox>
  );

  return (
    <AnimatePresence>
      {showModal && !timeoutReached && <ModalContainer>{modalContent}</ModalContainer>}
    </AnimatePresence>
  );
};

export default Modal;
