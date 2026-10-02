import {createRoot} from 'react-dom/client'
import './styles/main.scss';
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { LanguageContext } from './i18n/language-context';
import { languageFromPathname } from './i18n/languages';

// The language comes from the URL prefix and is fixed for the page load;
// switching language is a full navigation to the other prefix.
const language = languageFromPathname(window.location.pathname);

const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(
    <HelmetProvider>
        <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
            <LanguageContext.Provider value={language}>
                <App/>
            </LanguageContext.Provider>
        </GoogleReCaptchaProvider>
    </HelmetProvider>
);
