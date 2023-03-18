import React from "react";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../styles/modals/modal.css";

interface ModalProps {
    onConfirm: (flag:boolean) => void;
    showConfirm: boolean;
    message: string;
}

export const ModalBoxConfirm = styled(motion.div)`
  position: relative;
  z-index: 2;
  width: 400px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainerConfirm = styled.div`
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

export const ModalContentConfirm = styled(motion.div)`
  padding: 5px;
  color: black;
`;

const ModalConfirm: React.FC<ModalProps> = ({ showConfirm, message, onConfirm }) => {

    const modalContent = (
        <ModalBoxConfirm
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
        >
            <ModalContentConfirm
                initial={{ y: -30, opacity: 0 }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 0.5 },
                }}
            >
                <div className="modal-content" style={{width:'300px'}}>
                    <p style={{fontSize:"20px", marginBottom:'20px'}}>{`${message}`}</p>
                    <div style={{display:"flex",gap:"20px"}}>
                        <button type="button" style={{width:'70px'}} className="confirm_yes button" onClick={() => onConfirm(true)}>Yes</button>
                        <button type="button" style={{width:'70px'}} className="confirm_no button" onClick={() => onConfirm(false)}>No</button>
                    </div>
                </div>
            </ModalContentConfirm>
        </ModalBoxConfirm>
    );

    return (
        <AnimatePresence>
            {showConfirm && <ModalContainerConfirm>{modalContent}</ModalContainerConfirm>}
        </AnimatePresence>
    );
};

export default ModalConfirm;
