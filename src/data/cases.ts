export interface Case {
  slug: string;
  title: string;
  desc: string;
  preview: string;
}

// Draft cases — previews borrowed from the gallery and placeholder descriptions until real ones exist
export const CASES: Case[] = [
  {
    slug: 'wot-chapter-selector',
    title: 'World of Tanks: Chapter selector',
    desc: 'Short description of the case',
    preview: '/assets/shots/wot_bg_chapter_ selector.png',
  },
  {
    slug: 'wot-purchasing',
    title: 'World of Tanks: Purchasing',
    desc: 'Short description of the case',
    preview: '/assets/shots/wot_bg_purchasing.png',
  },
  {
    slug: 'wot-lootboxes',
    title: 'World of Tanks: Lootboxes',
    desc: 'Short description of the case',
    preview: '/assets/shots/wot_lootboxes.png',
  },
];
