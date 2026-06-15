// src/components/sections/MissionSection.jsx
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

export default function MissionSection() {
  return (
    <section className='mission-section' id='mision' aria-label='Nuestra misión y visión'>
      <div className='mission-section__background' aria-hidden='true' />

      <Container className='mission-section__inner'>
        <SectionHeading
          eyebrow='Misión y visión'
          title='Establecer el diseño del Padre en las naciones'
          description='Manifestamos el cielo en la tierra, mostramos el amor del Padre y modelamos la simpleza del evangelio del Reino.'
        />

        <div className='info-grid'>
          <article className='info-card info-card--mission'>
            <h3>Misión</h3>
            <p>Mostrar la simpleza del evangelio del Reino a través del modelaje, educar a nuestros jóvenes y niños conforme al diseño de gobierno del principio, mostrar el amor del Padre y sanar el corazón de los heridos por el sistema.</p>
          </article>

          <article className='info-card info-card--mission'>
            <h3>Visión</h3>
            <p>Volver al diseño original, ser la imagen del Padre en la tierra, posicionar a los hijos en el gobierno y erradicar la orfandad en la tierra.</p>
          </article>

          <article className='info-card info-card--mission'>
            <h3>Influencia</h3>
            <p>Contribuir a que el evangelio del Reino sea reconocido y modelado hasta los confines de la tierra.</p>
          </article>
        </div>
      </Container>
    </section>
  );
}
