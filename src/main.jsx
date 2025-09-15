import {createRoot} from 'react-dom/client'
import './custom.scss';
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(
    <HelmetProvider>
        <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
            <App/>
        </GoogleReCaptchaProvider>
    </HelmetProvider>
);
