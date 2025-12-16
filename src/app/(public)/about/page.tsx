'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { leadership } from '../../../data/mockData';

export default function AboutPage() {
  const { language, t } = useLanguage();

  return (
    <>
      {/* Header */}
      <div className="bg-blue-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl">{t('about.title')}</h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-sm p-8"
          aria-labelledby="mission-heading"
        >
          <h2 id="mission-heading" className="text-2xl md:text-3xl mb-4">
            {t('about.mission.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {t('about.mission.content')}
          </p>
        </motion.section>

        {/* History Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm p-8"
          aria-labelledby="history-heading"
        >
          <h2 id="history-heading" className="text-2xl md:text-3xl mb-4">
            {t('about.history.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {t('about.history.content')}
          </p>
        </motion.section>

        {/* Leadership Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm p-8"
          aria-labelledby="leadership-heading"
        >
          <h2 id="leadership-heading" className="text-2xl md:text-3xl mb-8">
            {t('about.leadership.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="size-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.position[language]}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-xl shadow-sm p-8"
          aria-labelledby="contact-heading"
        >
          <h2 id="contact-heading" className="text-2xl md:text-3xl mb-8">
            {t('about.contact.title')}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 text-blue-900 mb-2">
                  <MapPin className="size-6" aria-hidden="true" />
                  <h3>{t('about.contact.address')}</h3>
                </div>
                <p className="text-gray-700 pl-9">
                  ул. "Оборище" 12
                  <br />
                  1504 София
                  <br />
                  България
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 text-blue-900 mb-2">
                  <Phone className="size-6" aria-hidden="true" />
                  <h3>{t('about.contact.phone')}</h3>
                </div>
                <a
                  href="tel:+35929801234"
                  className="text-gray-700 hover:text-blue-900 transition-colors pl-9 block"
                >
                  +359 2 980 1234
                </a>
              </div>

              <div>
                <div className="flex items-center gap-3 text-blue-900 mb-2">
                  <Mail className="size-6" aria-hidden="true" />
                  <h3>{t('about.contact.email')}</h3>
                </div>
                <a
                  href="mailto:info@barassociation.bg"
                  className="text-gray-700 hover:text-blue-900 transition-colors pl-9 block"
                >
                  info@barassociation.bg
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="h-80 lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.542606775796!2d23.330573!3d42.697866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa856d8c0c963b%3A0x5ac8e85aa3c27b9a!2z0YPQuy4g4oCe0J7QsdC-0YDQuNGJ0LUi!5e0!3m2!1sen!2sbg!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={language === 'bg' ? 'Карта на офиса' : 'Office Map'}
                className="rounded-lg"
              />
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
