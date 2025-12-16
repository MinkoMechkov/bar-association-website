'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar } from 'lucide-react';
import { useLanguage } from '../../../../../src/contexts/LanguageContext';
import { newsArticles } from '../../../../data/mockData';
import { notFound } from 'next/navigation';

export default function NewsArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const { language, t } = useLanguage();

  const article = newsArticles.find(a => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Get category label
  const categoryLabels = {
    announcement: t('news.announcements'),
    article: t('news.articles'),
    event: t('news.events'),
  };

  return (
    <div className="min-h-screen bg-gray-50">
             
      {/* Header */}
      <div className="bg-blue-900 text-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href={`/news`}
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="size-5" />
            {t('news.backToNews')}
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-sm overflow-hidden"
        >
          {/* Featured Image */}
          <img
            src={article.image}
            alt={article.title[language]} // Improved alt for accessibility
            className="w-full h-64 md:h-96 object-cover"
          />

          <div className="p-8 md:p-12">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="size-5" aria-hidden="true" />
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString(
                    language === 'bg' ? 'bg-BG' : 'en-US',
                    {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    }
                  )}
                </time>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm">
                {categoryLabels[article.category]}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl mb-6">
              {article.title[language]}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {article.excerpt[language]}
            </p>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {article.content[language]}
              </p>
            </div>
          </div>
        </motion.article>

        {/* Related Articles */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
          aria-labelledby="related-heading"
        >
          <h2 id="related-heading" className="text-2xl mb-6">
            {language === 'bg' ? 'Още новини' : 'More News'}
          </h2>
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsArticles
              .filter(a => a.id !== article.id)
              .slice(0, 2)
              .map(relatedArticle => (
                <Link
                  key={relatedArticle.id}
                  href={`/news/${relatedArticle.slug}`}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={relatedArticle.image}
                    alt={relatedArticle.title[language]} // Improved alt
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <time className="text-sm text-gray-500" dateTime={relatedArticle.date}>
                      {new Date(relatedArticle.date).toLocaleDateString(
                        language === 'bg' ? 'bg-BG' : 'en-US',
                        {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        }
                      )}
                    </time>
                    <h3 className="mt-2 mb-2">
                      {relatedArticle.title[language]}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {relatedArticle.excerpt[language]}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}