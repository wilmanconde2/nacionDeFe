// src/components/sections/ScheduleSection.jsx
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import schedule from '@/data/schedule';

export default function ScheduleSection() {
  return (
    <section className='schedule-section' id='horarios'>
      <Container>
        <SectionHeading
          eyebrow='Horarios'
          title='Encuentra el mejor momento para visitarnos'
          description='Te esperamos con los brazos abiertos. Revisa nuestros horarios y acompáñanos.'
        />

        <div className='card-grid'>
          {schedule.map((item) => (
            <article className='card' key={`${item.title}-${item.time}`}>
              <h3>{item.title}</h3>
              <p>{item.day}</p>
              <strong>{item.time}</strong>
            </article>
          ))}
        </div>

        <div className='section-actions'>
          <Button href='#ubicacion' icon='location'>
            Planear mi visita
          </Button>
        </div>
      </Container>
    </section>
  );
}
