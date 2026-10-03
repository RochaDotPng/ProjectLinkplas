import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import Alert from '../../ui/Alert/Alert';
import Button from '../../ui/Button/Button';
import ContentPlaceholder from '../../ui/ContentPlaceholder/ContentPlaceholder';
import Icon from '../../ui/Icon/Icon';
import Breadcrumb from '../../navigation/Breadcrumb/Breadcrumb';
import Eyebrow from '../../content/Eyebrow/Eyebrow';
import FormField from '../../forms/FormField/FormField';
import Input from '../../forms/Input/Input';
import Textarea from '../../forms/Textarea/Textarea';
import Select from '../../forms/Select/Select';
import Checkbox from '../../forms/Checkbox/Checkbox';
import mapPin from '../../../assets/icons/map-pin-20.svg';
import phoneIcon from '../../../assets/icons/phone-20.svg';
import mailIcon from '../../../assets/icons/mail-20.svg';
import clock from '../../../assets/icons/clock-20.svg';
import send from '../../../assets/icons/send-20.svg';
import { useContactContent } from '../../../content/contact';
import { useSiteContent } from '../../../content/site';
import { ROUTES } from '../../../content/routes';

const EMPTY = { nome: '', empresa: '', contacto: '', email: '', tipo: '', mensagem: '', consentimento: false };
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// The order the required fields appear in, to move focus to the first one that needs fixing.
const REQUIRED = ['nome', 'email', 'tipo', 'mensagem', 'consentimento'];

// Contact details and map beside the quote request form (Contact Section in Figma). The
// form comes right after the heading in the page, so on phones it is reached first.
export default function ContactSection() {
  const { eyebrow, title, lead, labels, hoursMissing, mapTitle, form, company, address, phone, email, mapUrl } =
    useContactContent();
  const { breadcrumbLabel, homeCrumb } = useSiteContent();
  const { fields, messages } = form;
  const { state } = useLocation();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const controls = useRef({});
  const [values, setValues] = useState(() => ({
    ...EMPTY,
    // A product page sends the visitor here with the product named, to start a quote request.
    ...(state?.message ? { tipo: fields.tipo.options[0].value, mensagem: `${state.message}\n` } : {}),
  }));
  const [errors, setErrors] = useState({});
  // null, 'sending', or the key of the message to show.
  const [status, setStatus] = useState(null);

  const control = (name) => ({
    name,
    ref: (element) => {
      controls.current[name] = element;
    },
    onChange: (event) => {
      const { type, checked, value } = event.target;
      setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
      setErrors((current) => ({ ...current, [name]: undefined }));
    },
  });

  const validate = () => {
    const found = {};
    if (!values.nome.trim()) found.nome = fields.nome.error;
    if (!EMAIL.test(values.email.trim())) found.email = fields.email.error;
    if (!values.tipo) found.tipo = fields.tipo.error;
    if (!values.mensagem.trim()) found.mensagem = fields.mensagem.error;
    if (!values.consentimento) found.consentimento = fields.consentimento.error;
    return found;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    const firstInvalid = REQUIRED.find((name) => found[name]);
    if (firstInvalid) {
      setStatus('invalid');
      controls.current[firstInvalid]?.focus();
      return;
    }
    if (!executeRecaptcha) {
      setStatus('notReady');
      return;
    }

    setStatus('sending');
    try {
      const token = await executeRecaptcha('contact_form');
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          nome: values.nome.trim(),
          empresa: values.empresa.trim(),
          contacto: values.contacto.trim(),
          email: values.email.trim(),
          tipo_pedido: values.tipo,
          // The type also opens the message, so it reaches the inbox even while the email
          // template has no field for it.
          mensagem: `${form.typeInMessage(values.tipo)}\n\n${values.mensagem.trim()}`,
          recaptcha_token: token,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setValues(EMPTY);
      setStatus('success');
    } catch {
      setStatus('failure');
    }
  };

  const sending = status === 'sending';
  const message = messages[status];

  return (
    <section className="lp-contact" aria-labelledby="contactos-titulo">
      <div className="container lp-contact__inner">
        <div className="lp-contact__heading">
          <Breadcrumb label={breadcrumbLabel} items={[{ label: homeCrumb, to: ROUTES.home }, { label: eyebrow }]} />
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 id="contactos-titulo" className="lp-contact__title">{title}</h1>
          <p className="lp-contact__lead">{lead}</p>
        </div>

        {/* Validation is done here, not by the browser, so every message is in the page's language. */}
        <form className="lp-contact__form" onSubmit={handleSubmit} noValidate aria-labelledby="pedido-titulo">
          <h2 id="pedido-titulo" className="lp-contact__form-title">{form.title}</h2>
          <p className="lp-contact__note">{form.requiredNote}</p>

          <div className="lp-contact__fields">
            <FormField id="contacto-nome" label={fields.nome.label} required error={errors.nome}>
              {(field) => <Input {...field} {...control('nome')} value={values.nome} autoComplete="name" />}
            </FormField>
            <FormField id="contacto-empresa" label={fields.empresa.label}>
              {(field) => (
                <Input {...field} {...control('empresa')} value={values.empresa} autoComplete="organization" />
              )}
            </FormField>
            <FormField id="contacto-email" label={fields.email.label} required error={errors.email}>
              {(field) => (
                <Input {...field} {...control('email')} value={values.email} type="email" autoComplete="email" />
              )}
            </FormField>
            <FormField id="contacto-telefone" label={fields.contacto.label}>
              {(field) => (
                <Input {...field} {...control('contacto')} value={values.contacto} type="tel" autoComplete="tel" />
              )}
            </FormField>
          </div>

          <FormField id="contacto-tipo" label={fields.tipo.label} required error={errors.tipo}>
            {(field) => (
              <Select
                {...field}
                {...control('tipo')}
                value={values.tipo}
                placeholder={fields.tipo.placeholder}
                options={fields.tipo.options}
              />
            )}
          </FormField>

          <FormField
            id="contacto-mensagem"
            label={fields.mensagem.label}
            required
            helper={fields.mensagem.helper}
            error={errors.mensagem}
          >
            {(field) => <Textarea {...field} {...control('mensagem')} value={values.mensagem} />}
          </FormField>

          <Checkbox
            id="contacto-consentimento"
            label={fields.consentimento.label}
            required
            error={errors.consentimento}
            {...control('consentimento')}
            checked={values.consentimento}
          />

          {message && (
            <Alert tone={status === 'success' ? 'success' : 'error'} title={message.title}>
              {message.text}
            </Alert>
          )}

          <Button type="submit" size="large" disabled={sending} trailingIcon={<Icon src={send} />}>
            {sending ? form.sending : form.submit}
          </Button>
        </form>

        <div className="lp-contact__info">
          <ul className="lp-contact__list">
            <li className="lp-contact__row">
              <span className="lp-contact__icon" aria-hidden="true"><Icon src={mapPin} /></span>
              <div>
                <p className="lp-contact__label">{labels.address}</p>
                <address className="lp-contact__value">
                  {company}
                  {address.map((line) => (
                    <span key={line} className="lp-contact__line">{line}</span>
                  ))}
                </address>
              </div>
            </li>
            <li className="lp-contact__row">
              <span className="lp-contact__icon" aria-hidden="true"><Icon src={phoneIcon} /></span>
              <div>
                <p className="lp-contact__label">{labels.phone}</p>
                <a className="lp-contact__value lp-contact__link" href={phone.href}>{phone.label}</a>
              </div>
            </li>
            <li className="lp-contact__row">
              <span className="lp-contact__icon" aria-hidden="true"><Icon src={mailIcon} /></span>
              <div>
                <p className="lp-contact__label">{labels.email}</p>
                <a className="lp-contact__value lp-contact__link" href={email.href}>{email.label}</a>
              </div>
            </li>
            <li className="lp-contact__row">
              <span className="lp-contact__icon" aria-hidden="true"><Icon src={clock} /></span>
              <div>
                <p className="lp-contact__label">{labels.hours}</p>
                <ContentPlaceholder>{hoursMissing}</ContentPlaceholder>
              </div>
            </li>
          </ul>

          <div className="lp-contact__map">
            <iframe src={mapUrl} title={mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </div>
      </div>
    </section>
  );
}
