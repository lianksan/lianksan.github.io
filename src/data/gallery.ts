export interface Shot {
  src: string;
  col?: number;
  desktopOnly?: boolean;
  stack?: string[];  // more variants of the shot, piled under it (first one right under)
  desc?: string;     // caption under the shot; HTML, so it may hold <a class="text-link"> links
}

export interface GallerySection {
  years: string;
  rows: Shot[][];
}

// Rows of the gallery grid, top to bottom, split by years. A row fills the
// 6-column desktop grid: `col` fixes a shot's width, shots without it split what is left evenly.
export const GALLERY: GallerySection[] = [
  {
    years: '2026–2025',
    rows: [
      [{
        src: '/assets/shots/wot_bg_chapter_ selector.png',
        stack: ['/assets/shots/wot_bg_chapter_selector_2.webp', '/assets/shots/wot_bg_chapter_selector_3.webp'],
        desc: 'Updated and optimised the chapter selection screen in the PC game World of Tanks, making it more scalable, cheaper and juicier',
      }],
      [{ src: '/assets/shots/wot_bg_purchasing.png' }],
      [{ src: '/assets/shots/wot_lootboxes.png' }],
      [{ src: '/assets/shots/ufl-1.mp4' }, { src: '/assets/shots/ufl-2.mp4' }],
      [{ src: '/assets/shots/qr-machine.mp4' }],
    ],
  },
  {
    years: '2024–2022',
    rows: [
      [{ src: '/assets/shots/lottie_eco.mp4' }],
      [{ src: '/assets/shots/lottie_logos.mp4' }, { src: '/assets/shots/lottie_weather.mp4' }],
      [{ src: '/assets/shots/panda_1.png' }],
      [{ src: '/assets/shots/panda_2.png' }],
      [{ src: '/assets/shots/3d_glass.png', col: 2 }, { src: '/assets/shots/math_app.png' }],
      [{ src: '/assets/shots/unsplash.mp4' }],
      [{ src: '/assets/shots/pixel_donut.gif' }, { src: '/assets/shots/pixel_whale.gif' }],
      [{ src: '/assets/shots/converter.mp4' }],
    ],
  },
  {
    years: '2021–2019',
    rows: [
      [{ src: '/assets/shots/china1.png' }, { src: '/assets/shots/china2.png' }],
      [{ src: '/assets/shots/rd-app.png' }],
    ],
  },
];
