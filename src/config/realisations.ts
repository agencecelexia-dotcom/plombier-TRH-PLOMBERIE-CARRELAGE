import type { Realisation } from "@/types";

export const realisations: Realisation[] = [
  {
    id: "sdb-ploemeur",
    title: "Rénovation salle de bain complète",
    category: "Salle de bain",
    city: "Ploemeur",
    description:
      "Transformation d'une salle de bain vétuste en espace moderne avec douche italienne, carrelage grand format et meuble vasque suspendu.",
    beforePrompt:
      "Vieille salle de bain années 80, baignoire jaunâtre, carrelage rose fissuré, robinetterie rouillée, photo réaliste brute, ratio 4:3",
    afterPrompt:
      "Même salle de bain rénovée, douche italienne carrelage gris anthracite grand format, meuble vasque bois clair suspendu, miroir LED, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "carrelage-cuisine-lorient",
    title: "Pose carrelage cuisine",
    category: "Carrelage",
    city: "Lorient",
    description:
      "Pose de carrelage imitation bois en grès cérame dans une cuisine ouverte, avec plinthes assorties.",
    beforePrompt:
      "Cuisine ouverte sol vinyle usé et abîmé, traces d'usure, mobilier en place, photo réaliste, ratio 4:3",
    afterPrompt:
      "Cuisine ouverte sol carrelage imitation bois grès cérame, joints fins, plinthes assorties, rendu chaleureux, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "chauffe-eau-larmor",
    title: "Remplacement chauffe-eau",
    category: "Chauffe-eau",
    city: "Larmor-Plage",
    description:
      "Remplacement d'un vieux chauffe-eau électrique par un ballon thermodynamique économique classe A.",
    beforePrompt:
      "Vieux chauffe-eau rouillé encrassé dans placard technique, tuyaux oxydés, photo réaliste, ratio 4:3",
    afterPrompt:
      "Chauffe-eau thermodynamique neuf blanc, tuyauterie cuivre neuve, étiquette énergie A, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "faience-sdb-guidel",
    title: "Pose faïence salle de bain",
    category: "Carrelage",
    city: "Guidel",
    description:
      "Pose de faïence blanche metro et carrelage au sol dans une salle de bain rénovée.",
    beforePrompt:
      "Murs de salle de bain bruts enduits, sol béton brut, pièce en cours de rénovation, photo réaliste, ratio 4:3",
    afterPrompt:
      "Salle de bain faïence blanche métro au mur, carrelage gris clair au sol, joints blancs impeccables, douche moderne, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "sdb-pmr-queven",
    title: "Salle de bain PMR",
    category: "Salle de bain",
    city: "Quéven",
    description:
      "Adaptation d'une salle de bain pour personne à mobilité réduite avec douche plain-pied, barres d'appui et carrelage antidérapant.",
    beforePrompt:
      "Salle de bain étroite avec baignoire haute, accès difficile, carrelage glissant, photo réaliste, ratio 4:3",
    afterPrompt:
      "Salle de bain PMR adaptée, barre d'appui chromée, siège douche rabattable, receveur plain-pied carrelage antidérapant, espace circulation large, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "depannage-lanester",
    title: "Réparation fuite urgente",
    category: "Plomberie",
    city: "Lanester",
    description:
      "Intervention d'urgence pour une fuite sur canalisation d'eau chaude dans un appartement.",
    beforePrompt:
      "Fuite d'eau importante sur tuyau cuivre sous évier, gouttes d'eau, sol mouillé, urgence, photo réaliste, ratio 4:3",
    afterPrompt:
      "Tuyauterie cuivre neuve sous évier, raccords neufs chromés, sol sec, réparation propre, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "carrelage-terrasse-gestel",
    title: "Carrelage terrasse extérieure",
    category: "Carrelage",
    city: "Gestel",
    description:
      "Pose de grès cérame antidérapant sur terrasse extérieure avec pente d'évacuation et joints drainants.",
    beforePrompt:
      "Terrasse extérieure béton brut fissuré, mousse verte, aspect vétuste, maison bretonne en arrière-plan, photo réaliste, ratio 4:3",
    afterPrompt:
      "Terrasse extérieure carrelage grès cérame gris anthracite antidérapant, joints drainants, mobilier de jardin moderne, maison bretonne en arrière-plan, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "plomberie-hennebont",
    title: "Réfection plomberie complète",
    category: "Plomberie",
    city: "Hennebont",
    description:
      "Remplacement complet de la tuyauterie dans une maison ancienne avec passage en multicouche.",
    beforePrompt:
      "Tuyauterie ancienne en plomb sous évier cuisine maison ancienne, raccords vétustes, photo réaliste, ratio 4:3",
    afterPrompt:
      "Tuyauterie neuve multicouche sous évier cuisine, raccords chromés neufs, installation propre et moderne, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "douche-italienne-pont-scorff",
    title: "Douche italienne sur mesure",
    category: "Salle de bain",
    city: "Pont-Scorff",
    description:
      "Création d'une douche italienne avec receveur extra-plat, carrelage grand format et niche murale intégrée.",
    beforePrompt:
      "Salle de bain avec baignoire classique blanche, murs peints écaillés, sol vinyle usé, photo réaliste, ratio 4:3",
    afterPrompt:
      "Douche italienne ouverte, receveur extra-plat, carrelage grand format gris clair, pommeau pluie chromé, niche murale éclairée, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "carrelage-sejour-caudan",
    title: "Carrelage séjour imitation parquet",
    category: "Carrelage",
    city: "Caudan",
    description:
      "Pose de carrelage imitation parquet chêne dans un séjour de 35m², avec plinthes et seuils de porte assortis.",
    beforePrompt:
      "Séjour avec vieux parquet abîmé rayé, plinthes décollées, lumière naturelle, photo réaliste, ratio 4:3",
    afterPrompt:
      "Séjour lumineux carrelage imitation parquet chêne clair, plinthes assorties, finition soignée, mobilier moderne, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
];
