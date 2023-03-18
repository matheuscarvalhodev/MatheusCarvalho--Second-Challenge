import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../styles/modals/modal.css";
import "../styles/modals/loading.css"
import { ModalBox, ModalContainer, ModalContent } from "./styledModal";


const ModalLoading: React.FC = () => {

    const modalContent = (
        <ModalBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <ModalContent>
                <div className="modal-content-loading">
                    Loading...
                    <svg className="circleSvg" viewBox="0 0 50 50">
                        <circle className="circle"
                        cx="25"
                        cy="25"
                        r="20"
                        />
                    </svg>
                </div>
                
            </ModalContent>
        </ModalBox>
    );

    return (
        <AnimatePresence>
            <ModalContainer>{modalContent}</ModalContainer>
        </AnimatePresence>
    );
};

export default ModalLoading;
