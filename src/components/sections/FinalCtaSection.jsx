// src/components/sections/FinalCtaSection.jsx
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function FinalCtaSection() {
  return (
    <section className='final-cta-section' id='contacto'>
      <Container className='final-cta-section__inner'>
        <span className='final-cta-section__eyebrow'>Te esperamos</span>

        <h2>Tu próximo paso puede comenzar hoy</h2>

        <p>
          Si estás buscando una iglesia cristiana, un lugar para tu familia o una comunidad donde
          crecer en fe, Nación de Fe puede ser ese lugar.
        </p>

        <div className='final-cta-section__actions'>
          <Button href='#horarios' icon='calendar'>
            Visítanos este domingo
          </Button>

          <Button href='/contacto' variant='secondary' icon='users'>
            Hablar con alguien
          </Button>
        </div>
      </Container>
    </section>
  );
}
