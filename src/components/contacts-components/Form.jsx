import { useState } from "react";

export default function Form() {

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
        <form onSubmit={handleSubmit} className="form-contacts">
            <div>
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Nome"
                    value={formData.nome}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="empresa">Empresa:</label>
                <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    placeholder="Empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="contacto">Contacto:</label>
                <input
                    type="text"
                    id="contacto"
                    name="contacto"
                    placeholder="Contacto"
                    value={formData.contacto}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="mensagem">Mensagem:</label>
                <textarea
                    id="mensagem"
                    name="mensagem"
                    placeholder="Mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}