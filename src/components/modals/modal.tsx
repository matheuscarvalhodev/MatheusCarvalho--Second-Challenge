import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../styles/modals/modal.css";

interface ModalProps {
  showModal: boolean;
  message: string[];
}

const ModalBox = styled(motion.div)`
  position: relative;
  z-index: 2;
  width: 400px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 90px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 9999;
  display: flex;
  justify-content: center;
`;

const ModalContent = styled(motion.div)`
  padding: 5px;
  color: black;
`;

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
