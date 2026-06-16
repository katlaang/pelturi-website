export const PRIMARY_NAV = [
  { label: 'Features', href: '/features' },
  { label: 'Platform', href: 'https://app.pelturi.com/login/' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Docs', href: '/docs' },
];

export const STRIP_ITEMS = [
  '100-farm ready',
  'Offline-first scouting',
  'Threshold alerts',
  'Treatment tracking',
  'Audit-ready records',
];

export const FEATURE_CARDS = [
  {
    num: '01',
    title: 'Multi-farm management',
    body: 'Support for up to 100 farms with account expansion, farm-level controls, and isolated data per operation.',
  },
  {
    num: '02',
    title: 'Team workflows',
    body: 'Managers review sites, analytics, and settings while scouts focus on data entry, observations, and recommendations.',
  },
  {
    num: '03',
    title: 'Structured scouting data',
    body: 'Capture crop, variety, scout details, and observations across sites, bays, benches, and spot checks.',
  },
  {
    num: '04',
    title: 'Heat maps and alerts',
    body: 'Visual severity grids and configurable thresholds help teams spot moderate, high, and emergency pressure quickly.',
  },
  {
    num: '05',
    title: 'Analytics over time',
    body: 'Track weekly trends, compare pest and disease pressure, and review activity across farms and production zones.',
  },
  {
    num: '06',
    title: 'Treatment and IPM support',
    body: 'Record biological control, chemical sprays, and other methods alongside follow-up actions and effectiveness notes.',
  },
];

export const FEATURE_GROUPS = [
  {
    title: 'Scouting structure',
    items: [
      'Sites can be configured as greenhouses or fields.',
      'Bay, bench, and spot-level sampling keeps observations consistent.',
      'Crop type, variety, and scout details stay attached to each session.',
    ],
  },
  {
    title: 'Monitoring and response',
    items: [
      'Pest and disease catalogs standardize reporting across scouts.',
      'Heat maps and threshold alerts surface hotspots immediately.',
      'Weekly trends support early detection before issues spread.',
    ],
  },
  {
    title: 'Management controls',
    items: [
      'Managers can review recommendations, exports, and threshold settings.',
      'Separate manager and scout workflows keep reviews and data entry organized.',
      'Backup and export workflows support record retention and reporting.',
    ],
  },
];

export const PLATFORM_PILLARS = [
  {
    step: '01',
    name: 'SCOUT OFFLINE',
    color: '#1D6B3B',
    desc: 'Scouts collect data in greenhouses, fields, and remote blocks without relying on cellular or WiFi coverage.',
  },
  {
    step: '02',
    name: 'MAP LOCATION',
    color: '#1A5C96',
    desc: 'Every observation is tied to a farm, site, bay, bench, and spot so managers know exactly where pressure is building.',
  },
  {
    step: '03',
    name: 'ALERT AND REVIEW',
    color: '#C8831A',
    desc: 'Threshold-driven alerts, weekly trends, and severity views help managers decide what needs attention first.',
  },
  {
    step: '04',
    name: 'TRACK ACTION',
    color: '#D94F3D',
    desc: 'Treatments, recommendations, and audit history stay connected so the team can measure what worked and what changed.',
  },
];

export const PLATFORM_WORKFLOW = [
  {
    title: 'Capture observations in the field',
    body: 'Scouts log pests, diseases, counts, notes, crop details, and location data during each scouting session.',
  },
  {
    title: 'Sync and review centrally',
    body: 'Managers get current visibility across farms as data is synchronized and organized in one dashboard.',
  },
  {
    title: 'Trigger action thresholds',
    body: 'Configured limits turn raw counts into alerts so teams can respond to high-pressure zones sooner.',
  },
  {
    title: 'Record treatment outcomes',
    body: 'Applications, product details, costs, and effectiveness stay attached to the original scouting record.',
  },
];

export const PLATFORM_SCOPE = {
  inScope: [
    'Standardized pest and disease identification',
    'Location-based scouting with GPS',
    'Offline-first scouting workflow',
    'Automated threshold alerts',
    'Early detection and trend monitoring',
    'Treatment recording and effectiveness tracking',
    'Historical records and audit support',
    'Multi-farm, multi-tenant management',
    'Manager and scout workflow separation',
    'Subscription enforcement and billing integration',
  ],
  outOfScope: [
    'AI pest identification',
    'Drone or aerial image processing',
    'IoT or environmental sensor integration',
    'Predictive modeling using machine learning',
    'Automated PDF reports or report builders',
    'Native mobile apps for iOS or Android',
    'GIS heatmaps or advanced mapping layers',
    'Full ERP or farm management integrations',
    'Automated treatment recommendations',
    'Integrated purchasing or supply ordering',
  ],
};

export const PRICING_MODELS = [
  {
    name: 'Pilot rollout',
    price: 'Custom quote',
    period: '',
    desc: 'Best for first deployments that need workflow setup, user onboarding, and initial threshold configuration.',
    featured: false,
    cta: 'Plan pilot',
    items: [
      'Initial site and user setup',
      'Scouting workflow configuration',
      'Threshold review',
      'Manager and scout onboarding',
      'Pilot support window',
    ],
  },
  {
    name: 'Operations rollout',
    price: 'Scope-based',
    period: '',
    desc: 'For active greenhouse and field operations moving daily scouting, alerts, and treatment tracking into one platform.',
    featured: true,
    cta: 'Request scope',
    items: [
      'Multi-farm management',
      'Heat maps and analytics',
      'Alert configuration',
      'Treatment and audit records',
      'Exports and backup workflows',
      'Manager and scout setup',
    ],
  },
  {
    name: 'Enterprise program',
    price: 'Tailored plan',
    period: '',
    desc: 'For service providers and large operators that need tenant controls, billing integrations, and broader rollout planning.',
    featured: false,
    cta: 'Talk through needs',
    items: [
      'Enterprise tenant structure',
      'Subscription and billing support',
      'Cross-farm oversight',
      'Deployment planning',
      'Priority support options',
    ],
  },
];

export const PRICING_FACTORS = [
  'Number of farms, sites, and scouting zones',
  'Scout, manager, and admin user counts',
  'Crop complexity and pest catalogs',
  'Reporting, export, and backup requirements',
  'Rollout, training, and support expectations',
];

export const ROI_METRICS = [
  { value: '10-25%', label: 'reduction in pest-related crop losses' },
  { value: '15-30%', label: 'reduction in unnecessary pesticide applications' },
  { value: '200-500', label: 'hours saved per year on entry and reporting' },
  { value: '40-60%', label: 'faster scouting compared with paper workflows' },
];

export const CONTACT_DETAILS = [
  {
    label: 'Best fit',
    value: 'Commercial greenhouses, high-value field crops, consultants, and multi-site farm managers.',
  },
  {
    label: 'Current scope',
    value: 'Scouting, alerts, treatments, analytics, audit support, and subscription controls.',
  },
  {
    label: 'Deployment',
    value: 'Offline-first capture with centralized dashboards and multi-tenant farm management.',
  },
];

export const CONTACT_AREAS = [
  'Pilot program planning',
  'Multi-farm rollout',
  'Workflow and threshold design',
  'Export and reporting needs',
];

export const TARGET_MARKETS = [
  'Commercial greenhouse operations',
  'High-value field crop producers',
  'Agricultural consultants and scouts',
  'Farm management companies',
];

export const DOCS_SECTIONS = [
  {
    title: 'First-time setup',
    items: [
      'Launch the application and sign in with the appropriate manager or scout account.',
      'Add a site, choose greenhouse or field, and define the number of bays and benches.',
      'Set thresholds for pests and diseases so alerts reflect the farm workflow.',
    ],
  },
  {
    title: 'Daily scout workflow',
    items: [
      'Select the farm and site from the dashboard before entering observations.',
      'Record scout name, date, crop type, variety, and location details for each session.',
      'Enter counts per spot, add notes, and save recommendations at the end of the visit.',
    ],
  },
  {
    title: 'Weekly manager workflow',
    items: [
      'Review heat maps to find problem bays, benches, or other production zones.',
      'Check trend analytics and active alerts before assigning follow-up work.',
      'Review scout recommendations, export records, and adjust thresholds when needed.',
    ],
  },
  {
    title: 'Thresholds and severity',
    items: [
      'Zero: 0 observations',
      'Low: 1 to 5 observations',
      'Moderate: 6 to 10 observations',
      'High: 11 to 20 observations',
      'Very high: 21 to 30 observations',
      'Emergency: more than 30 observations',
    ],
  },
  {
    title: 'Exports and backups',
    items: [
      'Desktop storage is designed around a local database with scheduled backups.',
      'Web workflows can export data in JSON, with broader reporting planned later.',
      'Backups and exports support record retention, audit preparation, and handoff.',
    ],
  },
];

export const PRIVACY_SECTIONS = [
  {
    title: 'Information we collect',
    items: [
      'Account information such as names, roles, email addresses, and farm assignments.',
      'Operational records such as scouting sessions, observations, treatments, alerts, and exports.',
      'Technical data needed to keep the service running, such as sync activity and error logs.',
    ],
  },
  {
    title: 'How we use the information',
    items: [
      'To deliver scouting workflows, alerts, analytics, and audit history across farms.',
      'To manage user access, subscriptions, backups, and customer support.',
      'To improve reliability, data quality, and future product planning.',
    ],
  },
  {
    title: 'Sharing and disclosure',
    items: [
      'Farm data is intended to remain isolated by tenant and only visible to authorized users.',
      'Service providers may process data on our behalf for hosting, billing, or support.',
      'We may disclose information when required by law or to protect the service from misuse.',
    ],
  },
  {
    title: 'Security and retention',
    items: [
      'The platform is designed around account authentication, audit history, and tenant separation.',
      'Data is retained for active customer operations, backups, and compliance support as needed.',
      'Retention schedules should be finalized during production rollout and legal review.',
    ],
  },
];

export const TERMS_SECTIONS = [
  {
    title: 'Service scope',
    items: [
      'The platform is intended to support pest scouting, alerts, treatments, analytics, and multi-farm administration.',
      'Specific deliverables, integrations, and rollout responsibilities should be confirmed in the customer agreement.',
    ],
  },
  {
    title: 'Accounts and responsibilities',
    items: [
      'Customers are responsible for account security, user permissions, and the accuracy of data entered by their teams.',
      'Use of the service must follow applicable agricultural, privacy, and export rules in the customer region.',
    ],
  },
  {
    title: 'Subscriptions and access',
    items: [
      'Access may depend on subscription status, payment status, and agreed deployment scope.',
      'Accounts may be suspended or limited when billing, security, or misuse issues are unresolved.',
    ],
  },
  {
    title: 'Intellectual property and feedback',
    items: [
      'The software, workflows, and supporting materials remain the property of the platform owner unless agreed otherwise.',
      'Operational farm data remains associated with the customer tenant, subject to the contract and applicable law.',
      'Feedback may be used to improve the platform without creating ownership claims over the product.',
    ],
  },
];
