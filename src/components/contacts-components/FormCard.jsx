import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import emailjs from 'emailjs-com';
import Alert from 'react-bootstrap/Alert';
import ReCAPTCHA from "react-google-recaptcha";


export default function FormCard() {
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertVariant, setAlertVariant] = useState('success');
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const initialFormData = {
        nome: '',
        empresa: '',
        contacto: '',
        email: '',
        mensagem: '',
    };
    const [formData, setFormData] = useState({
        nome: '',
        empresa: '',
        contacto: '',
        email: '',
        mensagem: '',
    });

    const handleRecaptchaChange = (value) => {
        // Update state with the reCAPTCHA value
        setRecaptchaValue(value);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!recaptchaValue) {
            setAlertMessage('Por favor, preencha o reCAPTCHA.');
            setAlertVariant('danger');
            setShowAlert(true);
            return;
          }

        emailjs.sendForm('service_ki3c9oc', 'template_q0b0cal', e.target, 'YEOLiURw_i3ugczT_')
            .then((result) => {
                setFormData(initialFormData);
                setAlertMessage('Mensagem foi enviada com sucesso!');
                setAlertVariant('success');
                setShowAlert(true);
                // Optionally reset form and hide alert after a few seconds
                setTimeout(() => setShowAlert(false), 70000); // Hide after 5 seconds
                console.log('Email successfully sent!', result.text);
                // Handle success (e.g., showing a success message)
            }, (error) => {
                setAlertMessage('Falha ao enviar a mensagem. Tente novamente mais tarde.');
                setAlertVariant('danger');
                setShowAlert(true);
                console.log('Failed to send the email.', error.text);
                // Handle errors (e.g., showing an error message)
            });
        console.log('Dados do formulário:', formData);

    };

    return (
        <>{showAlert && (
            <Alert className="alert-container" variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
                {alertMessage}
            </Alert>
        )}
            <Form onSubmit={handleSubmit} className="form-contacts shadow">
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
                {/*<ReCAPTCHA
                    sitekey="6LfZgpUpAAAAAMjCEnFH7caeZLvDB0EMsvJu-ANX"
                    onChange={handleRecaptchaChange}
        />*/}
                <Button className="px-4" variant="primary" type="submit" >Enviar</Button>
            </Form>
        </>
    )
}