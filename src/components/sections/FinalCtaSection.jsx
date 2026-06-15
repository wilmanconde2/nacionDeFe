// src/components/sections/FinalCtaSection.jsx
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import site from '@/data/site';

export default function FinalCtaSection() {
  return (
    <section className='final-cta-section' id='contacto'>
      <Container className='final-cta-section__inner'>
        <span className='final-cta-section__eyebrow'>Te esperamos</span>

        <h2>Visítanos o escríbenos</h2>

        <p>
          Acompáñanos en nuestras celebraciones o comunícate con nosotros para recibir más información.
        </p>

        <div className='final-cta-section__actions'>
          <Button href='#horarios' icon='calendar'>
            Ver celebraciones
          </Button>

          <Button href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`} variant='secondary' icon='whatsapp'>
            Hablar con nosotros
          </Button>
        </div>
      </Container>
    </section>
  );
}
