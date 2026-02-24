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

/** hero renovation-sdb + page renovation-complete + realisation sdb-ploemeur-after */
const IMG_RENOVATION_SDB = "/images/heroes/renovation-sdb.jpeg";

/** page douche-italienne + realisation douche-italienne-pont-scorff-after */
const IMG_DOUCHE_ITALIENNE = "/images/pages/renovation-douche-italienne.jpeg";

/** page PMR + realisation sdb-pmr-queven-after */
const IMG_SDB_PMR = "/images/pages/renovation-pmr.jpeg";

/** page chaudiere-gaz */
const IMG_CHAUDIERE_GAZ = "/images/pages/chauffage-chaudiere-gaz.jpeg";

/** page plancher-chauffant */
const IMG_PLANCHER_CHAUFFANT = "/images/pages/chauffage-plancher-chauffant.jpeg";

/** section urgence-card + realisation depannage-lanester-before */
const IMG_FUITE_EAU = "/images/sections/urgence-card.png";

// ============================================================
// Hero pages (12 emplacements → 8 images uniques)
// ============================================================
export const heroImages: Record<string, string> = {
  "accueil":              "/images/heroes/accueil.jpeg",
  "depannage-plomberie":  "/images/heroes/depannage-plomberie.jpeg",
  "plomberie":            IMG_PLOMBERIE_HERO,
  "renovation-sdb":       IMG_RENOVATION_SDB,
  "carrelage":            IMG_RENOVATION_SDB,
  "chauffage":            "/images/heroes/chauffage.jpeg",
  "chauffe-eau":          "/images/heroes/chauffe-eau.jpeg",
  "blog":                 HERO_GENERIQUE,
  "avis-clients":         HERO_GENERIQUE,
  "contact":              HERO_GENERIQUE,
  "a-propos":             HERO_GENERIQUE,
  "realisations":         HERO_GENERIQUE,
};

// ============================================================
// Sections (3 emplacements → 2 images uniques)
// ============================================================
export const sectionImages: Record<string, string> = {
  "cta-bandeau":          HERO_GENERIQUE,
  "urgence-card":         IMG_FUITE_EAU,
  "projet-card":          "/images/sections/projet-card.jpeg",
};

// ============================================================
// Pages specifiques (16 emplacements → 10 images uniques)
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
  // Carrelage (reutilise les images sdb/plomberie existantes)
  "carrelage-sol-interieur":     "/images/pages/plomberie-mise-aux-normes.jpeg",
  "carrelage-faience-murale":    IMG_DOUCHE_ITALIENNE,
  "carrelage-exterieur":         "/images/pages/plomberie-robinetterie.jpeg",
  "carrelage-preparation":       IMG_PLOMBERIE_HERO,
  // Chauffage
  "chauffage-chaudiere-gaz":     IMG_CHAUDIERE_GAZ,
  "chauffage-pac":               "/images/pages/chauffage-pac.jpeg",
  "chauffage-plancher-chauffant": IMG_PLANCHER_CHAUFFANT,
};

// ============================================================
// Realisations avant/apres (20 emplacements → images du site mere)
// ============================================================
export const realisationImages: Record<string, string> = {
  // Rénovation SDB Ploemeur → anciennes photos sdb-villeurbanne
  "sdb-ploemeur-before":                  "/images/realisations/sdb-villeurbanne-before.jpeg",
  "sdb-ploemeur-after":                   "/images/realisations/sdb-villeurbanne-after.png",
  // Carrelage cuisine Lorient → anciennes photos cuisine-lyon3
  "carrelage-cuisine-lorient-before":     "/images/realisations/cuisine-lyon3-before.png",
  "carrelage-cuisine-lorient-after":      "/images/realisations/cuisine-lyon3-after.jpeg",
  // Chauffe-eau Larmor → anciennes photos chauffe-eau-caluire
  "chauffe-eau-larmor-before":            "/images/realisations/chauffe-eau-caluire-before.png",
  "chauffe-eau-larmor-after":             "/images/realisations/chauffe-eau-caluire-after.png",
  // Faïence SDB Guidel → anciennes photos douche-lyon7 + douche-italienne
  "faience-sdb-guidel-before":            "/images/realisations/douche-lyon7-before.png",
  "faience-sdb-guidel-after":             IMG_DOUCHE_ITALIENNE,
  // SDB PMR Quéven → anciennes photos sdb-pmr-lyon6
  "sdb-pmr-queven-before":               "/images/realisations/sdb-pmr-lyon6-before.jpeg",
  "sdb-pmr-queven-after":                IMG_SDB_PMR,
  // Dépannage Lanester → anciennes photos depannage-lyon2
  "depannage-lanester-before":            IMG_FUITE_EAU,
  "depannage-lanester-after":             "/images/realisations/depannage-lyon2-after.png",
  // Carrelage terrasse Gestel → anciennes photos sdb-complete-oullins
  "carrelage-terrasse-gestel-before":     "/images/realisations/sdb-complete-oullins-before.png",
  "carrelage-terrasse-gestel-after":      IMG_RENOVATION_SDB,
  // Plomberie Hennebont → anciennes photos chaudiere-tassin
  "plomberie-hennebont-before":           "/images/realisations/chaudiere-tassin-before.png",
  "plomberie-hennebont-after":            IMG_CHAUDIERE_GAZ,
  // Douche italienne Pont-Scorff → anciennes photos plancher-chauffant-ecully
  "douche-italienne-pont-scorff-before":  "/images/realisations/plancher-chauffant-ecully-before.png",
  "douche-italienne-pont-scorff-after":   IMG_DOUCHE_ITALIENNE,
  // Carrelage séjour Caudan → anciennes photos pac-bron
  "carrelage-sejour-caudan-before":       "/images/realisations/pac-bron-before.jpeg",
  "carrelage-sejour-caudan-after":        "/images/realisations/pac-bron-after.png",
};
