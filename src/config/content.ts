/**
 * CONTENU TEXTUEL DU SITE — Fichier centralisé
 *
 * Tout le texte visible du site est ici.
 * Les valeurs dynamiques (ville, téléphone, nom...) viennent de siteConfig/clientConfig.
 * Pour personnaliser le contenu, modifiez ce fichier.
 */

import { siteConfig } from "./site";
import { clientConfig } from "./client.config";

// ─── Textes partagés (CTA, boutons, labels) ───

export const shared = {
  cta: {
    appelerMaintenant: `Appelez maintenant — ${siteConfig.phone}`,
    appelezNous: `Appelez-nous — ${siteConfig.phone}`,
    demanderDevis: "Demander un devis gratuit",
    voirRealisations: "Voir toutes nos réalisations",
    voirAvis: "Voir tous les avis",
    retourAccueil: "Retour à l'accueil",
    envoyerDemande: "Envoyer ma demande",
    envoiEnCours: "Envoi en cours...",
  },
  sections: {
    servicesLies: "Services liés",
  },
};

// ─── Composants sections ───

export const heroSection = {
  eyebrow: `Plombier carreleur — ${siteConfig.address.city}`,
};

export const ctaSection = {
  defaultTitle: "Un projet ? Une urgence ? Contactez-moi maintenant.",
  defaultSubtitle: "",
  ctaPrimary: shared.cta.appelerMaintenant,
  ctaSecondary: shared.cta.demanderDevis,
};

export const reassuranceBand = {
  stats: [
    { value: clientConfig.chiffres.anneesExperience, suffix: "+", label: "Années d'expérience" },
    { value: clientConfig.chiffres.nombreInterventions, suffix: "+", label: "Interventions" },
    { value: Number(clientConfig.chiffres.tauxSatisfaction), suffix: "%", label: "Clients satisfaits" },
    { value: 7, suffix: "j/7", label: "Disponibilité" },
  ],
};

export const urgencyProjectCards = {
  title: "Urgence ou projet ?",
  urgency: {
    title: "J'ai une urgence",
    subtitle: "Fuite, dégât des eaux, canalisation bouchée...",
    cta: "Appeler maintenant",
  },
  project: {
    title: "Je planifie des travaux",
    subtitle: "Rénovation, carrelage, installation...",
    cta: shared.cta.demanderDevis,
  },
};

export const contactForm = {
  labels: {
    nom: "Nom *",
    telephone: "Téléphone *",
    email: "Email *",
    service: "Type de besoin",
    message: "Message (optionnel)",
  },
  placeholders: {
    nom: "Votre nom",
    telephone: "06 XX XX XX XX",
    email: "votre@email.fr",
    service: "Sélectionnez un service",
    message: "Décrivez votre besoin...",
  },
  serviceOptions: [
    "Urgence / Dépannage",
    "Plomberie générale",
    "Rénovation salle de bain",
    "Carrelage / Faïence",
    "Chauffage",
    "Chauffe-eau",
    "Autre",
  ],
  rgpd: "J'accepte que mes données soient utilisées pour me recontacter dans le cadre de ma demande. Voir notre politique de confidentialité.",
  success: {
    title: "Demande envoyée !",
    text: "Je vous recontacte sous 48h. Pour une urgence, appelez-moi directement.",
  },
  error: "Une erreur est survenue. Veuillez réessayer.",
};

// ─── Page Accueil ───

export const homepage = {
  hero: {
    title: clientConfig.seo.slogan,
    subtitle: "Fuite d'eau, rénovation salle de bain, pose de carrelage ? Devis gratuit sous 48h.",
    ctaSecondaryLabel: shared.cta.demanderDevis,
    badges: ["Intervention rapide", "Décennale", "Devis gratuit", `${siteConfig.googleRating}/5`],
  },
  services: {
    title: "Des solutions pour tous vos besoins",
    subtitle: "De l'urgence plomberie à la pose de carrelage, un artisan qualifié à votre service.",
  },
  realisations: {
    title: "Nos réalisations",
    subtitle: "Découvrez mes derniers chantiers en images.",
  },
  testimonials: {
    title: "Ce que disent mes clients",
    ratingLabel: "avis Google",
  },
};

// ─── Page Dépannage ───

export const depannage = {
  hero: {
    title: `Dépannage plomberie à ${siteConfig.address.city}`,
    subtitle: "Fuite d'eau, WC bouché, dégât des eaux ? Appelez maintenant.",
    badges: ["Urgence 7j/7", "Intervention rapide", "Ploemeur & environs"],
  },
  urgences: {
    title: "Les urgences que je prends en charge",
    subtitle: "Quel que soit votre problème, j'ai la solution.",
    items: [
      { title: "Fuite d'eau", desc: "Fuite sur canalisation, robinet, raccord ou chasse d'eau. Intervention rapide pour limiter les dégâts." },
      { title: "Dégât des eaux", desc: "Coupure d'eau, assèchement et réparation. Je vous accompagne pour le constat d'assurance." },
      { title: "Canalisation bouchée", desc: "Débouchage WC, évier, douche ou canalisation principale par furet ou haute pression." },
      { title: "Panne de chauffe-eau", desc: "Diagnostic et réparation de votre chauffe-eau électrique ou thermodynamique, même le week-end." },
    ],
  },
  etapes: {
    title: "Comment ça marche ?",
    subtitle: "3 étapes simples pour un dépannage sans stress.",
    items: [
      { title: "Vous appelez", desc: "Décrivez-moi votre problème par téléphone. J'évalue l'urgence et vous donne un tarif indicatif." },
      { title: "J'interviens rapidement", desc: "Je me déplace chez vous avec tout le matériel nécessaire." },
      { title: "Problème résolu", desc: "Réparation immédiate dans la majorité des cas. Facture claire, pas de mauvaise surprise." },
    ],
  },
  tarifs: {
    title: "Tarifs indicatifs",
    subtitle: "Transparence totale sur mes prix. Le tarif exact vous est confirmé avant intervention.",
    items: [
      { service: "Débouchage WC / évier", prix: "À partir de 89 €" },
      { service: "Réparation fuite", prix: "À partir de 120 €" },
      { service: "Remplacement robinet", prix: "À partir de 95 €" },
      { service: "Dégât des eaux (intervention)", prix: "À partir de 150 €" },
      { service: "Déplacement + diagnostic", prix: "À partir de 49 €" },
    ],
    footnote: "* Tarifs TTC indicatifs hors pièces. Supplément possible en soirée, week-end et jours fériés.",
  },
  servicesLies: ["Plomberie", "Chauffage", "Chauffe-eau"],
};

// ─── Page Plomberie ───

export const plomberie = {
  hero: {
    title: `Plomberie à ${siteConfig.address.city}`,
    subtitle: "Robinetterie, tuyauterie, mise aux normes, recherche de fuite... Intervention rapide et travail soigné.",
  },
  services: {
    title: "Mes services de plomberie",
    subtitle: "De l'installation neuve à la réparation, j'interviens sur tous vos équipements.",
    items: [
      { title: "Robinetterie", desc: "Installation et remplacement de robinets, mitigeurs, douchettes. Toutes marques." },
      { title: "Tuyauterie et raccordements", desc: "Installation, remplacement et réparation de canalisations en cuivre, PER ou multicouche." },
      { title: "Recherche de fuite", desc: "Détection non destructive par caméra thermique, acoustique ou colorimétrique." },
      { title: "Mise aux normes", desc: "Mise en conformité de vos installations selon les normes en vigueur (DTU, NF)." },
    ],
  },
  avantages: {
    title: "Pourquoi me choisir ?",
    items: [
      `Plus de ${siteConfig.yearsExperience} ans d'expérience`,
      "Matériel professionnel",
      "Chantier laissé propre après intervention",
      "Garantie décennale sur tous les travaux",
      "Devis détaillé gratuit sous 48h",
      "Artisan local — Ploemeur et environs",
    ],
  },
  servicesLies: ["Dépannage plomberie", "Rénovation salle de bain"],
};

// ─── Page Rénovation salle de bain ───

export const renovationSdb = {
  hero: {
    title: `Rénovation salle de bain à ${siteConfig.address.city}`,
    subtitle: "Plomberie et carrelage intégrés : douche italienne, rénovation complète, adaptation PMR. Un seul interlocuteur.",
  },
  projets: {
    title: "Mes types de projets",
    subtitle: "Chaque salle de bain est unique. J'adapte mes solutions à vos besoins et votre budget.",
    items: [
      { title: "Douche italienne", desc: "Receveur extra-plat, carrelage grand format, paroi vitrée, pommeau pluie. Design et accessibilité." },
      { title: "Rénovation complète", desc: "Démolition, plomberie, carrelage, sanitaires, meuble vasque, éclairage. Un seul interlocuteur." },
      { title: "Adaptation PMR", desc: "Barre d'appui, siège douche, receveur plain-pied, antidérapant. Éligible MaPrimeAdapt'." },
    ],
  },
  etapes: {
    title: "Ma méthode en 4 étapes",
    subtitle: "Un accompagnement clé en main pour un résultat à la hauteur de vos attentes.",
    items: [
      { title: "Visite conseil", desc: "Je viens chez vous pour écouter vos envies, prendre les mesures et vous conseiller." },
      { title: "Devis détaillé", desc: "Vous recevez un devis précis sous 48h avec le détail des prestations et matériaux." },
      { title: "Travaux", desc: "Je réalise les travaux dans les délais convenus. Chantier propre garanti." },
      { title: "Réception", desc: "Vérification finale ensemble. Vous ne payez le solde qu'à votre entière satisfaction." },
    ],
  },
  realisations: {
    title: "Mes réalisations salle de bain",
    subtitle: "Découvrez mes derniers projets de rénovation.",
  },
  servicesLies: ["Plomberie", "Carrelage", "Chauffe-eau"],
};

// ─── Page Carrelage ───

export const carrelage = {
  hero: {
    title: `Carrelage à ${siteConfig.address.city}`,
    subtitle: "Pose de carrelage, faïence et mosaïque pour tous vos projets intérieurs et extérieurs.",
  },
  services: {
    title: "Mes prestations carrelage",
    subtitle: "Des sols aux murs, en intérieur comme en extérieur, je pose tous types de carrelage.",
    items: [
      { title: "Carrelage sol intérieur", desc: "Grès cérame, imitation bois ou pierre, grands formats. Séjour, cuisine, entrée, chambre." },
      { title: "Faïence murale", desc: "Salle de bain, cuisine, crédence. Faïence, carreaux metro, mosaïque, tous styles." },
      { title: "Carrelage extérieur", desc: "Terrasse, balcon, contour de piscine. Grès cérame antidérapant, pose sur plots ou collée." },
      { title: "Préparation des supports", desc: "Ragréage, chape, étanchéité sous carrelage (SPEC). Des fondations solides pour un résultat durable." },
    ],
  },
  avantages: {
    title: "Pourquoi me confier votre carrelage ?",
    items: [
      "Pose soignée et finitions impeccables",
      "Tous formats : du 20x20 au 120x60",
      "Conseil en choix de matériaux et calepinage",
      "Préparation des supports incluse",
      "Carrelage intérieur et extérieur",
      "Plomberie + carrelage : un seul interlocuteur",
    ],
  },
  realisations: {
    title: "Mes réalisations carrelage",
    subtitle: "Découvrez mes derniers chantiers de pose de carrelage.",
  },
  servicesLies: ["Salle de bain", "Plomberie"],
};

// ─── Page Chauffage ───

export const chauffage = {
  hero: {
    title: `Chauffage à ${siteConfig.address.city}`,
    subtitle: "Chaudière gaz, pompe à chaleur, plancher chauffant. Installation, entretien et dépannage.",
    badges: ["Entretien annuel", "Dépannage", "Devis gratuit"],
  },
  solutions: {
    title: "Mes solutions de chauffage",
    subtitle: "Installation, remplacement et dépannage de tous types de systèmes de chauffage.",
    items: [
      { title: "Chaudière gaz condensation", desc: "Installation et remplacement de chaudière gaz dernière génération. Jusqu'à 30% d'économies sur votre facture." },
      { title: "Pompe à chaleur air-eau", desc: "Solution écologique et économique. Éligible aux aides MaPrimeRénov' et CEE." },
      { title: "Plancher chauffant", desc: "Confort optimal et diffusion homogène de la chaleur. Idéal en rénovation ou construction neuve." },
    ],
  },
  entretien: {
    title: "Entretien annuel chaudière",
    subtitle: "L'entretien de votre chaudière est obligatoire chaque année. J'interviens sur toutes les marques.",
    cardTitle: "Ce qui est inclus",
    prix: "À partir de 89 € TTC",
    items: [
      "Vérification de la combustion et des émissions",
      "Nettoyage du corps de chauffe et du brûleur",
      "Contrôle de la pression et du circulateur",
      "Vérification des dispositifs de sécurité",
      "Mesure du taux de CO (monoxyde de carbone)",
      "Remise de l'attestation d'entretien",
    ],
  },
  rge: {
    title: "Éligible aux aides de l'État",
    text: "Selon votre situation, vous pouvez bénéficier des aides financières pour vos travaux de chauffage : MaPrimeRénov', CEE, éco-prêt à taux zéro. Je vous accompagne dans vos démarches.",
  },
  servicesLies: ["Chauffe-eau", "Dépannage plomberie"],
};

// ─── Page Chauffe-eau ───

export const chauffeEau = {
  hero: {
    title: `Chauffe-eau à ${siteConfig.address.city}`,
    subtitle: "Électrique, thermodynamique, solaire. Conseil expert pour choisir la solution la plus adaptée à vos besoins.",
  },
  services: {
    title: "Mes services chauffe-eau",
    subtitle: "Installation, remplacement, entretien et dépannage de tous types de chauffe-eau.",
    items: [
      { title: "Chauffe-eau électrique", desc: "Remplacement et installation de cumulus électrique, toutes capacités (75L à 300L). Intervention rapide en cas de panne." },
      { title: "Ballon thermodynamique", desc: "Jusqu'à 3x moins d'électricité. Éligible aux aides de l'État. Amortissement en 3 à 5 ans." },
      { title: "Détartrage et entretien", desc: "Prolongez la durée de vie de votre chauffe-eau. Le détartrage permet de maintenir les performances optimales." },
      { title: "Dépannage", desc: "Plus d'eau chaude ? Fuite sur le groupe de sécurité ? J'interviens rapidement pour vous dépanner." },
    ],
  },
  comparatif: {
    title: "Électrique vs Thermodynamique",
    subtitle: "Comparez les deux technologies pour faire le bon choix.",
    headers: ["Critère", "Électrique", "Thermodynamique"],
    rows: [
      { critere: "Consommation", electrique: "Élevée", thermo: "3x moins" },
      { critere: "Prix installation", electrique: "500 - 1 200 €", thermo: "2 000 - 3 500 €" },
      { critere: "Aides financières", electrique: "Aucune", thermo: "MaPrimeRénov', CEE" },
      { critere: "Durée de vie", electrique: "10 - 15 ans", thermo: "15 - 20 ans" },
      { critere: "Amortissement", electrique: "-", thermo: "3 à 5 ans" },
      { critere: "Classe énergie", electrique: "C / D", thermo: "A / A+" },
    ],
  },
  servicesLies: ["Chauffage", "Dépannage plomberie"],
};

// ─── Page Contact ───

export const contact = {
  hero: {
    title: "Contactez-moi — Devis gratuit sous 48h",
    subtitle: "Remplissez le formulaire ou appelez-moi directement. Je réponds à toutes les demandes.",
  },
  formTitle: "Demandez votre devis gratuit",
  coordonnees: {
    title: "Mes coordonnées",
    labels: {
      telephone: "Téléphone",
      email: "Email",
      adresse: "Adresse",
      horaires: "Horaires",
    },
    horairesLabels: {
      semaine: "Lun-Ven :",
      samedi: "Samedi :",
      urgences: "Urgences :",
    },
    mapPlaceholder: "Intégrer ici l'iframe Google Maps avec la zone d'intervention",
  },
};

// ─── Page Avis clients ───

export const avisClients = {
  hero: {
    title: "Avis clients — Ce qu'ils disent de moi",
  },
  ratingIntro: (count: number) => `Basée sur ${count} avis Google`,
  voirGoogle: "Voir tous les avis sur Google",
  cta: {
    title: "Vous aussi, faites-moi confiance",
    subtitle: "Demandez votre devis gratuit ou appelez-moi directement.",
  },
};

// ─── Page À propos ───

export const aPropos = {
  hero: {
    title: `À propos de ${siteConfig.name}`,
    subtitle: "Professionnalisme, réactivité et transparence au service de votre confort.",
  },
  histoire: {
    title: "Mon parcours",
    paragraphs: [
      `Fort de ${siteConfig.yearsExperience} ans d'expérience dans le bâtiment, j'ai créé ${siteConfig.name} en ${siteConfig.foundedYear} à ${siteConfig.address.city}. Ma double compétence en plomberie et carrelage me permet de prendre en charge vos projets de A à Z, avec un seul interlocuteur.`,
      `Artisan installé à Ploemeur, j'interviens dans tout le pays de Lorient : Lorient, Larmor-Plage, Guidel, Quéven, Lanester, Hennebont et leurs environs. Du dépannage urgent à la rénovation complète de salle de bain, je m'engage à fournir un travail soigné et un service réactif.`,
      "Couvert par une assurance décennale, je vous accompagne dans tous vos projets de plomberie, carrelage et chauffage, avec la garantie d'un travail de qualité.",
    ],
  },
  equipe: {
    title: "Votre artisan",
    subtitle: "Un professionnel qualifié et passionné à votre service.",
  },
  chiffres: {
    title: "En quelques chiffres",
    items: [
      { value: siteConfig.yearsExperience, label: "Années d'expérience" },
      { value: siteConfig.interventionsCount.toLocaleString("fr-FR"), label: "Interventions réalisées" },
      { value: siteConfig.googleReviewCount, label: "Avis Google" },
      { value: `${siteConfig.googleRating}/5`, label: "Note moyenne" },
    ],
  },
  valeurs: {
    title: "Mes valeurs",
    items: [
      { title: "Réactivité", desc: `J'interviens dans les meilleurs délais. En urgence, comptez moins de ${clientConfig.chiffres.delaiIntervention}.` },
      { title: "Transparence", desc: "Devis détaillés, tarifs clairs, pas de mauvaise surprise. Vous savez exactement ce que vous payez." },
      { title: "Qualité", desc: "Travail soigné, matériaux de qualité, chantier propre. Je garantis la qualité de mes prestations." },
    ],
  },
  certifications: {
    title: "Certifications et assurances",
    subtitle: "Votre tranquillité d'esprit est ma priorité.",
    items: [
      { label: "Assurance décennale", value: siteConfig.assuranceDecennale },
      { label: "SIRET", value: siteConfig.siret },
    ],
  },
};

// ─── Page Blog ───

export const blog = {
  hero: {
    title: "Blog — Conseils plomberie et carrelage",
    subtitle: "Retrouvez bientôt mes articles pour vous aider au quotidien.",
  },
  empty: {
    title: "Bientôt disponible",
    text: "Je prépare des articles sur l'entretien de votre plomberie, le choix du carrelage, les économies d'énergie, les aides pour la rénovation... Revenez bientôt !",
  },
};

// ─── Page Réalisations ───

export const realisationsPage = {
  hero: {
    title: "Mes réalisations — Avant / Après",
    subtitle: "Découvrez mes derniers chantiers en images. Chaque projet est réalisé avec soin et professionnalisme.",
  },
  categories: ["Tout", "Salle de bain", "Plomberie", "Carrelage", "Chauffage", "Chauffe-eau"],
  empty: "Aucune réalisation dans cette catégorie pour le moment.",
  cta: {
    title: "Vous avez un projet similaire ?",
    subtitle: "Contactez-moi pour un devis gratuit et personnalisé.",
  },
};

// ─── Page Mentions légales ───

export const mentionsLegales = {
  title: "Mentions légales",
  editeur: {
    title: "1. Éditeur du site",
    intro: (url: string) => `Le site ${url} est édité par :`,
    labels: {
      raisonSociale: "Raison sociale :",
      siege: "Siège social :",
      siret: "SIRET :",
      telephone: "Téléphone :",
      email: "Email :",
      directeurPublication: "Directeur de la publication :",
    },
  },
  hebergeur: {
    title: "2. Hébergeur",
    text: "Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.",
  },
  propriete: {
    title: "3. Propriété intellectuelle",
    text: (legalName: string) =>
      `L'ensemble des contenus (textes, images, graphismes, logo, icônes) de ce site sont la propriété exclusive de ${legalName}, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable.`,
  },
  rgpd: {
    title: "4. Protection des données personnelles (RGPD)",
    paragraphs: [
      "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles.",
      "Les données collectées via le formulaire de contact (nom, téléphone, email, message) sont utilisées uniquement pour répondre à votre demande. Elles ne sont ni transmises à des tiers, ni utilisées à des fins commerciales.",
    ],
    labels: {
      responsable: "Responsable du traitement :",
      contact: "Contact :",
      duree: "Durée de conservation :",
    },
    dureeValue: "3 ans à compter du dernier contact.",
    droitsIntro: "Pour exercer vos droits, adressez-vous à :",
  },
  cookies: {
    title: "5. Cookies",
    text: "Ce site utilise des cookies strictement nécessaires à son fonctionnement. Aucun cookie de tracking ou publicitaire n'est utilisé. Des cookies d'analyse anonyme (Google Analytics) peuvent être mis en place avec votre consentement.",
  },
  credits: {
    title: "6. Crédits",
    text: "Site conçu et développé par",
    agence: "Agence Celexia",
  },
};
