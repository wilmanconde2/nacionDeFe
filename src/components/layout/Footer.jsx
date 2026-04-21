// src/components/layout/Footer.jsx
import Container from '@/components/ui/Container';
import site from '@/data/site';

export default function Footer() {
  return (
    <footer className='site-footer'>
      <Container className='site-footer__inner'>
        <div className='site-footer__block'>
          <h3>{site.name}</h3>
          <p>Una iglesia para crecer en fe, vivir en comunidad y encontrar esperanza.</p>
        </div>

        <div className='site-footer__block'>
          <h3>Ubicación</h3>
          <p>{site.city}</p>
          <p>{site.address}</p>
        </div>

        <div className='site-footer__block'>
          <h3>Contacto</h3>
          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}
            target='_blank'
            rel='noreferrer'
          >
            WhatsApp
          </a>
        </div>
      </Container>
    </footer>
  );
}
