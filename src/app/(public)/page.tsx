'use client';

import Link from 'next/link';
import { useLanguage } from '../../../src/contexts/LanguageContext';
import { newsArticles } from '../../data/mockData';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Scale as ScaleIcon, BookOpen, Award } from 'lucide-react';

export default function HomePage() {
  const { language, t } = useLanguage();

  const formatDateDeterministic = (isoDate: string) => {
    const d = new Date(isoDate);
    const pad = (n: number) => String(n).padStart(2, '0');
    // Use UTC getters to avoid server/client timezone differences during SSR/CSR
    return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
  };

  const latestNews = newsArticles.slice(0, 3);

  const services = [
    {
      icon: Users,
      title: t('services.directory.title'),
      description: t('services.directory.desc'),
      href: `/lawyers`,
    },
    {
      icon: ScaleIcon,
      title: t('services.ethics.title'),
      description: t('services.ethics.desc'),
    },
    {
      icon: BookOpen,
      title: t('services.training.title'),
      description: t('services.training.desc'),
    },
    {
      icon: Award,
      title: t('services.support.title'),
      description: t('services.support.desc'),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">{t('hero.title')}</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">{t('hero.subtitle')}</p>
            <Link
              href={`/lawyers`}
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
              {t('hero.cta')}
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">{t('services.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}>
                {service.href ? (
                  <Link
                    href={service.href}
                    className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-3 bg-blue-100 rounded-lg mb-4">
                        <service.icon className="size-8 text-blue-900" aria-hidden="true" />
                      </div>
                      <h3 className="mb-3">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </Link>
                ) : (
                  <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-3 bg-blue-100 rounded-lg mb-4">
                        <service.icon className="size-8 text-blue-900" aria-hidden="true" />
                      </div>
                      <h3 className="mb-3">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl">{t('news.latest')}</h2>
            <Link
              href={`/news`}
              className="text-blue-900 hover:text-blue-700 flex items-center gap-2 transition-colors">
              {t('news.viewAll')}
              <ArrowRight className="size-5" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <Link href={`/news/${article.slug}`}>
                  <img src={article.image} alt="" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <time className="text-sm text-gray-500" dateTime={article.date}>
                      {formatDateDeterministic(article.date)}
                    </time>
                    <h3 className="mt-2 mb-3">{article.title[language]}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt[language]}</p>
                    <span className="text-blue-900 hover:text-blue-700 inline-flex items-center gap-2">
                      {t('news.readMore')}
                      <ArrowRight className="size-4" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
