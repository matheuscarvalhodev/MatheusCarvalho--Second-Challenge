import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../styles/modals/modal.css";
import "../styles/modals/loading.css"

export const ModalBoxLoading = styled(motion.div)`
  position: relative;
  z-index: 2;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainerLoading = styled.div`
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

export const ModalContentLoading = styled(motion.div)`
  padding: 5px;
  color: black;
`;

const ModalLoading: React.FC = () => {

    const modalContent = (
        <ModalBoxLoading
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <ModalContentLoading>
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
                
            </ModalContentLoading>
        </ModalBoxLoading>
    );

    return (
        <AnimatePresence>
            <ModalContainerLoading>{modalContent}</ModalContainerLoading>
        </AnimatePresence>
    );
};

export default ModalLoading;
