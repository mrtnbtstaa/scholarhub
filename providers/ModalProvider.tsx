"use client";

import { renderModal } from "@/lib/modal-registry";
import { useModalActions, useModalType } from "@/store/useModalStore";


const ModalProvider = () => {
  const type = useModalType();
  const { closeModal } = useModalActions();

  return renderModal(type, { onClose: closeModal });
};

export default ModalProvider;
