// src/app/nosotros/page.jsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import site from '@/data/site';

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main className='page-content'>
        <h1>Nosotros</h1>
        <div className='page-card'>
          <p>{site.description}</p>
          <p><strong>Lema:</strong> {site.slogan}</p>
          <p><strong>Pastores:</strong> {site.pastors}</p>
          <p><strong>ADN:</strong> {site.dna.join(' • ')}</p>
          <p><strong>Propósito:</strong> {site.purpose}</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
