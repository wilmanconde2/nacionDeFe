// src/components/sections/HeroSection.jsx
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import site from '@/data/site';

export default function HeroSection() {
  return (
    <section className='hero-section' id='inicio' aria-label='Sección principal'>
      <div className='hero-section__background' aria-hidden='true' />

      <Container className='hero-section__inner'>
        <div className='hero-section__content'>
          <span className='hero-section__eyebrow'>Bienvenido a {site.name}</span>

          <h1 className='hero-section__title'>{site.sloganUpper}</h1>

          <p className='hero-section__description'>{site.description}</p>
          <p className='hero-section__description hero-section__description--strong'>{site.institutionalPhrase}</p>

          <div className='hero-section__actions'>
            <Button href='#horarios' icon='calendar'>
              Ver horarios
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
