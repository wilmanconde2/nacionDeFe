// src/app/eventos/page.jsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import schedule from '@/data/schedule';

export default function EventosPage() {
  return (
    <>
      <Header />
      <main className='page-content'>
        <h1>Celebraciones</h1>
        <div className='page-list'>
          {schedule.map((item) => (
            <section key={item.title} className='page-card page-card--compact'>
              <h2>{item.title}</h2>
              <p>{item.day} — {item.time}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
