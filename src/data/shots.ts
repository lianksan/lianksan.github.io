import type { ImageMetadata } from 'astro';

import wotSelector19 from '../assets/shots/wot_selector_19.mp4';
import wotSelector21 from '../assets/shots/wot_selector_21.png';
import wotSelectorDuke from '../assets/shots/wot_selector_duke.png';
import wotBgPurchasing from '../assets/shots/wot_bg_purchasing.png';
import qrMachine from '../assets/shots/qr-machine.mp4';
import wotLb1 from '../assets/shots/wot_lb_1.png';
import wotLb2 from '../assets/shots/wot_lb_2.png';
import wotLb3 from '../assets/shots/wot_lb_3.png';
import wotUmg2 from '../assets/shots/wot_umg_2.mp4';
import wotUmg3 from '../assets/shots/wot_umg_3.mp4';
import wotUmg4 from '../assets/shots/wot_umg_4.mp4';
import ufl1 from '../assets/shots/ufl-1.mp4';
import ufl2 from '../assets/shots/ufl-2.mp4';
import lottieEco from '../assets/shots/lottie_eco.mp4';
import lottieLogos from '../assets/shots/lottie_logos.mp4';
import lottieWeather from '../assets/shots/lottie_weather.mp4';
import wotTest from '../assets/shots/wot_test.png';
import panda1 from '../assets/shots/panda_1.png';
import panda2 from '../assets/shots/panda_2.png';
import mathApp from '../assets/shots/math_app.png';
import glass3d from '../assets/shots/3d_glass.png';
import unsplash from '../assets/shots/unsplash.mp4';
import pixelDonut from '../assets/shots/pixel_donut.gif';
import pixelWhale from '../assets/shots/pixel_whale.gif';
import converter from '../assets/shots/converter.mp4';
import china1 from '../assets/shots/china1.png';
import china2 from '../assets/shots/china2.png';
import rdApp from '../assets/shots/rd-app.png';

// Первые кадры видео (ffmpeg): показываются, пока само видео не загрузилось
const posters = import.meta.glob<{ default: ImageMetadata }>('../assets/shots/posters/*.jpg', { eager: true });
const poster = (name: string) => posters[`../assets/shots/posters/${name}.jpg`].default;

/**
 * Плитка ленты. `src` — картинка (ImageMetadata) или видео (строка-URL после импорта mp4).
 * `ratio` — пропорции контейнера из Figma, `span` — сколько колонок из 6 занимает плитка.
 */
export type ShotMedia = {
  src: ImageMetadata | string;
  /** Для видео: первый кадр, который виден до загрузки */
  poster?: ImageMetadata;
  ratio: string;
  alt: string;
  span?: number;
};

/** Подпись под всей работой или по подписи под колонками (как у Math app / Blender). */
export type ShotCaption = string | { text: string; span: number }[];

export type Shot = { caption?: ShotCaption; rows: ShotMedia[][] };
export type ShotSection = { title: string; shots: Shot[] };

const CHAPTER_SELECTION =
  'Updated and optimised the chapter selection screen in the PC game World of Tanks, making it more scalable, cheaper and juicier';

export const shotSections: ShotSection[] = [
  {
    title: '2026–2025',
    shots: [
      {
        caption: CHAPTER_SELECTION,
        rows: [
          [{ src: wotSelector19, poster: poster('wot_selector_19'), ratio: '880 / 495', alt: 'World of Tanks chapter selection' }],
          [
            { src: wotSelector21, ratio: '436 / 246', alt: 'Chapter selection screen', span: 3 },
            { src: wotSelectorDuke, ratio: '436 / 246', alt: 'Chapter selection screen', span: 3 },
          ],
        ],
      },
      {
        // В макете «for  in» — похоже, пропущено слово
        caption: 'Optimized and updated purchasing screen for in World of Tanks.',
        rows: [[{ src: wotBgPurchasing, ratio: '880 / 495', alt: 'World of Tanks purchasing screen' }]],
      },
      {
        caption: 'QR Machine',
        rows: [[{ src: qrMachine, poster: poster('qr-machine'), ratio: '880 / 495', alt: 'QR Machine' }]],
      },
      {
        // В макете подпись повторяет первую работу
        caption: CHAPTER_SELECTION,
        rows: [
          [{ src: wotLb2, ratio: '880 / 495', alt: 'World of Tanks screen' }],
          [
            { src: wotLb1, ratio: '436 / 246', alt: 'World of Tanks screen', span: 3 },
            { src: wotLb3, ratio: '436 / 246', alt: 'World of Tanks screen', span: 3 },
          ],
        ],
      },
      {
        caption: 'Simple VFX animation',
        rows: [
          [
            { src: wotUmg2, poster: poster('wot_umg_2'), ratio: '288 / 112', alt: 'VFX animation', span: 2 },
            { src: wotUmg3, poster: poster('wot_umg_3'), ratio: '288 / 112', alt: 'VFX animation', span: 2 },
            { src: wotUmg4, poster: poster('wot_umg_4'), ratio: '288 / 112', alt: 'VFX animation', span: 2 },
          ],
        ],
      },
      {
        caption: 'Daily rewards feature for the UFL console game',
        rows: [
          [
            { src: ufl1, poster: poster('ufl-1'), ratio: '584 / 328', alt: 'UFL daily rewards', span: 4 },
            { src: ufl2, poster: poster('ufl-2'), ratio: '288 / 328', alt: 'UFL daily rewards claim', span: 2 },
          ],
        ],
      },
    ],
  },
  {
    title: '2024–2022',
    shots: [
      {
        caption: 'Lottie icons packs',
        rows: [
          [{ src: lottieEco, poster: poster('lottie_eco'), ratio: '880 / 586', alt: 'Eco Lottie icons' }],
          [
            { src: lottieLogos, poster: poster('lottie_logos'), ratio: '436 / 314', alt: 'Logo Lottie icons', span: 3 },
            { src: lottieWeather, poster: poster('lottie_weather'), ratio: '436 / 314', alt: 'Weather Lottie icons', span: 3 },
          ],
        ],
      },
      {
        caption: 'PC game reward screen concept',
        rows: [[{ src: wotTest, ratio: '880 / 495', alt: 'Reward screen concept' }]],
      },
      {
        caption: 'Telegram clicker mini app',
        rows: [
          [{ src: panda1, ratio: '880 / 524', alt: 'Panda clicker screens' }],
          [{ src: panda2, ratio: '880 / 424', alt: 'Panda clicker screens' }],
        ],
      },
      {
        caption: [
          { text: 'Math studying mobile app concept', span: 4 },
          { text: 'Blender studying', span: 2 },
        ],
        rows: [
          [
            { src: mathApp, ratio: '584 / 490', alt: 'Math studying app', span: 4 },
            { src: glass3d, ratio: '288 / 490', alt: '3D glass render', span: 2 },
          ],
        ],
      },
      {
        caption: 'Unsplash mobile app concept',
        rows: [[{ src: unsplash, poster: poster('unsplash'), ratio: '880 / 660', alt: 'Unsplash app concept' }]],
      },
      {
        caption: 'Playing with pixel art soft',
        rows: [
          [
            { src: pixelDonut, ratio: '1 / 1', alt: 'Pixel art donut', span: 3 },
            { src: pixelWhale, ratio: '1 / 1', alt: 'Pixel art whale', span: 3 },
          ],
        ],
      },
      {
        caption: 'National belarus convertor mobile app concept',
        rows: [[{ src: converter, poster: poster('converter'), ratio: '880 / 660', alt: 'Belarusian converter app concept' }]],
      },
    ],
  },
  {
    title: '2021–2019',
    shots: [
      {
        caption: 'Description example',
        rows: [
          [
            { src: china1, ratio: '436 / 246', alt: '', span: 3 },
            { src: china2, ratio: '436 / 246', alt: '', span: 3 },
          ],
        ],
      },
      {
        caption: 'Clothes fitness brand mobile app concept',
        rows: [[{ src: rdApp, ratio: '880 / 495', alt: 'Clothes fitness brand app concept' }]],
      },
    ],
  },
];
