export interface Lawyer {
  id: string;
  slug: string;
  name: string;
  personalNumber: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  photo: string;
  biography: {
    bg: string;
    en: string;
  };
  specializations: {
    bg: string[];
    en: string[];
  };
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: {
    bg: string;
    en: string;
  };
  excerpt: {
    bg: string;
    en: string;
  };
  content: {
    bg: string;
    en: string;
  };
  category: 'announcement' | 'article' | 'event';
  date: string;
  image: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  position: {
    bg: string;
    en: string;
  };
  photo: string;
}

export const lawyers: Lawyer[] = [
  {
    id: '1',
    slug: 'ivan-petrov',
    name: 'Иван Петров',
    personalNumber: 'BG12345',
    city: 'София',
    address: 'бул. "Витоша" 15, ет. 3',
    phone: '+359 88 123 4567',
    email: 'ivan.petrov@law.bg',
    photo: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400',
    biography: {
      bg: 'Иван Петров е адвокат с над 15 години опит в наказателното право. Завършил е право в Софийския университет и има специализация в международно наказателно право.',
      en: 'Ivan Petrov is a lawyer with over 15 years of experience in criminal law. He graduated from Sofia University and has a specialization in international criminal law.',
    },
    specializations: {
      bg: ['Наказателно право', 'Международно право', 'Корпоративно право'],
      en: ['Criminal Law', 'International Law', 'Corporate Law'],
    },
  },
  {
    id: '2',
    slug: 'elena-georgieva',
    name: 'Елена Георгиева',
    personalNumber: 'BG12346',
    city: 'Пловдив',
    address: 'ул. "Цар Борис III" 23',
    phone: '+359 88 234 5678',
    email: 'elena.georgieva@law.bg',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    biography: {
      bg: 'Елена Георгиева е специализирана в семейно и наследствено право. Има богат опит в медиация и разрешаване на семейни спорове.',
      en: 'Elena Georgieva specializes in family and inheritance law. She has extensive experience in mediation and resolving family disputes.',
    },
    specializations: {
      bg: ['Семейно право', 'Наследствено право', 'Медиация'],
      en: ['Family Law', 'Inheritance Law', 'Mediation'],
    },
  },
  {
    id: '3',
    slug: 'georgi-dimitrov',
    name: 'Георги Димитров',
    personalNumber: 'BG12347',
    city: 'Варна',
    address: 'бул. "Осми Приморски Полк" 67',
    phone: '+359 88 345 6789',
    email: 'georgi.dimitrov@law.bg',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    biography: {
      bg: 'Георги Димитров е експерт в търговско и корпоративно право с фокус върху M&A сделки и корпоративно управление.',
      en: 'Georgi Dimitrov is an expert in commercial and corporate law with a focus on M&A transactions and corporate governance.',
    },
    specializations: {
      bg: ['Търговско право', 'Корпоративно право', 'M&A'],
      en: ['Commercial Law', 'Corporate Law', 'M&A'],
    },
  },
  {
    id: '4',
    slug: 'maria-ivanova',
    name: 'Мария Иванова',
    personalNumber: 'BG12348',
    city: 'София',
    address: 'ул. "Граф Игнатиев" 42',
    phone: '+359 88 456 7890',
    email: 'maria.ivanova@law.bg',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    biography: {
      bg: 'Мария Иванова е специализирана в трудово право и защита на правата на работниците. Има опит в колективни трудови спорове.',
      en: 'Maria Ivanova specializes in labor law and workers\' rights protection. She has experience in collective labor disputes.',
    },
    specializations: {
      bg: ['Трудово право', 'Социално осигуряване', 'Защита на потребителите'],
      en: ['Labor Law', 'Social Security', 'Consumer Protection'],
    },
  },
  {
    id: '5',
    slug: 'alexander-todorov',
    name: 'Александър Тодоров',
    personalNumber: 'BG12349',
    city: 'Бургас',
    address: 'ул. "Александровска" 89',
    phone: '+359 88 567 8901',
    email: 'alexander.todorov@law.bg',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    biography: {
      bg: 'Александър Тодоров е адвокат с опит в имуществено право и сделки с недвижими имоти. Консултира клиенти при покупко-продажба на имоти.',
      en: 'Alexander Todorov is a lawyer experienced in property law and real estate transactions. He advises clients on property purchases and sales.',
    },
    specializations: {
      bg: ['Имуществено право', 'Недвижими имоти', 'Строително право'],
      en: ['Property Law', 'Real Estate', 'Construction Law'],
    },
  },
  {
    id: '6',
    slug: 'stefka-angelova',
    name: 'Стефка Ангелова',
    personalNumber: 'BG12350',
    city: 'София',
    address: 'бул. "Патриарх Евтимий" 31',
    phone: '+359 88 678 9012',
    email: 'stefka.angelova@law.bg',
    photo: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400',
    biography: {
      bg: 'Стефка Ангелова е специализирана в интелектуална собственост и авторско право. Защитава правата на автори и изобретатели.',
      en: 'Stefka Angelova specializes in intellectual property and copyright law. She protects the rights of authors and inventors.',
    },
    specializations: {
      bg: ['Интелектуална собственост', 'Авторско право', 'Патентно право'],
      en: ['Intellectual Property', 'Copyright Law', 'Patent Law'],
    },
  },
  {
    id: '7',
    slug: 'dimitar-krastev',
    name: 'Димитър Кръстев',
    personalNumber: 'BG12351',
    city: 'Пловдив',
    address: 'ул. "Съединение" 12',
    phone: '+359 88 789 0123',
    email: 'dimitar.krastev@law.bg',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    biography: {
      bg: 'Димитър Кръстев е адвокат в областта на данъчното право и консултира фирми по въпроси на данъчното облагане.',
      en: 'Dimitar Krastev is a lawyer in the field of tax law and advises companies on taxation matters.',
    },
    specializations: {
      bg: ['Данъчно право', 'Финансово право', 'Административно право'],
      en: ['Tax Law', 'Financial Law', 'Administrative Law'],
    },
  },
  {
    id: '8',
    slug: 'nikolina-mihaylova',
    name: 'Николина Михайлова',
    personalNumber: 'BG12352',
    city: 'Варна',
    address: 'бул. "Владислав Варненчик" 145',
    phone: '+359 88 890 1234',
    email: 'nikolina.mihaylova@law.bg',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400',
    biography: {
      bg: 'Николина Михайлова е специализирана в застрахователно право и обезщетения за вреди. Представлява клиенти срещу застрахователни компании.',
      en: 'Nikolina Mihaylova specializes in insurance law and compensation for damages. She represents clients against insurance companies.',
    },
    specializations: {
      bg: ['Застрахователно право', 'Обезщетения за вреди', 'Гражданско право'],
      en: ['Insurance Law', 'Compensation for Damages', 'Civil Law'],
    },
  },
];

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    slug: 'new-legal-framework-2025',
    title: {
      bg: 'Нова правна рамка за адвокатската професия влиза в сила през 2025',
      en: 'New Legal Framework for the Legal Profession Comes into Effect in 2025',
    },
    excerpt: {
      bg: 'Парламентът прие нови правила, които модернизират адвокатската практика и укрепват професионалната етика.',
      en: 'Parliament has adopted new rules that modernize legal practice and strengthen professional ethics.',
    },
    content: {
      bg: 'Българският парламент прие нова правна рамка, която цели модернизиране на адвокатската професия. Промените включват по-строги етични стандарти, задължително непрекъснато обучение и нови правила за дигитализация на правните услуги. Очаква се реформата да влезе в сила от януари 2025 година и да донесе значителни подобрения в качеството на правните услуги.',
      en: 'The Bulgarian Parliament has adopted a new legal framework aimed at modernizing the legal profession. The changes include stricter ethical standards, mandatory continuing education, and new rules for digitalization of legal services. The reform is expected to come into force in January 2025 and bring significant improvements to the quality of legal services.',
    },
    category: 'announcement',
    date: '2024-12-01',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
  },
  {
    id: '2',
    slug: 'digital-transformation-law',
    title: {
      bg: 'Дигитална трансформация в правната система',
      en: 'Digital Transformation in the Legal System',
    },
    excerpt: {
      bg: 'Как технологиите променят начина, по който адвокатите предоставят услуги на клиентите си.',
      en: 'How technology is changing the way lawyers provide services to their clients.',
    },
    content: {
      bg: 'Дигиталната трансформация е неизбежен процес, който вече променя правната индустрия. От електронни досиета до виртуални съдебни заседания, технологиите предлагат нови възможности за по-ефективна работа. Този материал разглежда основните тенденции в дигитализацията на правните услуги и как българските адвокати могат да се адаптират към новата реалност.',
      en: 'Digital transformation is an inevitable process that is already changing the legal industry. From electronic files to virtual court hearings, technology offers new opportunities for more efficient work. This article examines key trends in the digitalization of legal services and how Bulgarian lawyers can adapt to the new reality.',
    },
    category: 'article',
    date: '2024-11-15',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
  },
  {
    id: '3',
    slug: 'annual-conference-2024',
    title: {
      bg: 'Годишна конференция на адвокатската колегия 2024',
      en: 'Annual Bar Association Conference 2024',
    },
    excerpt: {
      bg: 'Присъединете се към нас на 20 декември за годишната конференция, посветена на бъдещето на правната професия.',
      en: 'Join us on December 20th for the annual conference dedicated to the future of the legal profession.',
    },
    content: {
      bg: 'Българската адвокатска колегия организира своята годишна конференция на 20 декември 2024 в хотел "Арена ди Сердика", София. Темата на тазгодишната конференция е "Бъдещето на правната професия в дигиталната ера". Ще имаме международни лектори, панелни дискусии и networking възможности. Регистрацията е задължителна.',
      en: 'The Bulgarian Bar Association is organizing its annual conference on December 20, 2024 at Arena di Serdica Hotel, Sofia. This year\'s conference theme is "The Future of the Legal Profession in the Digital Era". We will have international speakers, panel discussions, and networking opportunities. Registration is required.',
    },
    category: 'event',
    date: '2024-11-20',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
  },
  {
    id: '4',
    slug: 'ethics-guidelines-update',
    title: {
      bg: 'Актуализация на етичните насоки за адвокати',
      en: 'Update of Ethical Guidelines for Lawyers',
    },
    excerpt: {
      bg: 'Новите етични насоки отразяват съвременните предизвикателства пред адвокатската професия.',
      en: 'The new ethical guidelines reflect contemporary challenges facing the legal profession.',
    },
    content: {
      bg: 'Върховният адвокатски съвет одобри актуализирани етични насоки, които отразяват съвременните предизвикателства пред професията. Промените включват препоръки относно комуникацията в социалните мрежи, конфликт на интереси в дигиталната ера и защита на личните данни на клиентите. Всички членове на колегията са задължени да се запознаят с новите насоки до края на годината.',
      en: 'The Supreme Bar Council has approved updated ethical guidelines that reflect contemporary challenges facing the profession. The changes include recommendations regarding social media communication, conflicts of interest in the digital era, and protection of client personal data. All members of the Bar are required to familiarize themselves with the new guidelines by the end of the year.',
    },
    category: 'announcement',
    date: '2024-10-10',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
  },
];

export const leadership: LeadershipMember[] = [
  {
    id: '1',
    name: 'Петър Иванов',
    position: {
      bg: 'Председател на Адвокатската колегия',
      en: 'Chairman of the Bar Association',
    },
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
  },
  {
    id: '2',
    name: 'Анна Петкова',
    position: {
      bg: 'Заместник-председател',
      en: 'Vice Chairman',
    },
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
  },
  {
    id: '3',
    name: 'Стоян Георгиев',
    position: {
      bg: 'Секретар',
      en: 'Secretary',
    },
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
  },
  {
    id: '4',
    name: 'Радка Николова',
    position: {
      bg: 'Главен счетоводител',
      en: 'Chief Accountant',
    },
    photo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400',
  },
];
