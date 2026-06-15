// src/app/predicaciones/page.jsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import site from '@/data/site';

export default function PredicacionesPage() {
  return (
    <>
      <Header />
      <main className='page-content'>
        <h1>Predicaciones</h1>
        <div className='page-card'>
          <p>Contenido de {site.name} para crecer en identidad, Reino, paternidad y gobierno.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
