// src/components/sections/EventsSection.jsx
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import events from '@/data/events';

export default function EventsSection() {
  return (
    <section className='events-section' id='eventos'>
      <Container>
        <SectionHeading
          eyebrow='Eventos'
          title='Próximos espacios para compartir y crecer'
          description='Siempre hay una nueva oportunidad para congregarte, aprender y compartir en comunidad.'
        />

        <div className='card-grid'>
          {events.map((event) => (
            <article className='card' key={event.title}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </article>
          ))}
        </div>

        <div className='section-actions'>
          <Button href='/eventos' icon='calendar'>
            Ver próximos eventos
          </Button>
        </div>
      </Container>
    </section>
  );
}
