import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import InputMask from 'react-input-mask';
import api from "../../services/api";

const MakeReservation = ({ show, setShow, selectedRoom, setSelectedRoom, handleClean }) => {
    const [timeoutId, setTimeoutId] = useState(null);
    const handleClose = () => {
        setShow(false);
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("O nome é obrigatório")
            .min(2, "O nome deve ter pelo menos 2 caracteres"),
        cpf: Yup.string()
            .required("O CPF é obrigatório")
            .transform(value => value.replace(/[^\d]/g, ""))
            .matches(/^\d{11}$/, "CPF deve ter 11 números"),
            telefone: Yup.string()
            .required("O telefone é obrigatório")
            .transform(value => value.replace(/[^\d]/g, ""))
            .matches(/^\d{10,11}$/, "O telefone deve ter 10 ou 11 números"),
        email: Yup.string()
            .required("O email é obrigatório")
            .email("Insira um email válido"),
        confirmInfo: Yup.boolean()
            .oneOf([true], "Você deve confirmar as informações"),
    });

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const data = {
                user: values,
                room: selectedRoom
            }
            const response = await api.post("/reservation/add", data);
            //console.log(response);
            toast.success("Formulário enviado com sucesso!");
            resetForm();
            handleClose();

            const handleCleanTimeout = setTimeout(() => {
                handleClean();
                clearTimeout(timeoutId);
                setTimeoutId(null);
            }, 4000);
        } catch (error) {
            console.error("Erro ao enviar o formulário", error);
            toast.error("Ocorreu um erro ao enviar o formulário.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Reserva para {selectedRoom?.name}</Modal.Title>
                </Modal.Header>
                <Formik
                    initialValues={{
                        name: "",
                        cpf: "",
                        telefone: "",
                        email: "",
                        confirmInfo: false,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <FormikForm>
                            <Modal.Body>

                                <div className="w-full flex gap-4 border mb-4">
                                    <img src={selectedRoom.image} style={{height: '100px'}} className="rounded-xl" />
                                    <div className="flex flex-column gap-1 justify-center">
                                        <h3 className="font-bold">{selectedRoom.name}</h3>
                                        <p className="font-light">{selectedRoom.rate.name}</p>
                                        <p className="font-bold">{selectedRoom.rate.price}</p>
                                    </div>

                                </div>

                                <Form.Group className="mb-3">
                                    <Form.Label>Nome</Form.Label>
                                    <Field
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Digite seu nome"
                                    />
                                    <ErrorMessage
                                        name="name"
                                        component="div"
                                        className="text-danger"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>CPF</Form.Label>
                                    <Field
                                        name="cpf"
                                        render={({ field }) => (
                                            <InputMask
                                                {...field}
                                                mask="999.999.999-99"
                                                className="form-control"
                                                placeholder="Digite seu CPF (apenas números)"
                                            />
                                        )}
                                    />
                                    <ErrorMessage
                                        name="cpf"
                                        component="div"
                                        className="text-danger"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Telefone</Form.Label>
                                    <Field
                                        name="telefone"
                                        render={({ field }) => (
                                            <InputMask
                                                {...field}
                                                mask="(99) 99999-9999"
                                                className="form-control"
                                                placeholder="Digite seu telefone"
                                            />
                                        )}
                                    />
                                    <ErrorMessage
                                        name="telefone"
                                        component="div"
                                        className="text-danger"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Field
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Digite seu email"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-danger"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Field
                                        type="checkbox"
                                        name="confirmInfo"
                                        className="form-check-input"
                                    />
                                    <Form.Label className="form-check-label ms-2">
                                        Confirmo que as informações estão corretas
                                    </Form.Label>
                                    <ErrorMessage
                                        name="confirmInfo"
                                        component="div"
                                        className="text-danger"
                                    />
                                </Form.Group>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cancelar
                                </Button>
                                <Button type="submit" variant="primary" disabled={isSubmitting}>
                                    {isSubmitting ? "Enviando..." : "Enviar"}
                                </Button>
                            </Modal.Footer>
                        </FormikForm>
                    )}
                </Formik>
            </Modal>
            <ToastContainer />
        </>
    );
};

export default MakeReservation;