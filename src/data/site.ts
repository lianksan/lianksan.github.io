import type { ImageMetadata } from 'astro';
import aliasApp from '../assets/products/alias.png';
import mononoiseApp from '../assets/products/mononoise.png';
import qrMachineApp from '../assets/products/qr-machine.png';
import proportionApp from '../assets/products/proportion.png';
import brainyApp from '../assets/products/brainy.png';

// TODO: ссылки, помеченные '#', в макете не указаны — заменить на реальные.
export const person = {
  firstName: 'Paulik',
  lastName: 'Liankevich',
  email: 'p_lenkevich@gmail.com',
};

export const nav = {
  home: '/',
  cases: '/cases',
  shots: '/shots',
  products: '/products',
};

type Product = {
  name: string;
  /** Без ссылки продукт показывается полупрозрачным, как ещё не вышедший (Brainy) */
  href?: string;
  description: string;
  category: 'ios' | 'web' | 'resources';
  /** Иконка на странице Products: картинка из src/assets или путь в /public */
  appIcon: ImageMetadata | string;
  /** Маленькая иконка в сайдбаре; без неё продукт в сайдбаре не показывается */
  sidebarIcon?: string;
  /** У эмодзи-иконки Alias рамка 26×20 вместо 20×20 */
  wideIcon?: boolean;
};

export const products: Product[] = [
  {
    name: 'Alias w Ali',
    href: 'https://apps.apple.com/lt/app/alias-w-ali-guess-the-word/id6751412417',
    description: 'Party simple card game',
    category: 'ios',
    appIcon: aliasApp,
    sidebarIcon: '/icons/alias.svg',
    wideIcon: true,
  },
  {
    name: 'Mononoise',
    href: 'https://apps.apple.com/lt/app/mononoise/id6748365867',
    description: 'Mind-calming sounds',
    category: 'ios',
    appIcon: mononoiseApp,
    // PNG в 3x из Figma: шумовой фильтр SVG браузер растрирует мыльно
    sidebarIcon: '/icons/mononoise.png',
  },
  {
    name: 'Brainy',
    description: 'Note taking app',
    category: 'ios',
    appIcon: brainyApp,
  },
  {
    name: 'QR Machine',
    href: 'https://lianksan.github.io/QR-Machine/',
    description: 'Fully free QR generator',
    category: 'web',
    appIcon: qrMachineApp,
    sidebarIcon: '/icons/qr.svg',
  },
  {
    name: 'Proportion',
    href: 'https://lianksan.github.io/Proportion/',
    // В макете «calculaction» — похоже на опечатку
    description: 'Fast ratio calculation',
    category: 'web',
    appIcon: proportionApp,
  },
  {
    name: 'Lottie icons',
    href: 'https://iconscout.com/contributors/pavel-lenkevich/lottie-animations/free-icons-animation-collection_14488',
    description: 'Few animated icons packs',
    category: 'resources',
    appIcon: '/icons/lottiefiles.svg',
  },
];

export const contacts = [
  { label: 'Buy me a coffee', href: '#' },
  { label: 'Telegram', href: '#' },
  { label: 'GitHub', href: '#' },
];

type TimelineEntry =
  | { kind: 'minor'; date: string; text: string }
  | { kind: 'major'; date: string; title: string; text: string[] };

export const timeline: TimelineEntry[] = [
  { kind: 'minor', date: '∼2016', text: 'Was playing with Photoshop and HTML/CSS in high school' },
  { kind: 'minor', date: '2018', text: 'Took on freelance projects related to graphics and websites' },
  {
    kind: 'major',
    date: '2019–2021',
    title: 'Web-designer at WebCat',
    text: [
      'Created advertising materials and simple websites for a lead generation company: banners, posters, print, landing & quiz pages, and business cards.',
      'Gained hands-on experience with After Effects to produce dynamic banners',
    ],
  },
  {
    kind: 'major',
    date: '2021–2022',
    title: 'UI/UX Designer at Zetreex',
    text: [
      'Designed in-house mobile apps: competitor and user research, user flows and app architecture, interactive prototypes, design systems, and promo materials for app stores',
    ],
  },
  { kind: 'minor', date: '2023', text: 'Became interested in iOS development' },
  {
    kind: 'major',
    date: '2022–....',
    title: 'UX/UI Designer at Wargaming',
    text: [
      'Design interfaces for the PC game World of Tanks, focusing on complex in-game UI systems and live-service features',
    ],
  },
  { kind: 'minor', date: '2025', text: 'Developed and launched a couple of simple iOS-apps' },
];
