// The Contactos page: contact details and the quote request form, per language.

import { useLanguage } from '../i18n/language-context';

// "Linkplas, Lda" is the registered company name; the brand is written LinkPlas.
const details = {
  company: 'Linkplas, Lda',
  address: [
    'Rua António Gomes Correia Júnior, n.º 459',
    'Zona Industrial do Mergulhão, Cesar',
    '3700-606 Oliveira de Azeméis',
    'Portugal',
  ],
  phone: { label: '+351 256 601 535', href: 'tel:+351256601535' },
  email: { label: 'geral@linkplas.pt', href: 'mailto:geral@linkplas.pt' },
  mapUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.586093549102!2d-8.438720483603221!3d40.89966268682006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd237ed703882dd3%3A0x16733d3c12b4f9b0!2slinkplas!5e0!3m2!1sen!2spt!4v1499089683867',
};

const contact = {
  pt: {
    eyebrow: 'Contactos',
    title: 'Vamos falar sobre o seu projeto.',
    lead: 'Envie o desenho, a amostra ou apenas a ideia. Analisamos a viabilidade e respondemos com uma proposta.',
    labels: { address: 'Morada', phone: 'Telefone', email: 'Email', hours: 'Horário' },
    hoursMissing: 'Horário de atendimento.',
    mapTitle: 'Localização da LinkPlas no Google Maps',
    form: {
      title: 'Pedido de orçamento',
      requiredNote: 'Os campos assinalados com * são obrigatórios.',
      fields: {
        nome: { label: 'Nome', error: 'Indique o seu nome.' },
        empresa: { label: 'Empresa' },
        contacto: { label: 'Telefone' },
        email: { label: 'Email', error: 'Indique um email válido, por exemplo nome@empresa.pt.' },
        tipo: {
          label: 'Tipo de pedido',
          placeholder: 'Selecione',
          error: 'Escolha o tipo de pedido.',
          options: [
            { value: 'Orçamento', label: 'Orçamento' },
            { value: 'Informação', label: 'Informação' },
            { value: 'Parceria', label: 'Parceria' },
          ],
        },
        mensagem: {
          label: 'Mensagem',
          helper: 'Descreva a peça ou o produto, as quantidades e os prazos.',
          error: 'Escreva a sua mensagem.',
        },
        consentimento: {
          label: 'Autorizo a LinkPlas a utilizar os dados deste formulário para responder ao meu pedido.',
          error: 'Precisamos da sua autorização para responder ao pedido.',
        },
      },
      typeInMessage: (type) => `Tipo de pedido: ${type}`,
      submit: 'Enviar pedido',
      sending: 'A enviar…',
      messages: {
        success: { title: 'Pedido enviado', text: 'Obrigado. Entraremos em contacto brevemente.' },
        invalid: { title: 'Não foi possível enviar', text: 'Verifique os campos assinalados e tente novamente.' },
        failure: { title: 'Não foi possível enviar', text: 'Tente novamente ou escreva para geral@linkplas.pt.' },
        notReady: { title: 'Não foi possível enviar', text: 'A verificação de segurança ainda não carregou. Tente novamente dentro de instantes.' },
      },
    },
  },

  en: {
    eyebrow: 'Contact',
    title: "Let's talk about your project.",
    lead: 'Send the drawing, the sample or just the idea. We assess feasibility and reply with a proposal.',
    labels: { address: 'Address', phone: 'Phone', email: 'Email', hours: 'Opening hours' },
    hoursMissing: 'Opening hours.',
    mapTitle: 'LinkPlas location on Google Maps',
    form: {
      title: 'Quote request',
      requiredNote: 'Fields marked with * are required.',
      fields: {
        nome: { label: 'Name', error: 'Enter your name.' },
        empresa: { label: 'Company' },
        contacto: { label: 'Phone' },
        email: { label: 'Email', error: 'Enter a valid email, for example name@company.com.' },
        tipo: {
          label: 'Type of request',
          placeholder: 'Select',
          error: 'Choose the type of request.',
          options: [
            { value: 'Quote', label: 'Quote' },
            { value: 'Information', label: 'Information' },
            { value: 'Partnership', label: 'Partnership' },
          ],
        },
        mensagem: {
          label: 'Message',
          helper: 'Describe the part or product, the quantities and the deadlines.',
          error: 'Write your message.',
        },
        consentimento: {
          label: 'I authorise LinkPlas to use the data in this form to reply to my request.',
          error: 'We need your authorisation to reply to the request.',
        },
      },
      typeInMessage: (type) => `Type of request: ${type}`,
      submit: 'Send request',
      sending: 'Sending…',
      messages: {
        success: { title: 'Request sent', text: 'Thank you. We will be in touch shortly.' },
        invalid: { title: 'The request could not be sent', text: 'Check the marked fields and try again.' },
        failure: { title: 'The request could not be sent', text: 'Try again or write to geral@linkplas.pt.' },
        notReady: { title: 'The request could not be sent', text: 'The security check has not loaded yet. Try again in a moment.' },
      },
    },
  },
};

export function useContactContent() {
  return { ...details, ...contact[useLanguage()] };
}
