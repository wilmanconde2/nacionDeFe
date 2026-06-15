// src/components/sections/AboutSection.jsx
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import site from '@/data/site';

const pastors = [
  {
    name: 'Pastor Andrés Tovar',
    role: 'Pastor principal',
    image: '/images/pastor.webp',
  },
  {
    name: 'Pastora Yurany de Tovar',
    role: 'Pastora principal',
    image: '/images/pastora.webp',
  },
];

export default function AboutSection() {
  return (
    <section className='info-section' id='nosotros'>
      <Container>
        <SectionHeading
          eyebrow='Quiénes somos'
          title='Una casa de influencia en Cali'
          description={site.purpose}
        />

        <div className='pastors-feature' aria-label='Pastores de Nación de Fe Cali'>
          <div className='pastors-feature__content'>
            <span className='pastors-feature__eyebrow'>Nuestros pastores</span>
            <h3>{site.pastors}</h3>
            <p>Sirven como casa espiritual para formar familias, generaciones e hijos con identidad, propósito y destino.</p>
          </div>

          <div className='pastors-feature__grid'>
            {pastors.map((pastor) => (
              <article className='pastor-card' key={pastor.name}>
                <Image
                  src={pastor.image}
                  alt={pastor.name}
                  width={520}
                  height={640}
                  className='pastor-card__image'
                  sizes='(max-width: 767px) 100vw, 280px'
                />
                <div className='pastor-card__body'>
                  <h4>{pastor.name}</h4>
                  <p>{pastor.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className='info-grid'>
          <article className='info-card'>
            <h3>Propósito</h3>
            <p>{site.description}</p>
          </article>

          <article className='info-card'>
            <h3>ADN</h3>
            <p>{site.dna.join(', ')}</p>
          </article>

          <article className='info-card'>
            <h3>Frase institucional</h3>
            <p>{site.institutionalPhrase}</p>
          </article>
        </div>

        <div className='verse-grid'>
          {site.verses.map((verse) => (
            <article className='verse-card' key={verse.reference}>
              <p>“{verse.text}”</p>
              <strong>{verse.reference}</strong>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
