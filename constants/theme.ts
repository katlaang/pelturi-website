// ─── COLOURS ─────────────────────────────────────────────────────────────────
export const C = {
  forest:   '#0D3B1E',
  green:    '#1D6B3B',
  mint:     '#4CAF78',
  lime:     '#A8D5B0',
  cream:    '#F5F2EB',
  sand:     '#EBE6DC',
  dark:     '#111410',
  charcoal: '#2A2E27',
  muted:    '#6B7268',
  white:    '#FFFFFF',
  amber:    '#C8831A',
  alert:    '#D94F3D',
};

// ─── HERO SLIDES — using your actual uploaded photos ────────────────────────
export const HERO_SLIDES = [
  {
    // field-rows.png — corn seedlings in a field
    image: require('../assets/images/field-rows.png') as ReturnType<typeof require>,
    headline: 'Offline-first scouting\nfor every farm.',
    sub: 'Digitize greenhouse and field scouting with location-based observations.',
  },
  {
    // greenhouse-seedlings.png — seedling trays
    image: require('../assets/images/greenhouse-seedlings.png') as ReturnType<typeof require>,
    headline: 'Catch pressure early.\nAct with proof.',
    sub: 'Use heat maps, thresholds, and trends to focus attention where it matters most.',
  },
  {
    // vineyard-aerial.png — aerial field rows
    image: require('../assets/images/vineyard-aerial.png') as ReturnType<typeof require>,
    headline: 'Track treatments.\nKeep the audit trail.',
    sub: 'Link observations, follow-up actions, and history across every scouting cycle.',
  },
];

// ─── SPLIT SECTION IMAGES ────────────────────────────────────────────────────
export const SPLIT_IMAGES = {
  fieldOps:  require('../assets/images/vineyard-aerial.png') as ReturnType<typeof require>,
  greenhouse: require('../assets/images/greenhouse-seedlings.png') as ReturnType<typeof require>,
};

// ─── EOAF PILLARS ────────────────────────────────────────────────────────────
export const PILLARS = [
  {
    step: '01',
    name: 'DETECT',
    color: '#1D6B3B',
    desc: 'Edge AI pest sensing at field and greenhouse level. YOLO-based models run offline — no cloud dependency for detection.',
  },
  {
    step: '02',
    name: 'CORRELATE',
    color: '#1A5C96',
    desc: 'A unified agronomy ledger links pest events to seed, weather, soil, and management context for the full picture.',
  },
  {
    step: '03',
    name: 'ANALYZE',
    color: '#C8831A',
    desc: 'Hotspot computation and multi-variate risk profiling identify patterns before they escalate into outbreaks.',
  },
  {
    step: '04',
    name: 'RESPOND',
    color: '#D94F3D',
    desc: 'Targeted biological, chemical, and IPM interventions generated automatically from severity and species data.',
  },
];

// ─── FEATURES ────────────────────────────────────────────────────────────────
export const FEATURES = [
  {
    num: '—01',
    title: 'Offline-first mobile',
    body: 'Scouts work without signal. Observations queue locally and sync edge-to-cloud the moment connectivity returns.',
  },
  {
    num: '—02',
    title: 'Severity heat maps',
    body: 'Bay-by-bench color grids across every structure. Green through dark red at a glance — no report needed.',
  },
  {
    num: '—03',
    title: 'Automated alerts',
    body: 'Threshold-based notifications fire the moment a cell crosses moderate, high, or emergency severity.',
  },
  {
    num: '—04',
    title: 'Trend forecasting',
    body: '7-week rolling charts for 13 pest and disease species. Spot pressure building before it escalates.',
  },
  {
    num: '—05',
    title: 'IPM recommendations',
    body: 'Biological control, chemical sprays with PHI, and cultural control options tied directly to observation data.',
  },
  {
    num: '—06',
    title: 'Multi-farm operations',
    body: 'Manage 100+ farm operations from one account. Clear team workflows keep scouting organized.',
  },
];

// ─── PRICING PLANS ───────────────────────────────────────────────────────────
export const PLANS = [
  {
    name: 'Starter',
    price: '$149',
    period: '/mo',
    desc: 'Single-farm operations getting started with precision scouting.',
    featured: false,
    items: [
      'Up to 3 farms',
      '5 scout accounts',
      'Heat map dashboards',
      'Basic alert thresholds',
      'CSV data export',
    ],
  },
  {
    name: 'Professional',
    price: '$399',
    period: '/mo',
    desc: 'Growing operations that need offline-first mobile and advanced analytics.',
    featured: true,
    items: [
      'Up to 25 farms',
      'Unlimited scouts',
      'Offline-first mobile app',
      'Edge → cloud sync',
      'Trend analytics',
      'IPM recommendations',
      'API access',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'Large-scale and international operations with complex licensing needs.',
    featured: false,
    items: [
      'Unlimited farms',
      'Multi-country deployment',
      'Dedicated support',
      'Custom integrations',
      'SLA guarantee',
      'On-premise / edge mode',
    ],
  },
];
