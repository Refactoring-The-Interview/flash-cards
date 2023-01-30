import React, { ReactNode, useState } from "react";
import Button from "react-bootstrap/Button";
import { ConfirmModal } from "../ConfirmModal/ConfirmModal";

interface ConfirmButtonProps {
    variant: string;
    onConfirm(): void;
    children: ReactNode;
    modalTitle?: ReactNode;
    modalBody?: ReactNode;
}

export const ConfirmButton = ({
    variant,
    onConfirm,
    children,
    modalTitle,
    modalBody,
}: ConfirmButtonProps) => {
    const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
    const handleClose = () => setShowConfirmModal(false);
    const handleShow = () => setShowConfirmModal(true);

    return (
        <>
            <Button variant={variant} onClick={handleShow}>
                {children}
            </Button>

            <ConfirmModal
                show={showConfirmModal}
                onHide={handleClose}
                onConfirm={onConfirm}
                title={modalTitle}
                body={modalBody}
            />
        </>
    );
};
