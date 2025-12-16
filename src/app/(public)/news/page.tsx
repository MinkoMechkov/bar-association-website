'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { newsArticles } from '../../../data/mockData';

// Framer Motion variants for consistency
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
    },
  }),
};

export default function NewsPage() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: t('news.all') },
    { value: 'announcement', label: t('news.announcements') },
    { value: 'article', label: t('news.articles') },
    { value: 'event', label: t('news.events') },
  ];

  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'all') return newsArticles;
    return newsArticles.filter((article) => article.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
           {/* Header */}
      <div className="bg-blue-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold"
          >
            {t('news.title')}
          </motion.h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">{t('news.filters')}</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.value
                    ? 'bg-blue-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-pressed={selectedCategory === category.value}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
                <Link href={`/news/${article.slug}`}>
                <div className="relative w-full h-48">
                  <Image
                    src={article.image}
                    alt={article.title[language] || 'News article image'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <time
                      className="text-sm text-gray-500"
                      dateTime={article.date}
                    >
                      {new Date(article.date).toLocaleDateString(
                        language === 'bg' ? 'bg-BG' : 'en-US',
                        {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        }
                      )}
                    </time>
                    <span className="px-2 py-1 bg-blue-100 text-blue-900 text-xs rounded-full">
                      {categories.find((c) => c.value === article.category)?.label}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                    {article.title[language]}
                  </h3>

                  <p className="text-gray-600 mb-5 line-clamp-3">
                    {article.excerpt[language]}
                  </p>

                  <span className="text-blue-900 hover:text-blue-700 inline-flex items-center gap-2 font-medium">
                    {t('news.readMore')}
                    <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <p className="text-gray-600 text-lg">{t('lawyers.noResults')}</p>
          </div>
        )}
      </div>
    </div>
  );
}