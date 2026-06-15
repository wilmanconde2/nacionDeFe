// src/components/sections/LocationSection.jsx
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import ExternalLink from '@/components/ui/ExternalLink';
import site from '@/data/site';

export default function LocationSection() {
  return (
    <section className='location-section' id='ubicacion' aria-label='Ubicación'>
      <div className='location-section__background' aria-hidden='true' />

      <Container className='location-section__inner'>
        <SectionHeading
          eyebrow='Ubicación y contacto'
          title='Encuéntranos en Ciudad 2000'
          description='Te esperamos en nuestras celebraciones. También puedes comunicarte por WhatsApp, teléfono, correo o redes sociales.'
        />

        <div className='location-box'>
          <div>
            <h3>{site.name}</h3>
            <p>{site.address}</p>
            <p>{site.city}</p>
            <p>Teléfono: {site.phone}</p>
            <p>WhatsApp: {site.whatsappDisplay}</p>
            <p>Correo: <ExternalLink href={`mailto:${site.email}`}>{site.email}</ExternalLink></p>
            <p>Instagram: <ExternalLink href={site.instagramUrl}>{site.instagram}</ExternalLink></p>
            <p>Facebook: <ExternalLink href={site.facebookUrl}>{site.facebook}</ExternalLink></p>
          </div>

          <div className='location-box__actions'>
            <Button href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`} icon='whatsapp'>
              WhatsApp
            </Button>

            <Button href={site.mapsUrl} variant='secondary' icon='location'>
              Cómo llegar
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
