/* Shared demo data + i18n strings for both prototype variants */

const STRINGS = {
  fr: {
    brand: "Extra Visuals",
    navPhoto: "Photographie",
    navVideo: "Vidéo",
    navBoth: "Les deux",
    heroKicker: "Votre événement, raconté avec soin",
    heroTitle: "Photo & Vidéo pour vos plus grands moments",
    heroSub: "Faites défiler pour découvrir nos réalisations, par catégorie.",
    checkAvail: "Vérifier disponibilité",
    bookNow: "Réserver",
    contact: "Contacter",
    footerNote: "Prototype d'animation — aucune réservation réelle n'est enregistrée ici.",
  },
  en: {
    brand: "Extra Visuals",
    navPhoto: "Photography",
    navVideo: "Video",
    navBoth: "Both",
    heroKicker: "Your event, told with care",
    heroTitle: "Photo & Video for your biggest moments",
    heroSub: "Scroll to explore our work, category by category.",
    checkAvail: "Check availability",
    bookNow: "Book now",
    contact: "Contact",
    footerNote: "Animation prototype — no real booking is recorded here.",
  },
};

/* Each category = one "layer". items are placeholders only. */
const CATEGORIES = {
  photography: [
    { key: "graduation", fr: "Remise des diplômes", en: "Graduation", kind: "photo", seed: "grad" },
    { key: "wedding", fr: "Mariage", en: "Wedding", kind: "photo", seed: "wedding" },
    { key: "outing", fr: "Sortie", en: "Outing", kind: "photo", seed: "outing" },
    { key: "nature", fr: "Nature", en: "Nature", kind: "photo", seed: "nature" },
    { key: "other", fr: "Autres occasions", en: "Other occasions", kind: "photo", seed: "other" },
  ],
  video: [
    { key: "graduation", fr: "Remise des diplômes", en: "Graduation", kind: "video", seed: "gradv" },
    { key: "wedding", fr: "Mariage", en: "Wedding", kind: "video", seed: "weddingv" },
    { key: "podcast", fr: "Podcast", en: "Podcast", kind: "video", seed: "podcast" },
    { key: "promo", fr: "Promotion produit", en: "Product promotion", kind: "video", seed: "promo" },
    { key: "other", fr: "Autres occasions", en: "Other occasions", kind: "video", seed: "otherv" },
  ],
};

/* Placeholder visuals: no external images (keeps the prototype self-contained). */
const THUMB_GRADIENTS = [
  ["#2a2a2a", "#3a3326"],
  ["#20262b", "#39465a"],
  ["#2b2220", "#4a2f22"],
  ["#1f2b24", "#2f4a3a"],
  ["#2a2030", "#4a2f4a"],
  ["#262626", "#4a3a26"],
];
function hashSeed(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}
function gradientFor(seed) {
  const [a, b] = THUMB_GRADIENTS[hashSeed(seed) % THUMB_GRADIENTS.length];
  return `linear-gradient(135deg, ${a}, ${b})`;
}

/* Real client photos, where we have them (photography categories only, for now). */
const PHOTO_LIBRARY = {
  wedding: ["wedding-1.jpg", "wedding-2.jpg", "wedding-3.jpg", "wedding-4.jpg", "wedding-5.jpg", "wedding-6.jpg", "wedding-7.jpg"],
  graduation: ["graduation-1.jpg", "graduation-2.jpg"],
  outing: ["outing-1.jpg", "outing-2.jpg", "outing-3.jpg"],
  other: ["other-1.jpg", "other-2.jpg", "other-3.jpg", "other-4.jpg"],
};

function allPhotoPaths() {
  return Object.values(PHOTO_LIBRARY)
    .flat()
    .map((file) => `assets/photos/${file}`);
}

function itemsFor(cat, count) {
  const real = cat.kind === "photo" ? PHOTO_LIBRARY[cat.key] : null;
  if (real && real.length) {
    return real.map((file, i) => ({
      kind: cat.kind,
      seed: `${cat.seed}-${i + 1}`,
      img: `assets/photos/${file}`,
    }));
  }
  const out = [];
  for (let i = 1; i <= count; i++) {
    out.push({ kind: cat.kind, seed: `${cat.seed}-${i}` });
  }
  return out;
}
