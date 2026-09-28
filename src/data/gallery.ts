// ── Gallery ──
// Years → groups → rows of shots. A group is one project: its shots sit close
// together, groups sit further apart. A row fills the 6-column desktop grid:
// `col` fixes a shot's width, shots without it split what is left evenly.
// A multishot lists several `versions` (color themes and the like): they are drawn
// one at a time and the group gets a switcher above its shots.

export interface Shot {
  src?: string;         // single shot
  versions?: string[];  // multishot: first one is shown first
  col?: number;
  desktopOnly?: boolean;
}

export interface ShotGroup {
  rows: Shot[][];
}

export interface GallerySection {
  years: string;
  groups: ShotGroup[];
}

export const GALLERY: GallerySection[] = [
  {
    years: '2026–2025',
    groups: [
      {
        // World of Tanks
        rows: [
          [{ src: '/assets/shots/wot_bg_chapter_ selector.png' }],
          [{ src: '/assets/shots/wot_bg_purchasing.png' }],
          [{ src: '/assets/shots/wot_lootboxes.png' }],
        ],
      },
      {
        // UFL
        rows: [
          [{ src: '/assets/shots/ufl-1.mp4' }, { src: '/assets/shots/ufl-2.mp4' }],
        ],
      },
      {
        // QR Machine
        rows: [[{ src: '/assets/shots/qr-machine.mp4' }]],
      },
    ],
  },
  {
    years: '2024–2022',
    groups: [
      {
        // Lottie animations
        rows: [
          [{ src: '/assets/shots/lottie_eco.mp4' }],
          [{ src: '/assets/shots/lottie_logos.mp4' }, { src: '/assets/shots/lottie_weather.mp4' }],
        ],
      },
      {
        // Panda
        rows: [
          [{ src: '/assets/shots/panda_1.png' }],
          [{ src: '/assets/shots/panda_2.png' }],
        ],
      },
      {
        // 3D glass and Math app
        rows: [[{ src: '/assets/shots/3d_glass.png', col: 2 }, { src: '/assets/shots/math_app.png' }]],
      },
      {
        // Unsplash
        rows: [[{ src: '/assets/shots/unsplash.mp4' }]],
      },
      {
        // Pixel art
        rows: [[{ src: '/assets/shots/pixel_donut.gif' }, { src: '/assets/shots/pixel_whale.gif' }]],
      },
      {
        // Converter
        rows: [[{ src: '/assets/shots/converter.mp4' }]],
      },
    ],
  },
  {
    years: '2021–2019',
    groups: [
      {
        // China
        // demo multishot — the two China shots as versions of one
        rows: [[{ versions: ['/assets/shots/china1.png', '/assets/shots/china2.png'] }]],
      },
      {
        // RD app
        rows: [[{ src: '/assets/shots/rd-app.png' }]],
      },
    ],
  },
];
