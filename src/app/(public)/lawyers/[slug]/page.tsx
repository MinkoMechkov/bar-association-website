'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Phone, Mail, Briefcase, User } from 'lucide-react';
import { useLanguage } from '../../../../../src/contexts/LanguageContext';
import { lawyers } from '../../../../data/mockData';

import { notFound } from 'next/navigation';

export default function LawyerProfilePage() {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();

  const lawyer = lawyers.find(l => l.slug === slug);

  if (!lawyer) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Header */}
      <div className="bg-blue-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/lawyers"
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="size-5" />
            {t('lawyers.title')}
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl"
          >
            {lawyer.name}
          </motion.h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <img
                  src={lawyer.photo}
                  alt=""
                  className="size-32 rounded-full object-cover mx-auto sm:mx-0"
                />
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-2xl mb-2">{lawyer.name}</h2>
                  <p className="text-gray-600 mb-4">
                    {t('lawyers.personalNumber')}: {lawyer.personalNumber}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {lawyer.specializations[language].slice(0, 3).map((spec, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Biography */}
            {lawyer.biography[language] && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl shadow-sm p-6"
                aria-labelledby="biography-heading"
              >
                <div className="flex items-center gap-2 mb-4">
                  <User className="size-6 text-blue-900" aria-hidden="true" />
                  <h2 id="biography-heading">{t('lawyers.biography')}</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {lawyer.biography[language]}
                </p>
              </motion.section>
            )}

            {/* Specializations */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-sm p-6"
              aria-labelledby="specializations-heading"
            >
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="size-6 text-blue-900" aria-hidden="true" />
                <h2 id="specializations-heading">{t('lawyers.specializations')}</h2>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {lawyer.specializations[language].map((spec, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <span className="size-1.5 bg-blue-900 rounded-full" aria-hidden="true" />
                    {spec}
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Optional Scheduling iFrame Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow-sm p-6"
              aria-labelledby="schedule-heading"
            >
              <h2 id="schedule-heading" className="mb-4">{t('lawyers.schedule')}</h2>
              <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <p className="text-gray-600">
                  {language === 'bg'
                    ? 'Тук може да се интегрира система за онлайн записване (напр. Legapio)'
                    : 'Online scheduling system can be integrated here (e.g., Legapio)'}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {language === 'bg'
                    ? 'Пример: <iframe src="https://legapio.com/..." />'
                    : 'Example: <iframe src="https://legapio.com/..." />'}
                </p>
              </div>
            </motion.section>
          </div>

          {/* Sidebar - Contact Information */}
          <div className="lg:col-span-1">
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm p-6 sticky top-24"
              aria-labelledby="contact-heading"
            >
              <h2 id="contact-heading" className="mb-6">{t('lawyers.contact')}</h2>

              <div className="space-y-4">
                {/* Office */}
                <div>
                  <div className="flex items-center gap-2 text-blue-900 mb-2">
                    <MapPin className="size-5" aria-hidden="true" />
                    <h3>{t('lawyers.office')}</h3>
                  </div>
                  <p className="text-gray-700 pl-7">
                    {lawyer.city}<br />
                    {lawyer.address}
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-center gap-2 text-blue-900 mb-2">
                    <Phone className="size-5" aria-hidden="true" />
                    <h3>{t('about.contact.phone')}</h3>
                  </div>
                  <a
                    href={`tel:${lawyer.phone}`}
                    className="text-gray-700 hover:text-blue-900 transition-colors pl-7 block"
                  >
                    {lawyer.phone}
                  </a>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center gap-2 text-blue-900 mb-2">
                    <Mail className="size-5" aria-hidden="true" />
                    <h3>{t('about.contact.email')}</h3>
                  </div>
                  <a
                    href={`mailto:${lawyer.email}`}
                    className="text-gray-700 hover:text-blue-900 transition-colors pl-7 block break-words"
                  >
                    {lawyer.email}
                  </a>
                </div>
              </div>

              {/* Contact Button */}
              <a
                href={`mailto:${lawyer.email}`}
                className="block w-full text-center bg-blue-900 text-white px-4 py-3 rounded-lg hover:bg-blue-800 transition-colors mt-6"
              >
                {language === 'bg' ? 'Свържете се' : 'Contact'}
              </a>
            </motion.aside>
          </div>
        </div>
      </div>
    </div>
  );
}