const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`;

export const DESIGNER = {
  name: "ILARIA VOSS",
  role: "Fashion Designer / Creative Director",
  city: "Antwerp",
  email: "studio@ilariavoss.com",
};

export type Collection = {
  slug: string;
  index: string;
  name: string;
  season: string;
  tags: string;
  concept: string;
  cover: string;
  gallery: { src: string; kind: "full" | "tall" | "wide" | "detail" }[];
};

export const collections: Collection[] = [
  {
    slug: "echoes",
    index: "01",
    name: "ECHOES",
    season: "Autumn / Winter 2026",
    tags: "Concept / Womenswear / Couture",
    concept:
      "Echoes explores memory, movement and identity through sculptural silhouettes, layered textiles and unexpected proportions.",
    cover: u("1490481651871-ab68de25d43d", 1400),
    gallery: [
      { src: u("1539109136881-3be0616acf4b", 1800), kind: "full" },
      { src: u("1529626455594-4ff0802cfb7e", 1200), kind: "tall" },
      { src: u("1487222477894-8943e31ef7b2", 1200), kind: "detail" },
      { src: u("1469334031218-e382a71b716b", 1800), kind: "wide" },
      { src: u("1524504388940-b1c1722653e1", 1200), kind: "tall" },
      { src: u("1483985988355-763728e1935b", 1800), kind: "full" },
    ],
  },
  {
    slug: "salt-index",
    index: "02",
    name: "SALT INDEX",
    season: "Spring / Summer 2026",
    tags: "Research / Womenswear / Ready-to-wear",
    concept:
      "A study of erosion. Raw hems, salt-washed cottons and garments built to record the passing of weather on the body.",
    cover: u("1469334031218-e382a71b716b", 1800),
    gallery: [
      { src: u("1594633312681-425c7b97ccd1", 1800), kind: "full" },
      { src: u("1523381210434-271e8be1f52b", 1200), kind: "tall" },
      { src: u("1550614000-4895a10e1bfd", 1200), kind: "detail" },
      { src: u("1512436991641-6745cdb1723f", 1800), kind: "wide" },
    ],
  },
  {
    slug: "second-skin",
    index: "03",
    name: "SECOND SKIN",
    season: "Resort 2026",
    tags: "Material / Unisex / Experimental",
    concept:
      "Bonded jersey, moulded leather and hand-pleated silk treated as an extension of the body rather than a covering for it.",
    cover: u("1558769132-cb1aea458c5e", 1400),
    gallery: [
      { src: u("1517841905240-472988babdf9", 1200), kind: "tall" },
      { src: u("1485462537746-965f33f7f6a7", 1800), kind: "full" },
      { src: u("1495385794356-15371f348c31", 1200), kind: "detail" },
      { src: u("1441984904996-e0b6ba687e04", 1800), kind: "wide" },
    ],
  },
  {
    slug: "black-atlas",
    index: "04",
    name: "BLACK ATLAS",
    season: "Autumn / Winter 2025",
    tags: "Runway / Womenswear / Couture",
    concept:
      "Cartography of the body. Seam lines drawn as contour maps across tailoring cut from wool, horsehair and cracked leather.",
    cover: u("1483985988355-763728e1935b", 1900),
    gallery: [
      { src: u("1490481651871-ab68de25d43d", 1800), kind: "full" },
      { src: u("1502716119720-b23a93e5fe1b", 1200), kind: "detail" },
      { src: u("1496747611176-843222e1e57c", 1200), kind: "tall" },
      { src: u("1507003211169-0a1dd7228f2d", 1800), kind: "wide" },
    ],
  },
];

export const heroImage = u("1539109136881-3be0616acf4b", 1900);
export const portraitImage = u("1524504388940-b1c1722653e1", 1300);
export const studioImage = u("1550614000-4895a10e1bfd", 1300);
export const runwayImage = u("1483985988355-763728e1935b", 1900);

export const processSteps = [
  {
    n: "01",
    title: "RESEARCH",
    body: "Culture, architecture, art and visual references.",
    img: u("1502716119720-b23a93e5fe1b", 1100),
  },
  {
    n: "02",
    title: "CONCEPT",
    body: "Moodboards, silhouettes, colours and materials.",
    img: u("1487222477894-8943e31ef7b2", 1100),
  },
  {
    n: "03",
    title: "EXPERIMENT",
    body: "Fabric manipulation, draping and pattern exploration.",
    img: u("1594633312681-425c7b97ccd1", 1100),
  },
  {
    n: "04",
    title: "DEVELOPMENT",
    body: "Fittings, construction and refinement.",
    img: u("1550614000-4895a10e1bfd", 1100),
  },
  {
    n: "05",
    title: "FINAL FORM",
    body: "Finished garments and editorial presentation.",
    img: u("1539109136881-3be0616acf4b", 1100),
  },
];

export const sketchbook = [
  { src: u("1502716119720-b23a93e5fe1b", 900), label: "Croquis 04" },
  { src: u("1487222477894-8943e31ef7b2", 900), label: "Wool / raw" },
  { src: u("1495385794356-15371f348c31", 900), label: "Swatch 12" },
  { src: u("1550614000-4895a10e1bfd", 900), label: "Atelier notes" },
  { src: u("1594633312681-425c7b97ccd1", 900), label: "Bolt study" },
  { src: u("1529626455594-4ff0802cfb7e", 900), label: "Fitting 02" },
  { src: u("1517841905240-472988babdf9", 900), label: "Reference" },
  { src: u("1523381210434-271e8be1f52b", 900), label: "Rail 09" },
];

export const press = [
  "VOGUE ITALIA",
  "ELLE",
  "ANTWERP FASHION WEEK",
  "DAZED",
  "MAISON LOUVRE",
  "STUDIO NOIR",
  "AnOTHER",
  "PARIS COUTURE WEEK",
];
