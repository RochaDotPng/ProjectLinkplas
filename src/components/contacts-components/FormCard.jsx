import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import emailjs from 'emailjs-com';
import Alert from 'react-bootstrap/Alert';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';


export default function FormCard() {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertVariant, setAlertVariant] = useState('success');
    const [isSubmitting, setIsSubmitting] = useState(false);
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


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!executeRecaptcha) {
            setAlertMessage('reCAPTCHA ainda não carregou. Tente novamente.');
            setAlertVariant('danger');
            setShowAlert(true);
            return;
        }

        setIsSubmitting(true);

        try {
            // Execute reCAPTCHA v3
            const token = await executeRecaptcha('contact_form');
            
            // Add token to form data
            const formElement = e.target;
            const tokenInput = document.createElement('input');
            tokenInput.type = 'hidden';
            tokenInput.name = 'recaptcha_token';
            tokenInput.value = token;
            formElement.appendChild(tokenInput);

            emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID, 
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
                formElement, 
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then((result) => {
                console.log(result.text);
                setAlertMessage('Mensagem enviada com sucesso!');
                setAlertVariant('success');
                setShowAlert(true);
                setFormData(initialFormData);
            }, (error) => {
                console.log(error.text);
                setAlertMessage('Erro ao enviar mensagem. Tente novamente.');
                setAlertVariant('danger');
                setShowAlert(true);
            })
            .finally(() => {
                // Remove the token input
                const tokenInput = formElement.querySelector('input[name="recaptcha_token"]');
                if (tokenInput) {
                    tokenInput.remove();
                }
                setIsSubmitting(false);
            });

        } catch (error) {
            console.error('reCAPTCHA error:', error);
            setAlertMessage('Erro de segurança. Tente novamente.');
            setAlertVariant('danger');
            setShowAlert(true);
            setIsSubmitting(false);
        }
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
                <Button 
                    className="px-4" 
                    variant="primary" 
                    type="submit" 
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </Button>
            </Form>
        </>
    )
}