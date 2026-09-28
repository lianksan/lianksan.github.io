// ── Gallery ──
// Years → groups → rows of shots. A group is one project: its shots share one
// title above them. A row fills the 6-column desktop grid: `col` fixes a
// shot's width, shots without it split what is left evenly.
// A multishot lists several `versions` (color themes and the like): they are drawn
// one at a time and the group gets a switcher next to its title.

export interface Shot {
  src?: string;         // single shot
  versions?: string[];  // multishot: first one is shown first
  col?: number;
  desktopOnly?: boolean;
}

export interface ShotGroup {
  title: string;
  rows: Shot[][];
}

export interface GallerySection {
  years: string;
  groups: ShotGroup[];
}

// Draft groups — titles are placeholders until real ones exist
export const GALLERY: GallerySection[] = [
  {
    years: '2026–2025',
    groups: [
      {
        title: 'World of Tanks',
        rows: [
          [{ src: '/assets/shots/wot_bg_chapter_ selector.png' }],
          [{ src: '/assets/shots/wot_bg_purchasing.png' }],
          [{ src: '/assets/shots/wot_lootboxes.png' }],
        ],
      },
      {
        title: 'UFL',
        rows: [
          [{ src: '/assets/shots/ufl-1.mp4' }, { src: '/assets/shots/ufl-2.mp4' }],
        ],
      },
      {
        title: 'QR Machine',
        rows: [[{ src: '/assets/shots/qr-machine.mp4' }]],
      },
    ],
  },
  {
    years: '2024–2022',
    groups: [
      {
        title: 'Lottie animations',
        rows: [
          [{ src: '/assets/shots/lottie_eco.mp4' }],
          [{ src: '/assets/shots/lottie_logos.mp4' }, { src: '/assets/shots/lottie_weather.mp4' }],
        ],
      },
      {
        title: 'Panda',
        rows: [
          [{ src: '/assets/shots/panda_1.png' }],
          [{ src: '/assets/shots/panda_2.png' }],
        ],
      },
      {
        title: '3D glass and Math app',
        rows: [[{ src: '/assets/shots/3d_glass.png', col: 2 }, { src: '/assets/shots/math_app.png' }]],
      },
      {
        title: 'Unsplash',
        rows: [[{ src: '/assets/shots/unsplash.mp4' }]],
      },
      {
        title: 'Pixel art',
        rows: [[{ src: '/assets/shots/pixel_donut.gif' }, { src: '/assets/shots/pixel_whale.gif' }]],
      },
      {
        title: 'Converter',
        rows: [[{ src: '/assets/shots/converter.mp4' }]],
      },
    ],
  },
  {
    years: '2021–2019',
    groups: [
      {
        title: 'China',
        // demo multishot — the two China shots as versions of one
        rows: [[{ versions: ['/assets/shots/china1.png', '/assets/shots/china2.png'] }]],
      },
      {
        title: 'RD app',
        rows: [[{ src: '/assets/shots/rd-app.png' }]],
      },
    ],
  },
];
