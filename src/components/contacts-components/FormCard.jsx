import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function FormCard() {

    const [formData, setFormData] = useState({
        nome: '',
        empresa: '',
        contacto: '',
        email: '',
        mensagem: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados do formulário:', formData);
    };

    return (
        <>
            <Form onSubmit={handleSubmit} className="form-contacts">
                <FloatingLabel
                    controlId="nome"
                    label="Nome"
                    className="mb-0 full-width"
                >
                    <Form.Control
                        name="nome"
                        onChange={handleChange}
                        value={formData.nome}
                        type="text"
                        placeholder="Escreva o seu nome"
                        required
                    />
                    <Form.Control.Feedback type="invalid">Por favor preencha o seu nome</Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel
                    controlId="empresa"
                    label="Empresa"
                    className="mb-0 full-width"
                >
                    <Form.Control 
                        name="empresa"
                        value={formData.empresa} 
                        onChange={handleChange}
                        type="text" 
                        placeholder="A sua empresa" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="contactInput"
                    label="Contacto"
                    className="mb-0 full-width"
                >
                    <Form.Control 
                        name="contacto" 
                        onChange={handleChange}
                        value={formData.contacto} 
                        type="tel" 
                        placeholder="O seu contacto" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="emailInput"
                    label="Email"
                    className="mb-0 full-width"
                >
                    <Form.Control 
                        name="email"
                        onChange={handleChange} 
                        value={formData.email} 
                        type="email" 
                        placeholder="O seu email" 
                        required 
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingTextarea"
                    label="Mensagem"
                    className="mb-0 full-width"
                >
                    <Form.Control 
                        name="mensagem" 
                        onChange={handleChange} 
                        value={formData.mensagem} 
                        as="textarea" 
                        style={{ height: '100px' }} 
                        placeholder="Leave a comment here" 
                    />
                </FloatingLabel>
                <Button className="px-4" variant="primary" type="submit">Enviar</Button>
            </Form>
        </>
    )
}