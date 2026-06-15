// src/components/layout/Footer.jsx
import Image from 'next/image';
import Container from '@/components/ui/Container';
import ExternalLink from '@/components/ui/ExternalLink';
import site from '@/data/site';

export default function Footer() {
  return (
    <footer className='site-footer'>
      <Container className='site-footer__inner'>
        <div className='site-footer__block'>
          <Image src='/images/logo.png' alt='Logo Nación de Fe Cali' width={64} height={64} className='site-footer__logo' />
          <h3>{site.name}</h3>
          <p>{site.slogan}</p>
        </div>

        <div className='site-footer__block'>
          <h3>Celebraciones</h3>
          <p>Domingo 8:30 a. m. · Escuela de formación</p>
          <p>Domingo 10:00 a. m. · Celebración al Rey</p>
          <p>Miércoles 7:00 p. m. · Noche de entrenamiento</p>
          <p>{site.address}</p>
          <p>{site.city}</p>
        </div>

        <div className='site-footer__block'>
          <h3>Contacto</h3>
          <ExternalLink href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}>
            WhatsApp: {site.whatsappDisplay}
          </ExternalLink>
          <ExternalLink href={`mailto:${site.email}`}>{site.email}</ExternalLink>
          <ExternalLink href={site.instagramUrl}>{site.instagram}</ExternalLink>
          <ExternalLink href={site.facebookUrl}>{site.facebook}</ExternalLink>
        </div>
      </Container>
    </footer>
  );
}
