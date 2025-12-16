'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Scale, LogIn } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Only evaluate pathname-dependent UI after client mount to avoid
  // hydration mismatches between server and client renders.
  useEffect(() => {
    setMounted(true);
  }, []);

  const navigation = [
    { name: t('nav.home'), href: `/` },
    { name: t('nav.about'), href: `/about` },
    { name: t('nav.news'), href: `/news` },
    { name: t('nav.lawyers'), href: `/lawyers` },
  ];

  const isActive = (href: string) => {
    if (!mounted) return false;
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
            <Link
            href={`/`}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label={t('hero.title')}
          >
            <Scale className="size-8 text-blue-900" aria-hidden="true" />
            <span className="text-blue-900">{t('hero.title')}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative transition-colors hover:text-blue-700 ${
                    active ? 'text-blue-900' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                  {active && mounted && (
                    <motion.div
                      // keep the layout animation only after mount
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-900"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Login Button */}
            <button
              onClick={() => alert('Login functionality coming soon')}
              className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
              aria-label={t('nav.login')}
            >
              <LogIn className="size-4" aria-hidden="true" />
              <span>{t('nav.login')}</span>
            </button>

            {/* Language Switcher */}
            <div className="flex items-center gap-2 ml-4">
              <button
                onClick={() => setLanguage('bg')}
                className={`px-3 py-1 rounded transition-colors ${
                  language === 'bg'
                    ? 'bg-blue-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label="Switch to Bulgarian"
                aria-pressed={language === 'bg'}
              >
                BG
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded transition-colors ${
                  language === 'en'
                    ? 'bg-blue-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label="Switch to English"
                aria-pressed={language === 'en'}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'bg-blue-50 text-blue-900'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Login Button */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    alert('Login functionality coming soon');
                  }}
                  className="w-full flex items-center justify-center gap-2 mx-4 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
                  aria-label={t('nav.login')}
                >
                  <LogIn className="size-4" aria-hidden="true" />
                  <span>{t('nav.login')}</span>
                </button>

                {/* Mobile Language Switcher */}
                <div className="flex items-center gap-2 px-4 pt-2">
                  <button
                    onClick={() => {
                      setLanguage('bg');
                      setMobileMenuOpen(false);
                    }}
                    className={`flex-1 px-3 py-2 rounded transition-colors ${
                      language === 'bg'
                        ? 'bg-blue-900 text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                    aria-label="Switch to Bulgarian"
                  >
                    BG
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setMobileMenuOpen(false);
                    }}
                    className={`flex-1 px-3 py-2 rounded transition-colors ${
                      language === 'en'
                        ? 'bg-blue-900 text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                    aria-label="Switch to English"
                  >
                    EN
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
