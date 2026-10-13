import type { ImageMetadata } from 'astro';

import wotSelector19 from '../assets/shots/wot-selector-19.mp4';
import wotSelector21 from '../assets/shots/wot-selector-21.png';
import wotSelectorDuke from '../assets/shots/wot-selector-duke.png';
import wotBgPurchasing from '../assets/shots/wot-bg-purchasing.png';
import qrMachine from '../assets/shots/qr-machine.mp4';
import wotLb1 from '../assets/shots/wot-lb-1.png';
import wotLb2 from '../assets/shots/wot-lb-2.png';
import wotLb3 from '../assets/shots/wot-lb-3.png';
import wotLbStats from '../assets/shots/wot-lb-stats.png';
import wotLbInfopage from '../assets/shots/wot-lb-infopage.png';
import wotLbEntry1 from '../assets/shots/wot-lb-entry-1.mp4';
import wotLbEntry2 from '../assets/shots/wot-lb-entry-2.mp4';
import wotLbEntry3 from '../assets/shots/wot-lb-entry-3.mp4';
import brainyNote from '../assets/shots/brainy-note.png';
import brainyCanvas from '../assets/shots/brainy-canvas.png';
import brainyMobile from '../assets/shots/brainy-mobile.mp4';
import wotUmg2 from '../assets/shots/wot-umg-2.mp4';
import wotUmg3 from '../assets/shots/wot-umg-3.mp4';
import wotUmg4 from '../assets/shots/wot-umg-4.mp4';
import ufl1 from '../assets/shots/ufl-1.mp4';
import ufl2 from '../assets/shots/ufl-2.mp4';
import lottieEco from '../assets/shots/lottie-eco.mp4';
import lottieLogos from '../assets/shots/lottie-logos.mp4';
import lottieWeather from '../assets/shots/lottie-weather.mp4';
import wotTest from '../assets/shots/wot-test.png';
import panda1 from '../assets/shots/panda-1.png';
import panda2 from '../assets/shots/panda-2.png';
import mathApp from '../assets/shots/math-app.png';
import glass3d from '../assets/shots/3d-glass.png';
import unsplash from '../assets/shots/unsplash.mp4';
import pixelDonut from '../assets/shots/pixel-donut.gif';
import pixelWhale from '../assets/shots/pixel-whale.gif';
import converter from '../assets/shots/converter.mp4';
import china1 from '../assets/shots/china1.png';
import china2 from '../assets/shots/china2.png';
import rdApp from '../assets/shots/rd-app.png';
import aliasMenu from '../assets/shots/alias-menu.mp4';
import aliasGame from '../assets/shots/alias-game.mp4';
import aliasOther from '../assets/shots/alias-other.mp4';
import wotAucMain1 from '../assets/shots/wot-auc-main-1.png';
import wotAucMain2 from '../assets/shots/wot-auc-main-2.png';
import wotAucAnons from '../assets/shots/wot-auc-anons.png';
import wotAucReward from '../assets/shots/wot-auc-reward.png';
import converter2 from '../assets/shots/converter-2.png';
import vibro1 from '../assets/shots/vibro-1.png';
import vibro2 from '../assets/shots/vibro-2.png';
import samoeRadio from '../assets/shots/samoe-radio.png';
import smartBlocks from '../assets/shots/smart-blocks.png';
import alcostop from '../assets/shots/alcostop.png';
import green from '../assets/shots/green.png';
import alemarLex from '../assets/shots/alemar-lex.png';

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
  /** Тянется на высоту ряда (рядом с колонкой ShotStack), обрезаясь по краям; до 680px — по ratio */
  fill?: boolean;
};

/** Колонка из нескольких плиток друг над другом */
export type ShotStack = { stack: ShotMedia[]; span: number };

/**
 * Подпись под всей работой или по подписи под колонками (как у Math app / Blender).
 * Ссылки в тексте — как в Markdown: `[текст](адрес)`; `#` — ссылка ещё не указана.
 */
export type ShotCaption = string | { text: string; span: number }[];

/** Разбивает подпись на текст и ссылки из разметки `[текст](адрес)` */
export function captionParts(caption: string): (string | { text: string; href: string })[] {
  return caption
    .split(/(\[[^\]]+\]\([^)]+\))/)
    .filter(Boolean)
    .map((part) => {
      const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      return link ? { text: link[1], href: link[2] } : part;
    });
}

export type Shot = { caption?: ShotCaption; rows: (ShotMedia | ShotStack)[][] };
export type ShotSection = { title: string; shots: Shot[] };

export const shotSections: ShotSection[] = [
  {
    title: '2026–2025',
    shots: [
      {
        caption:
          'Battle Pass in the PC game [World of Tanks](#). Launched, updated and optimised it. In particular, I reworked the chapter selection screen: it’s now cheaper to use, scales more flexibly with the feature and looks juicier at the same time.',
        rows: [
          [{ src: wotSelector19, poster: poster('wot-selector-19'), ratio: '880 / 495', alt: 'World of Tanks chapter selection' }],
          [
            { src: wotSelector21, ratio: '436 / 246', alt: 'Chapter selection screen', span: 3 },
            { src: wotSelectorDuke, ratio: '436 / 246', alt: 'Chapter selection screen', span: 3 },
          ],
        ],
      },
      {
        caption:
          'Chapter upgrade screen in the [WoT](#) Battle Pass. Reworked it to make it cheaper to use, put more emphasis on the discounted option, and made the screen more functional and flexible.',
        rows: [[{ src: wotBgPurchasing, ratio: '880 / 495', alt: 'World of Tanks purchasing screen' }]],
      },
      {
        caption:
          'A simple [QR code generator](#). Got fed up and vibe-coded it, because everywhere else asked me to pay, sign up or watch ads.',
        rows: [[{ src: qrMachine, poster: poster('qr-machine'), ratio: '880 / 495', alt: 'QR Machine' }]],
      },
      {
        caption:
          'An Obsidian-like app. I plan to finish the design and build it: I like the idea of working directly with markdown/json files stored right on the disk.',
        rows: [
          [
            {
              stack: [
                { src: brainyNote, ratio: '1440 / 887', alt: 'Brainy note' },
                { src: brainyCanvas, ratio: '1440 / 887', alt: 'Brainy canvas' },
              ],
              span: 3,
            },
            {
              src: brainyMobile,
              poster: poster('brainy-mobile'),
              ratio: '1440 / 1800',
              alt: 'Brainy mobile app',
              span: 3,
              fill: true,
            },
          ],
        ],
      },
      {
        caption:
          'Loot box feature in [WoT](#). Built a complete, standalone and flexible system, then iteratively optimised and refined it as new events launched.',
        rows: [
          [
            { src: wotLbEntry1, poster: poster('wot-lb-entry-1'), ratio: '374 / 250', alt: 'Loot box entry point', span: 2 },
            { src: wotLbEntry2, poster: poster('wot-lb-entry-2'), ratio: '374 / 250', alt: 'Loot box entry point', span: 2 },
            { src: wotLbEntry3, poster: poster('wot-lb-entry-3'), ratio: '374 / 250', alt: 'Loot box entry point', span: 2 },
          ],
          [{ src: wotLb2, ratio: '880 / 495', alt: 'World of Tanks loot box screen' }],
          [
            { src: wotLb3, ratio: '16 / 9', alt: 'World of Tanks loot box screen', span: 3 },
            { src: wotLb1, ratio: '16 / 9', alt: 'World of Tanks loot box screen', span: 3 },
          ],
          [
            { src: wotLbInfopage, ratio: '16 / 9', alt: 'Loot box info page', span: 4 },
            { src: wotLbStats, ratio: '287 / 327', alt: 'Loot box opening statistics', span: 2, fill: true },
          ],
        ],
      },
      {
        caption:
          'Simple VFX in [WoT](#). Brought images to life with smoke, sparks, light and even flies buzzing around the Garage (yes, flies).',
        rows: [
          [
            { src: wotUmg2, poster: poster('wot-umg-2'), ratio: '288 / 112', alt: 'VFX animation', span: 2 },
            { src: wotUmg3, poster: poster('wot-umg-3'), ratio: '288 / 112', alt: 'VFX animation', span: 2 },
            { src: wotUmg4, poster: poster('wot-umg-4'), ratio: '288 / 112', alt: 'VFX animation', span: 2 },
          ],
        ],
      },
      {
        caption: '[Alias w Ali](#), a card game for iPhone. Made it as a practice project while learning Swift development.',
        rows: [
          [
            { src: aliasMenu, poster: poster('alias-menu'), ratio: '960 / 1720', alt: 'Alias w Ali menu', span: 3 },
            { src: aliasGame, poster: poster('alias-game'), ratio: '960 / 1720', alt: 'Alias w Ali game', span: 3 },
          ],
          [{ src: aliasOther, poster: poster('alias-other'), ratio: '1920 / 1104', alt: 'Alias w Ali screens' }],
        ],
      },
      {
        caption: 'A simple daily bonus feature concept for a console football game.',
        rows: [
          [
            { src: ufl2, poster: poster('ufl-2'), ratio: '288 / 328', alt: 'UFL daily rewards claim', span: 2 },
            { src: ufl1, poster: poster('ufl-1'), ratio: '584 / 328', alt: 'UFL daily rewards', span: 4 },
          ],
        ],
      },
    ],
  },
  {
    title: '2024–2022',
    shots: [
      {
        caption: 'Sets of looping animated icons. Made them while learning After Effects and published them on [IconScout](#).',
        rows: [
          [{ src: lottieEco, poster: poster('lottie-eco'), ratio: '880 / 586', alt: 'Eco Lottie icons' }],
          [
            { src: lottieLogos, poster: poster('lottie-logos'), ratio: '436 / 314', alt: 'Logo Lottie icons', span: 3 },
            { src: lottieWeather, poster: poster('lottie-weather'), ratio: '436 / 314', alt: 'Weather Lottie icons', span: 3 },
          ],
        ],
      },
      {
        caption: 'Reward screen concept for a PC game.',
        rows: [[{ src: wotTest, ratio: '880 / 495', alt: 'Reward screen concept' }]],
      },
      {
        caption: 'A clicker built as a Telegram mini app.',
        rows: [
          [{ src: panda1, ratio: '880 / 524', alt: 'Panda clicker screens' }],
          [{ src: panda2, ratio: '880 / 424', alt: 'Panda clicker screens' }],
        ],
      },
      {
        caption: 'Auction, a monetisation feature in [WoT](#). Launched events, optimised and refined the system itself.',
        rows: [
          [{ src: wotAucMain2, ratio: '16 / 9', alt: 'World of Tanks auction screen' }],
          [
            { src: wotAucAnons, ratio: '16 / 9', alt: 'World of Tanks auction announcement', span: 3 },
            { src: wotAucMain1, ratio: '16 / 9', alt: 'World of Tanks auction screen', span: 3 },
          ],
          [{ src: wotAucReward, ratio: '16 / 9', alt: 'World of Tanks auction reward' }],
        ],
      },
      {
        caption: [
          { text: 'An educational mobile app.', span: 4 },
          { text: 'Played around with Blender a bit.', span: 2 },
        ],
        rows: [
          [
            { src: mathApp, ratio: '584 / 490', alt: 'Math studying app', span: 4 },
            { src: glass3d, ratio: '288 / 490', alt: '3D glass render', span: 2 },
          ],
        ],
      },
      {
        caption: 'Mobile app concept for the Unsplash photo stock.',
        rows: [[{ src: unsplash, poster: poster('unsplash'), ratio: '880 / 660', alt: 'Unsplash app concept' }]],
      },
      {
        caption: 'Played around with pixel art software.',
        rows: [
          [
            { src: pixelDonut, ratio: '1 / 1', alt: 'Pixel art donut', span: 3 },
            { src: pixelWhale, ratio: '1 / 1', alt: 'Pixel art whale', span: 3 },
          ],
        ],
      },
      {
        caption:
          'Design of a Belarusian currency converter app. Made it while learning SwiftUI but never finished the app — only the pictures are left.',
        rows: [
          [{ src: converter, poster: poster('converter'), ratio: '880 / 660', alt: 'Belarusian converter app concept' }],
          [{ src: converter2, ratio: '1920 / 1020', alt: 'Belarusian converter app screens' }],
        ],
      },
    ],
  },
  {
    title: '2021–2019',
    shots: [
      {
        caption: 'Yes, literally with a phone.',
        rows: [
          [
            { src: vibro1, ratio: '582 / 327', alt: 'Vibrator remote control app', span: 4 },
            { src: vibro2, ratio: '287 / 327', alt: 'Vibrator remote control app settings', span: 2, fill: true },
          ],
        ],
      },
      {
        caption: 'Home page of a student news portal.',
        rows: [[{ src: samoeRadio, ratio: '880 / 495', alt: 'Student news portal home page' }]],
      },
      {
        caption: 'An archive of old freelance websites.',
        rows: [
          [{ src: smartBlocks, ratio: '1920 / 947', alt: 'Smart Blocks website' }],
          [
            { src: china1, ratio: '16 / 9', alt: 'Website for freight delivery from China', span: 3 },
            { src: china2, ratio: '16 / 9', alt: 'Website for freight delivery from China', span: 3 },
          ],
          [
            { src: alcostop, ratio: '16 / 9', alt: 'Alcostop website', span: 2 },
            { src: green, ratio: '16 / 9', alt: 'Green website', span: 2 },
            { src: alemarLex, ratio: '16 / 9', alt: 'Alemar Lex website', span: 2 },
          ],
        ],
      },
      {
        caption: 'Early in my career I tried to design a mobile app for a sports brand.',
        rows: [[{ src: rdApp, ratio: '880 / 495', alt: 'Sports brand mobile app concept' }]],
      },
    ],
  },
];
