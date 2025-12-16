'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { lawyers } from '../../../data/mockData';

const ITEMS_PER_PAGE = 9;

export default function LawyersPage() {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedLetter, setSelectedLetter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);

  // Get unique cities
  const cities = useMemo(() => {
    const uniqueCities = Array.from(new Set(lawyers.map(l => l.city)));
    return uniqueCities.sort();
  }, []);

  // Generate alphabet
  const alphabet = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЬЮЯ'.split('');

  // Filter lawyers
  const filteredLawyers = useMemo(() => {
    let filtered = lawyers;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(lawyer =>
        lawyer.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // City filter
    if (selectedCity !== 'all') {
      filtered = filtered.filter(lawyer => lawyer.city === selectedCity);
    }

    // Letter filter
    if (selectedLetter !== 'all') {
      filtered = filtered.filter(lawyer =>
        lawyer.name.charAt(0).toUpperCase() === selectedLetter
      );
    }

    return filtered;
  }, [searchQuery, selectedCity, selectedLetter]);

  // Pagination
  const totalPages = Math.ceil(filteredLawyers.length / ITEMS_PER_PAGE);
  const paginatedLawyers = filteredLawyers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCity, selectedLetter]);

  return (
    <div className="min-h-screen bg-gray-50">
     
      {/* Header */}
      <div className="bg-blue-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl"
          >
            {t('lawyers.title')}
          </motion.h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          {/* Search Bar */}
          <div className="mb-6">
            <label htmlFor="search" className="sr-only">
              {t('lawyers.search')}
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" aria-hidden="true" />
              <input
                id="search"
                type="text"
                placeholder={t('lawyers.search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* City Filter */}
          <div className="mb-6">
            <label htmlFor="city-filter" className="block mb-2 text-gray-700">
              {t('lawyers.filter.city')}
            </label>
            <select
              id="city-filter"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full md:w-64 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">{t('lawyers.filter.all')}</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Alphabet Filter */}
          <div>
            <p className="mb-3 text-gray-700">{t('lawyers.search')}</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedLetter('all')}
                className={`px-3 py-2 rounded transition-colors ${
                  selectedLetter === 'all'
                    ? 'bg-blue-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-pressed={selectedLetter === 'all'}
              >
                {t('lawyers.filter.all')}
              </button>
              {alphabet.map(letter => (
                <button
                  key={letter}
                  onClick={() => setSelectedLetter(letter)}
                  className={`px-3 py-2 rounded transition-colors ${
                    selectedLetter === letter
                      ? 'bg-blue-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-pressed={selectedLetter === letter}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600">
          {filteredLawyers.length} {t('lawyers.results')}
        </div>

        {/* Lawyers Grid */}
        {paginatedLawyers.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {paginatedLawyers.map((lawyer, index) => (
                <motion.article
                  key={lawyer.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src={lawyer.photo}
                        alt=""
                        className="size-20 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h2 className="mb-2 truncate">
                          {lawyer.name}
                        </h2>
                        <p className="text-sm text-gray-600">
                          {lawyer.personalNumber}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <MapPin className="size-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span>
                          {lawyer.city}, {lawyer.address}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="size-4 flex-shrink-0" aria-hidden="true" />
                        <a href={`tel:${lawyer.phone}`} className="hover:text-blue-900">
                          {lawyer.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="size-4 flex-shrink-0" aria-hidden="true" />
                        <a href={`mailto:${lawyer.email}`} className="hover:text-blue-900 truncate">
                          {lawyer.email}
                        </a>
                      </div>
                    </div>

                    <Link
                      href={`/lawyers/${lawyer.slug}`}
                      className="block w-full text-center bg-blue-900 text-white px-4 py-3 rounded-lg hover:bg-blue-800 transition-colors"
                    >
                      {t('lawyers.viewProfile')}
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded transition-colors ${
                      currentPage === page
                        ? 'bg-blue-900 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                    aria-label={`${t('common.page')} ${page}`}
                    aria-current={currentPage === page ? 'page' : undefined}
                  >
                    {page}
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl">
            <p className="text-gray-600 text-lg">{t('lawyers.noResults')}</p>
          </div>
        )}
      </div>
    </div>
  );
}