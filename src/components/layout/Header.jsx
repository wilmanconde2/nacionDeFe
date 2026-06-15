// src/components/layout/Header.jsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import navigation from '@/data/navigation';
import site from '@/data/site';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => setIsOpen(false);
  const handleToggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className='site-header'>
      <Container className='site-header__inner'>
        <Link href='/' className='site-header__brand' onClick={handleCloseMenu}>
          <Image src='/images/logo.png' alt='Logo Nación de Fe Cali' width={44} height={44} className='site-header__logo' priority />
          <span className='site-header__brand-text'>
            <span className='site-header__brand-name'>{site.name}</span>
            <span className='site-header__brand-copy'>{site.sloganUpper}</span>
          </span>
        </Link>

        <nav className='site-header__nav' aria-label='Navegación principal'>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className='site-header__link'>
              {item.label}
            </a>
          ))}
        </nav>

        <div className='site-header__cta'>
          <Button href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`} variant='secondary' icon='whatsapp'>
            WhatsApp
          </Button>
        </div>

        <button
          type='button'
          className={`site-header__menu-button ${isOpen ? 'is-active' : ''}`}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls='mobile-menu'
          onClick={handleToggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </Container>

      <div id='mobile-menu' className={`site-header__mobile-menu ${isOpen ? 'is-open' : ''}`}>
        <Container className='site-header__mobile-menu-inner'>
          <nav className='site-header__mobile-nav' aria-label='Navegación móvil'>
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className='site-header__mobile-link' onClick={handleCloseMenu}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className='site-header__mobile-actions'>
            <Button href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`} fullWidth onClick={handleCloseMenu} icon='whatsapp'>
              Escríbenos por WhatsApp
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
