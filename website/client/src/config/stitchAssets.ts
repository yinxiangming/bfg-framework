/**
 * Local raster paths from Stitch HTML exports (scripts/download-stitch-images.mjs).
 * Hash-named files come from manifest; a few pages use descriptive filenames where added manually.
 */

export const stitchAssets = {
  landing: {
    dashboard: '/images/stitch/3e5e6f99cbbc1a71.webp',
    automationWorkflow: '/images/stitch/4193ab8185519ec5.webp',
    teamCollaboration: '/images/stitch/daae56b4ccedef20.webp',
    appStoreBadge: '/images/stitch/90024cc302732df3.webp',
    googlePlayBadge: '/images/stitch/2ca4914417908e86.webp',
    mobileUi: '/images/stitch/3e5e6f99cbbc1a71.webp',
  },
  platform: {
    dashboard: '/images/stitch/3e5e6f99cbbc1a71.webp',
    automation: '/images/stitch/4193ab8185519ec5.webp',
    team: '/images/stitch/daae56b4ccedef20.webp',
  },
  mobile: {
    scanWatch: '/images/stitch/910e62eb929e9679.webp',
    warehouse: '/images/stitch/b1763ebee22c34be.webp',
  },
  about: {
    officeHero: '/images/stitch/72531ad17a7c3c7a.webp',
    teamMember1: '/images/stitch/b6ee2509367ad091.webp',
    teamMember2: '/images/stitch/0ef60896e8fd9cb8.webp',
    teamMember3: '/images/stitch/2db7d71d9b77db46.webp',
  },
  security: {
    badges: [
      '/images/stitch/043702987e9b7c8f.webp',
      '/images/stitch/cb5bd4038dbec85a.webp',
      '/images/stitch/d45169e3fde7eaf4.webp',
      '/images/stitch/9a0e57ab96969a8e.webp',
    ] as const,
  },
  blog: {
    cards: [
      '/images/stitch/e63c9f561fc4bc5f.webp',
      '/images/stitch/57ad13b335ced9b0.webp',
      '/images/stitch/71c16276e6699578.webp',
      '/images/stitch/f4134ef67eee0f1f.webp',
      '/images/stitch/2b2d838ba2ad35cc.webp',
      '/images/stitch/f3a817f14e7870c0.webp',
    ] as const,
  },
  caseStudies: {
    vintageBoutique: '/images/stitch/e7466c8995493097.webp',
    furnitureShowroom: '/images/stitch/b38fbda97eab5cf7.webp',
  },
  contact: {
    officeMap: '/images/stitch/680e93e49bd31a65.webp',
  },
  careers: {
    hero: '/images/stitch/careers-hero.webp',
    meeting: '/images/stitch/careers-meeting.webp',
  },
  bookDemo: {
    avatar: '/images/stitch/e9f17ea3f23f4cf5.webp',
  },
  getStarted: {
    avatar: '/images/stitch/5fd7856cde8fb202.webp',
  },
} as const
