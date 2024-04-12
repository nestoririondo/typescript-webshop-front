import "../styles/modal.css";

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
  isModalOpen: boolean;
};

const Modal = ({ children, onClose, isModalOpen }: ModalProps) => {
  return (
    <section
      onClick={onClose}
      className={`modal ${isModalOpen ? "visible" : ""}`}
    >
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        {children}
      </div>
    </section>
  );
};

export default Modal;
