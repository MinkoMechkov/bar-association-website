'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'bg' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  bg: {
    // Navigation
    'nav.home': 'Начало',
    'nav.about': 'За нас',
    'nav.news': 'Новини',
    'nav.lawyers': 'Адвокати',
    'nav.login': 'Вход за адвокати',
    
    // Hero
    'hero.title': 'Българска адвокатска колегия',
    'hero.subtitle': 'Защитаваме правата, поддържаме справедливостта и професионалната етика',
    'hero.cta': 'Намерете адвокат',
    
    // Services
    'services.title': 'Нашите услуги',
    'services.directory.title': 'Регистър на адвокатите',
    'services.directory.desc': 'Намерете квалифициран адвокат за вашите нужди',
    'services.ethics.title': 'Професионална етика',
    'services.ethics.desc': 'Поддържаме най-високите стандарти на професионална етика',
    'services.training.title': 'Обучение',
    'services.training.desc': 'Непрекъснато професионално развитие и обучение',
    'services.support.title': 'Подкрепа за адвокати',
    'services.support.desc': 'Ресурси и подкрепа за нашите членове',
    
    // News
    'news.latest': 'Последни новини',
    'news.readMore': 'Прочети повече',
    'news.viewAll': 'Виж всички новини',
    'news.title': 'Новини и статии',
    'news.filters': 'Филтри',
    'news.all': 'Всички',
    'news.announcements': 'Обявления',
    'news.articles': 'Статии',
    'news.events': 'Събития',
    'news.backToNews': 'Назад към новините',
    
    // Lawyers
    'lawyers.title': 'Регистър на адвокатите',
    'lawyers.search': 'Търсене по име...',
    'lawyers.filter.city': 'Всички градове',
    'lawyers.filter.all': 'Всички',
    'lawyers.viewProfile': 'Виж профил',
    'lawyers.results': 'резултата',
    'lawyers.noResults': 'Не са намерени адвокати',
    'lawyers.contact': 'Контакти',
    'lawyers.office': 'Офис',
    'lawyers.specializations': 'Специализации',
    'lawyers.biography': 'Биография',
    'lawyers.schedule': 'Запазване на час',
    'lawyers.personalNumber': 'Личен номер',
    
    // About
    'about.title': 'За нас',
    'about.mission.title': 'Нашата мисия',
    'about.mission.content': 'Българската адвокатска колегия е професионална организация, която обединява адвокатите в България. Нашата мисия е да защитаваме правата и интересите на адвокатите, да поддържаме професионалната етика и да гарантираме качествени правни услуги на гражданите.',
    'about.history.title': 'История',
    'about.history.content': 'Основана през 1885 г., Българската адвокатска колегия има богата история на защита на правосъдието и професионалната етика. През годините организацията е израснала и се е развила, адаптирайки се към променящите се нужди на обществото и правната система.',
    'about.leadership.title': 'Ръководство',
    'about.contact.title': 'Свържете се с нас',
    'about.contact.address': 'Адрес',
    'about.contact.phone': 'Телефон',
    'about.contact.email': 'Имейл',
    
    // Footer
    'footer.contact': 'Контакти',
    'footer.rights': 'Всички права запазени',
    'footer.followUs': 'Последвайте ни',
    
    // Common
    'common.loading': 'Зареждане...',
    'common.error': 'Възникна грешка',
    'common.page': 'Страница',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.news': 'News',
    'nav.lawyers': 'Lawyers',
    'nav.login': 'Lawyer Login',
    
    // Hero
    'hero.title': 'Bulgarian Bar Association',
    'hero.subtitle': 'Protecting rights, upholding justice, and professional ethics',
    'hero.cta': 'Find a Lawyer',
    
    // Services
    'services.title': 'Our Services',
    'services.directory.title': 'Lawyer Directory',
    'services.directory.desc': 'Find a qualified lawyer for your needs',
    'services.ethics.title': 'Professional Ethics',
    'services.ethics.desc': 'Maintaining the highest standards of professional ethics',
    'services.training.title': 'Training',
    'services.training.desc': 'Continuous professional development and education',
    'services.support.title': 'Lawyer Support',
    'services.support.desc': 'Resources and support for our members',
    
    // News
    'news.latest': 'Latest News',
    'news.readMore': 'Read more',
    'news.viewAll': 'View all news',
    'news.title': 'News & Articles',
    'news.filters': 'Filters',
    'news.all': 'All',
    'news.announcements': 'Announcements',
    'news.articles': 'Articles',
    'news.events': 'Events',
    'news.backToNews': 'Back to News',
    
    // Lawyers
    'lawyers.title': 'Lawyer Directory',
    'lawyers.search': 'Search by name...',
    'lawyers.filter.city': 'All Cities',
    'lawyers.filter.all': 'All',
    'lawyers.viewProfile': 'View Profile',
    'lawyers.results': 'results',
    'lawyers.noResults': 'No lawyers found',
    'lawyers.contact': 'Contact',
    'lawyers.office': 'Office',
    'lawyers.specializations': 'Specializations',
    'lawyers.biography': 'Biography',
    'lawyers.schedule': 'Schedule Appointment',
    'lawyers.personalNumber': 'Personal Number',
    
    // About
    'about.title': 'About Us',
    'about.mission.title': 'Our Mission',
    'about.mission.content': 'The Bulgarian Bar Association is a professional organization that unites lawyers in Bulgaria. Our mission is to protect the rights and interests of lawyers, maintain professional ethics, and ensure quality legal services for citizens.',
    'about.history.title': 'History',
    'about.history.content': 'Founded in 1885, the Bulgarian Bar Association has a rich history of defending justice and professional ethics. Over the years, the organization has grown and evolved, adapting to the changing needs of society and the legal system.',
    'about.leadership.title': 'Leadership',
    'about.contact.title': 'Contact Us',
    'about.contact.address': 'Address',
    'about.contact.phone': 'Phone',
    'about.contact.email': 'Email',
    
    // Footer
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved',
    'footer.followUs': 'Follow Us',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.page': 'Page',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('bg');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}