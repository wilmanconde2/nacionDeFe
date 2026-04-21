// src/components/sections/FaqSection.jsx
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import faq from '@/data/faq';

export default function FaqSection() {
  return (
    <section className='faq-section' id='faq'>
      <Container>
        <SectionHeading
          eyebrow='Preguntas frecuentes'
          title='Resolvemos tus dudas antes de tu visita'
          description='Queremos que te sientas tranquilo desde el primer momento.'
        />

        <div className='faq-list'>
          {faq.map((item) => (
            <article className='faq-item' key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
