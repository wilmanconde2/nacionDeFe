// src/app/ministerios/page.jsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ministries from '@/data/ministries';

export default function MinisteriosPage() {
  return (
    <>
      <Header />
      <main className='page-content'>
        <h1>ADN de nuestra casa</h1>
        <div className='page-list'>
          {ministries.map((item) => (
            <section key={item.title} className='page-card page-card--compact'>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
