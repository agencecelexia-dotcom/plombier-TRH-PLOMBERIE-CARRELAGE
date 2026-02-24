export interface AdminService {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  icon: string;
  order: number;
}

export const services: AdminService[] = [
  {
    id: "depannage-urgent",
    slug: "depannage-plomberie",
    title: "Dépannage urgent",
    shortDescription: "Intervention rapide pour toutes vos urgences plomberie dans le pays de Lorient.",
    fullDescription: "Fuite d'eau, canalisation bouchée, dégât des eaux, panne de chauffe-eau... Brendan intervient en urgence 7j/7 dans un rayon de 30 km autour de Ploemeur. Diagnostic sur place et réparation immédiate dans la majorité des cas.",
    features: ["Intervention rapide", "Disponible 7j/7", "Diagnostic sur place", "Réparation immédiate", "Devis gratuit"],
    icon: "Siren",
    order: 1,
  },
  {
    id: "plomberie-generale",
    slug: "plomberie",
    title: "Plomberie générale",
    shortDescription: "Installation, remplacement et mise aux normes de vos équipements sanitaires.",
    fullDescription: "Robinetterie, tuyauterie, raccordements, WC, éviers, recherche de fuite... J'interviens pour tous vos travaux de plomberie, de l'installation neuve à la mise aux normes de vos installations existantes.",
    features: ["Robinetterie et tuyauterie", "Raccordements", "Recherche de fuite", "Mise aux normes", "Installation neuve"],
    icon: "Wrench",
    order: 2,
  },
  {
    id: "salle-de-bain",
    slug: "renovation-salle-de-bain",
    title: "Salle de bain",
    shortDescription: "Rénovation complète avec plomberie et carrelage, douche italienne, adaptation PMR.",
    fullDescription: "De la conception à la réalisation, je prends en charge votre projet de rénovation de salle de bain. Plomberie et carrelage intégrés : douche italienne, remplacement baignoire, accessibilité PMR, meuble vasque... Un seul interlocuteur du début à la fin.",
    features: ["Douche italienne", "Remplacement baignoire", "Adaptation PMR", "Meuble vasque", "Carrelage intégré"],
    icon: "Bath",
    order: 3,
  },
  {
    id: "carrelage",
    slug: "carrelage",
    title: "Carrelage",
    shortDescription: "Pose de carrelage et faïence pour sols et murs, intérieur et extérieur.",
    fullDescription: "Pose de carrelage, faïence, mosaïque et grès cérame pour tous vos projets : salle de bain, cuisine, séjour, terrasse. Préparation des supports, ragréage, étanchéité et pose soignée. Tous formats et tous styles.",
    features: ["Carrelage sol et mur", "Faïence", "Grès cérame", "Terrasse extérieure", "Préparation des supports"],
    icon: "Grid3x3",
    order: 4,
  },
  {
    id: "chauffage",
    slug: "chauffage",
    title: "Chauffage",
    shortDescription: "Installation et dépannage de chaudière, pompe à chaleur, plancher chauffant.",
    fullDescription: "Installation et remplacement de chaudière gaz condensation, pompe à chaleur air-eau, plancher chauffant, radiateurs. Entretien annuel obligatoire et dépannage de votre système de chauffage.",
    features: ["Chaudière gaz condensation", "Pompe à chaleur air-eau", "Plancher chauffant", "Radiateurs", "Entretien annuel"],
    icon: "Flame",
    order: 5,
  },
  {
    id: "chauffe-eau",
    slug: "chauffe-eau",
    title: "Chauffe-eau",
    shortDescription: "Remplacement, ballon thermodynamique, détartrage et entretien.",
    fullDescription: "Remplacement de chauffe-eau électrique ou gaz, installation de ballon thermodynamique pour réduire votre facture énergétique. Détartrage et entretien pour prolonger la durée de vie de votre équipement.",
    features: ["Chauffe-eau électrique", "Ballon thermodynamique", "Détartrage", "Installation", "Dépannage"],
    icon: "Droplets",
    order: 6,
  },
];
