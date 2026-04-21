// src/components/sections/HeroSection.jsx
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className='hero-section' id='inicio' aria-label='Sección principal'>
      <div className='hero-section__background' aria-hidden='true' />

      <Container className='hero-section__inner'>
        <div className='hero-section__content'>
          <span className='hero-section__eyebrow'>Bienvenido a Nación de Fe</span>

          <h1 className='hero-section__title'>
            Una iglesia para crecer en fe, vivir en comunidad y encontrar esperanza
          </h1>

          <p className='hero-section__description'>
            En Nación de Fe creemos que cada persona tiene un propósito. Queremos caminar contigo,
            ayudarte a conocer más de Dios y abrirte las puertas de una comunidad donde puedas
            sentirte en casa.
          </p>

          <div className='hero-section__actions'>
            <Button href='#horarios' icon='calendar'>
              Visítanos este domingo
            </Button>

            <Button href='#ubicacion' variant='secondary' icon='location'>
              Cómo llegar
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
