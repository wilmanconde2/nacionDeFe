// src/components/sections/MinistriesSection.jsx
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import ministries from '@/data/ministries';

export default function MinistriesSection() {
  return (
    <section className='ministries-section' id='ministerios' aria-label='Ministerios'>
      <div className='ministries-section__background' aria-hidden='true' />

      <Container className='ministries-section__inner'>
        <SectionHeading
          eyebrow='Ministerios'
          title='Hay un lugar para ti y tu familia'
          description='Queremos que cada persona encuentre un espacio donde crecer, servir y conectar con otros.'
        />

        <div className='card-grid'>
          {ministries.map((item) => (
            <article className='card card--ministries' key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className='section-actions'>
          <Button href='/ministerios' variant='secondary' icon='users'>
            Conoce nuestra comunidad
          </Button>
        </div>
      </Container>
    </section>
  );
}
