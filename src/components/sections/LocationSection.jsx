// src/components/sections/LocationSection.jsx
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import site from '@/data/site';

export default function LocationSection() {
  return (
    <section className='location-section' id='ubicacion' aria-label='Ubicación'>
      <div className='location-section__background' aria-hidden='true' />

      <Container className='location-section__inner'>
        <SectionHeading
          eyebrow='Ubicación'
          title='Encuéntranos fácilmente'
          description='Queremos que tu primera visita sea sencilla. Revisa nuestra ubicación y contáctanos si necesitas ayuda.'
        />

        <div className='location-box'>
          <div>
            <h3>{site.city}</h3>
            <p>{site.address}</p>
          </div>

          <div className='location-box__actions'>
            <Button href='#contacto' icon='whatsapp'>
              Escríbenos por WhatsApp
            </Button>

            <Button href='#' variant='secondary' icon='location'>
              Cómo llegar
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
