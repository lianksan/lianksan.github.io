// ── Case page blocks ──
// Blocks fill a 2-column grid from 768px (one column below). `span` sets how many
// columns a block takes: 1 or 2. Headings, text and buttons default to 2; an image's
// width comes from `size` — 'min' is one column, 'max' is both.

export type CaseBlock =
  | { type: 'heading'; text: string; span?: 1 | 2 }
  | { type: 'text'; text: string; span?: 1 | 2 }
  | { type: 'image'; src: string; size: 'min' | 'max'; alt?: string }
  | { type: 'button'; label: string; url: string; span?: 1 | 2 };

export interface Case {
  slug: string;         // page address: /cases/<slug>
  title: string;        // card title and the page h1
  desc: string;         // card caption
  preview: string;      // card image
  blocks: CaseBlock[];  // page content, top to bottom
}

// Draft cases — previews borrowed from the gallery and placeholder copy until real ones exist
export const CASES: Case[] = [
  {
    slug: 'wot-chapter-selector',
    title: 'World of Tanks: Chapter selector',
    desc: 'Short description of the case',
    preview: '/assets/shots/wot_bg_chapter_ selector.png',
    blocks: [
      { type: 'image', src: '/assets/shots/wot_bg_chapter_ selector.png', size: 'max' },
      { type: 'heading', text: 'Task' },
      { type: 'text', text: 'Placeholder: what the problem was and why it mattered.' },
      { type: 'heading', text: 'Process', span: 1 },
      { type: 'heading', text: 'Result', span: 1 },
      { type: 'text', text: 'Placeholder: how the solution was found.', span: 1 },
      { type: 'text', text: 'Placeholder: what changed after release.', span: 1 },
      { type: 'image', src: '/assets/shots/wot_bg_purchasing.png', size: 'min' },
      { type: 'image', src: '/assets/shots/wot_lootboxes.png', size: 'min' },
      { type: 'button', label: 'World of Tanks', url: 'https://worldoftanks.eu' },
    ],
  },
  {
    slug: 'wot-purchasing',
    title: 'World of Tanks: Purchasing',
    desc: 'Short description of the case',
    preview: '/assets/shots/wot_bg_purchasing.png',
    blocks: [
      { type: 'image', src: '/assets/shots/wot_bg_purchasing.png', size: 'max' },
      { type: 'text', text: 'The case study is being written — check back soon.' },
    ],
  },
  {
    slug: 'wot-lootboxes',
    title: 'World of Tanks: Lootboxes',
    desc: 'Short description of the case',
    preview: '/assets/shots/wot_lootboxes.png',
    blocks: [
      { type: 'image', src: '/assets/shots/wot_lootboxes.png', size: 'max' },
      { type: 'text', text: 'The case study is being written — check back soon.' },
    ],
  },
];
