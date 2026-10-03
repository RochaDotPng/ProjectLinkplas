import PageMeta from '../components/seo/PageMeta/PageMeta';
import PageLayout from '../components/sections/PageLayout/PageLayout';
import ContactSection from '../components/sections/ContactSection/ContactSection';

export default function Contact() {
  return (
    // The page is itself the call to action, so the layout adds none.
    <PageLayout closingCta={false}>
      <PageMeta page="contact" />
      <ContactSection />
    </PageLayout>
  );
}
