/**
 * Mapping des images du site.
 *
 * Les constantes partagees permettent de remplir UN chemin
 * et toutes les pages qui reutilisent cette image se mettent a jour.
 */

// ============================================================
// Images partagees (1 fichier → plusieurs emplacements)
// ============================================================

/** heroes blog, avis-clients, contact, a-propos, realisations + section cta-bandeau */
const HERO_GENERIQUE = "/images/heroes/generique-plombier.jpeg";

/** hero plomberie + page plomberie-tuyauterie */
const IMG_PLOMBERIE_HERO = "/images/heroes/plomberie.jpeg";

/** hero renovation-sdb + page renovation-complete */
const IMG_RENOVATION_SDB = "/images/heroes/renovation-sdb.jpeg";

/** page douche-italienne */
const IMG_DOUCHE_ITALIENNE = "/images/pages/renovation-douche-italienne.jpeg";

/** page PMR */
const IMG_SDB_PMR = "/images/pages/renovation-pmr.jpeg";

/** page chaudiere-gaz */
const IMG_CHAUDIERE_GAZ = "/images/pages/chauffage-chaudiere-gaz.jpeg";

/** page plancher-chauffant */
const IMG_PLANCHER_CHAUFFANT = "/images/pages/chauffage-plancher-chauffant.jpeg";

/** section urgence-card */
const IMG_FUITE_EAU = "/images/sections/urgence-card.png";

// ============================================================
// Hero pages
// ============================================================
export const heroImages: Record<string, string> = {
  "accueil":              "/images/heroes/accueil.jpeg",
  "depannage-plomberie":  "/images/heroes/depannage-plomberie.jpeg",
  "plomberie":            IMG_PLOMBERIE_HERO,
  "renovation-sdb":       IMG_RENOVATION_SDB,
  "carrelage":            "",
  "chauffage":            "/images/heroes/chauffage.jpeg",
  "chauffe-eau":          "/images/heroes/chauffe-eau.jpeg",
  "blog":                 HERO_GENERIQUE,
  "avis-clients":         HERO_GENERIQUE,
  "contact":              HERO_GENERIQUE,
  "a-propos":             HERO_GENERIQUE,
  "realisations":         HERO_GENERIQUE,
};

// ============================================================
// Sections
// ============================================================
export const sectionImages: Record<string, string> = {
  "cta-bandeau":          HERO_GENERIQUE,
  "urgence-card":         IMG_FUITE_EAU,
  "projet-card":          "/images/sections/projet-card.jpeg",
};

// ============================================================
// Pages specifiques
// ============================================================
export const pageImages: Record<string, string> = {
  // A propos
  "a-propos-fondateur":          "/images/pages/a-propos-fondateur.jpeg",
  "a-propos-equipe":             "/images/pages/a-propos-equipe.jpeg",
  // Plomberie
  "plomberie-robinetterie":      "/images/pages/plomberie-robinetterie.jpeg",
  "plomberie-tuyauterie":        IMG_PLOMBERIE_HERO,
  "plomberie-recherche-fuite":   "/images/pages/plomberie-recherche-fuite.jpeg",
  "plomberie-mise-aux-normes":   "/images/pages/plomberie-mise-aux-normes.jpeg",
  // Renovation salle de bain
  "renovation-douche-italienne": IMG_DOUCHE_ITALIENNE,
  "renovation-complete":         IMG_RENOVATION_SDB,
  "renovation-pmr":              IMG_SDB_PMR,
  // Carrelage
  "carrelage-sol-interieur":     "",
  "carrelage-faience-murale":    "",
  "carrelage-exterieur":         "",
  "carrelage-preparation":       "",
  // Chauffage
  "chauffage-chaudiere-gaz":     IMG_CHAUDIERE_GAZ,
  "chauffage-pac":               "/images/pages/chauffage-pac.jpeg",
  "chauffage-plancher-chauffant": IMG_PLANCHER_CHAUFFANT,
};

// ============================================================
// Realisations avant/apres
// ============================================================
export const realisationImages: Record<string, string> = {
  "sdb-ploemeur-before":                  "",
  "sdb-ploemeur-after":                   "",
  "carrelage-cuisine-lorient-before":     "",
  "carrelage-cuisine-lorient-after":      "",
  "chauffe-eau-larmor-before":            "",
  "chauffe-eau-larmor-after":             "",
  "faience-sdb-guidel-before":            "",
  "faience-sdb-guidel-after":             "",
  "sdb-pmr-queven-before":               "",
  "sdb-pmr-queven-after":                "",
  "depannage-lanester-before":            "",
  "depannage-lanester-after":             "",
  "carrelage-terrasse-gestel-before":     "",
  "carrelage-terrasse-gestel-after":      "",
  "plomberie-hennebont-before":           "",
  "plomberie-hennebont-after":            "",
  "douche-italienne-pont-scorff-before":  "",
  "douche-italienne-pont-scorff-after":   "",
  "carrelage-sejour-caudan-before":       "",
  "carrelage-sejour-caudan-after":        "",
};
