// ── Gallery ──
// Years → groups → rows of shots. A group is one project: its shots share one
// description under them. A row fills the 6-column desktop grid: `col` fixes a
// shot's width, shots without it split what is left evenly.
// A multishot lists several `versions` (color themes and the like): they are drawn
// as a stack and the group gets a switcher next to its description.

export interface Shot {
  src?: string;         // single shot
  versions?: string[];  // multishot: first one is shown first
  col?: number;
  desktopOnly?: boolean;
}

export interface ShotGroup {
  title: string;
  desc?: string;
  rows: Shot[][];
}

export interface GallerySection {
  years: string;
  groups: ShotGroup[];
}

// Draft groups — titles and descriptions are placeholders until real ones exist
export const GALLERY: GallerySection[] = [
  {
    years: '2026–2025',
    groups: [
      {
        title: 'World of Tanks',
        desc: 'Short description of the project',
        rows: [
          [{ src: '/assets/shots/wot_bg_chapter_ selector.png' }],
          [{ src: '/assets/shots/wot_bg_purchasing.png' }],
          [{ src: '/assets/shots/wot_lootboxes.png' }],
        ],
      },
      {
        title: 'UFL',
        desc: 'Short description of the project',
        rows: [
          [{ src: '/assets/shots/ufl-1.mp4' }, { src: '/assets/shots/ufl-2.mp4' }],
        ],
      },
      {
        title: 'QR Machine',
        desc: 'Short description of the project',
        rows: [[{ src: '/assets/shots/qr-machine.mp4' }]],
      },
    ],
  },
  {
    years: '2024–2022',
    groups: [
      {
        title: 'Lottie animations',
        desc: 'Short description of the project',
        rows: [
          [{ src: '/assets/shots/lottie_eco.mp4' }, { src: '/assets/shots/lottie_eco_sketch.png', col: 2 }],
          [{ src: '/assets/shots/lottie_logos.mp4' }, { src: '/assets/shots/lottie_weather.mp4' }],
        ],
      },
      {
        title: 'Panda',
        desc: 'Short description of the project',
        rows: [
          [{ src: '/assets/shots/panda_1.png' }],
          [{ src: '/assets/shots/panda_2.png' }],
        ],
      },
      {
        title: '3D glass and Math app',
        desc: 'Short description of the project',
        rows: [[{ src: '/assets/shots/3d_glass.png', col: 2 }, { src: '/assets/shots/math_app.png' }]],
      },
      {
        title: 'Unsplash',
        desc: 'Short description of the project',
        rows: [[{ src: '/assets/shots/unsplash.mp4' }]],
      },
      {
        title: 'Pixel art',
        desc: 'Short description of the project',
        rows: [[{ src: '/assets/shots/pixel_donut.gif' }, { src: '/assets/shots/pixel_whale.gif' }]],
      },
      {
        title: 'Converter',
        desc: 'Short description of the project',
        rows: [[{ src: '/assets/shots/converter.mp4' }]],
      },
    ],
  },
  {
    years: '2021–2019',
    groups: [
      {
        title: 'China',
        desc: 'Short description of the project',
        // demo multishot — the two China shots as versions of one
        rows: [[{ versions: ['/assets/shots/china1.png', '/assets/shots/china2.png'] }]],
      },
      {
        title: 'RD app',
        desc: 'Short description of the project',
        rows: [[{ src: '/assets/shots/rd-app.png' }]],
      },
    ],
  },
];
