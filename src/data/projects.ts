export interface AdminProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  location: string;
  year: number;
  featuredImage: string;
  beforeImage: string;
  afterImage: string;
  featured: boolean;
}

export const projects: AdminProject[] = [
  {
    id: "sdb-ploemeur",
    slug: "renovation-sdb-ploemeur",
    title: "Rénovation salle de bain complète",
    category: "Salle de bain",
    shortDescription: "Transformation d'une salle de bain vétuste en espace moderne avec douche italienne.",
    fullDescription: "Transformation d'une salle de bain vétuste en espace moderne avec douche italienne, carrelage grand format et meuble vasque suspendu.",
    location: "Ploemeur",
    year: 2026,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: true,
  },
  {
    id: "carrelage-cuisine-lorient",
    slug: "pose-carrelage-cuisine-lorient",
    title: "Pose carrelage cuisine",
    category: "Carrelage",
    shortDescription: "Pose de carrelage imitation bois en grès cérame dans une cuisine ouverte.",
    fullDescription: "Pose de carrelage imitation bois en grès cérame dans une cuisine ouverte, avec plinthes assorties.",
    location: "Lorient",
    year: 2026,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: true,
  },
  {
    id: "chauffe-eau-larmor",
    slug: "remplacement-chauffe-eau-larmor",
    title: "Remplacement chauffe-eau",
    category: "Chauffe-eau",
    shortDescription: "Remplacement d'un vieux chauffe-eau par un ballon thermodynamique classe A.",
    fullDescription: "Remplacement d'un vieux chauffe-eau électrique par un ballon thermodynamique économique classe A.",
    location: "Larmor-Plage",
    year: 2026,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: true,
  },
  {
    id: "faience-sdb-guidel",
    slug: "pose-faience-sdb-guidel",
    title: "Pose faïence salle de bain",
    category: "Carrelage",
    shortDescription: "Pose de faïence blanche metro et carrelage au sol dans une salle de bain rénovée.",
    fullDescription: "Pose de faïence blanche metro et carrelage au sol dans une salle de bain rénovée.",
    location: "Guidel",
    year: 2025,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: false,
  },
  {
    id: "sdb-pmr-queven",
    slug: "salle-de-bain-pmr-queven",
    title: "Salle de bain PMR",
    category: "Salle de bain",
    shortDescription: "Adaptation d'une salle de bain pour personne à mobilité réduite.",
    fullDescription: "Adaptation d'une salle de bain pour personne à mobilité réduite avec douche plain-pied, barres d'appui et carrelage antidérapant.",
    location: "Quéven",
    year: 2025,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: false,
  },
  {
    id: "depannage-lanester",
    slug: "reparation-fuite-lanester",
    title: "Réparation fuite urgente",
    category: "Plomberie",
    shortDescription: "Intervention d'urgence pour une fuite sur canalisation d'eau chaude.",
    fullDescription: "Intervention d'urgence pour une fuite sur canalisation d'eau chaude dans un appartement.",
    location: "Lanester",
    year: 2026,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: false,
  },
];
