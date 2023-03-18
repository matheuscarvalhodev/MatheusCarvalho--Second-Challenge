import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalBox = styled(motion.div)`
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

export const ModalContent = styled(motion.div)`
  padding: 5px;
  color: black;
`;