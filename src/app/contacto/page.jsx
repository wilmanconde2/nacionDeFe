// src/app/contacto/page.jsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExternalLink from '@/components/ui/ExternalLink';
import site from '@/data/site';

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main className='page-content'>
        <h1>Contacto</h1>
        <div className='page-card'>
          <p><strong>Dirección:</strong> {site.address}, {site.city}</p>
          <p><strong>Teléfono:</strong> {site.phone}</p>
          <p><strong>WhatsApp:</strong> {site.whatsappDisplay}</p>
          <p><strong>Correo:</strong> <ExternalLink href={`mailto:${site.email}`}>{site.email}</ExternalLink></p>
          <p><strong>Instagram:</strong> <ExternalLink href={site.instagramUrl}>{site.instagram}</ExternalLink></p>
          <p><strong>Facebook:</strong> <ExternalLink href={site.facebookUrl}>{site.facebook}</ExternalLink></p>
        </div>
      </main>
      <Footer />
    </>
  );
}
