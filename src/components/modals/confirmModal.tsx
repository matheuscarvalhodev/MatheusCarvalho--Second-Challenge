import React from "react";
import { AnimatePresence } from "framer-motion";
import "../styles/modals/modal.css";
import { ModalBox, ModalContainer, ModalContent } from "./styledModal";

interface ModalProps {
    onConfirm: (flag:boolean) => void;
    showConfirm: boolean;
    message: string;
}

const ModalConfirm: React.FC<ModalProps> = ({ showConfirm, message, onConfirm }) => {

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
        >
            <ModalContent
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
            </ModalContent>
        </ModalBox>
    );

    return (
        <AnimatePresence>
            {showConfirm && <ModalContainer>{modalContent}</ModalContainer>}
        </AnimatePresence>
    );
};

export default ModalConfirm;
