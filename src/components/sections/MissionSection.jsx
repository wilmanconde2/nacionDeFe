// src/components/sections/MissionSection.jsx
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

export default function MissionSection() {
  return (
    <section className='mission-section' aria-label='Nuestra misión'>
      <div className='mission-section__background' aria-hidden='true' />

      <Container className='mission-section__inner'>
        <SectionHeading
          eyebrow='Nuestra misión'
          title='Conocer a Dios, crecer en fe y vivir con propósito'
          description='Llevar el mensaje de Jesús con amor, formar discípulos, fortalecer familias y servir a nuestra comunidad con fe, integridad y esperanza.'
        />

        <div className='info-grid'>
          <article className='info-card info-card--mission'>
            <h3>Conocer a Dios</h3>
            <p>Queremos acercar a cada persona a una relación real con Dios.</p>
          </article>

          <article className='info-card info-card--mission'>
            <h3>Crecer en fe</h3>
            <p>Impulsamos una vida espiritual firme, práctica y constante.</p>
          </article>

          <article className='info-card info-card--mission'>
            <h3>Vivir en comunidad</h3>
            <p>Creemos en una iglesia cercana, activa y presente en la vida diaria.</p>
          </article>
        </div>
      </Container>
    </section>
  );
}
