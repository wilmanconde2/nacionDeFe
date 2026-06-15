// src/components/sections/MinistriesSection.jsx
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import ministries from '@/data/ministries';
import site from '@/data/site';

export default function MinistriesSection() {
  return (
    <section className='ministries-section' id='ministerios' aria-label='ADN de la casa'>
      <div className='ministries-section__background' aria-hidden='true' />

      <Container className='ministries-section__inner'>
        <SectionHeading
          eyebrow='ADN de nuestra casa'
          title='Diseño, Paternidad, Reino y Gobierno'
          description='Estos son los fundamentos que establecemos como Nación de Fe Cali.'
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
          <Button href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`} variant='secondary' icon='whatsapp'>
            Conoce nuestra casa
          </Button>
        </div>
      </Container>
    </section>
  );
}
