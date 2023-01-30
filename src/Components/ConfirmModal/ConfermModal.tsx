import React, { ReactNode, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface ModalProps {
    show: boolean;
    onHide(): void;
    onConfirm(): void;
    title?: ReactNode;
    body?: ReactNode;
}

export const ConfirmModal = ({
    show,
    onHide,
    onConfirm,
    title,
    body,
}: ModalProps) => {
    return (
        <Modal show={show} onHide={onHide} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>{title ? title : "Confirmation"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body ? body : "Are you sure?"}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancel
                </Button>
                <Button
                    type="button"
                    variant="danger"
                    onClick={(e) => {
                        onConfirm();
                        onHide();
                    }}
                >
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
