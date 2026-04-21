// src/components/sections/AboutSection.jsx
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

export default function AboutSection() {
  return (
    <section className='info-section' id='nosotros'>
      <Container>
        <SectionHeading
          eyebrow='Quiénes somos'
          title='Una comunidad de fe para todas las personas'
          description='Nación de Fe es una iglesia cristiana donde creemos en el amor de Dios, en el poder de la oración y en la importancia de caminar juntos.'
        />

        <div className='info-grid'>
          <article className='info-card'>
            <h3>Fe que transforma</h3>
            <p>Creemos en una fe viva que cambia vidas, restaura corazones y da dirección.</p>
          </article>

          <article className='info-card'>
            <h3>Personas que acompañan</h3>
            <p>No caminamos solos. Somos una comunidad que escucha, apoya y recibe.</p>
          </article>

          <article className='info-card'>
            <h3>Un lugar para pertenecer</h3>
            <p>
              Queremos que cada persona encuentre un espacio real para crecer y sentirse en casa.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
