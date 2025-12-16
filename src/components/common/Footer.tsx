"use client";

import { useEffect, useState } from 'react';
import { Scale, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';

export function Footer() {
  const { language, t } = useLanguage();
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  // Compute the dynamic year on the client after mount to avoid SSR/CSR mismatch
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scale className="size-8 text-blue-400" aria-hidden="true" />
              <span className="text-white">
                {t('hero.title')}
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">{t('nav.home')}</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={`/about`} 
                  className="text-sm hover:text-white transition-colors"
                >
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/news`} 
                  className="text-sm hover:text-white transition-colors"
                >
                  {t('nav.news')}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/lawyers`} 
                  className="text-sm hover:text-white transition-colors"
                >
                  {t('nav.lawyers')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="size-5 text-blue-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>ул. "Оборище" 12, 1504 София, България</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="size-5 text-blue-400 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+35929801234" className="hover:text-white transition-colors">
                  +359 2 980 1234
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="size-5 text-blue-400 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:info@barassociation.bg" className="hover:text-white transition-colors">
                  info@barassociation.bg
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <p className="text-sm text-white mb-3">{t('footer.followUs')}</p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="size-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="size-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="size-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>
            © {currentYear ?? ''} {t('hero.title')}. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
}
