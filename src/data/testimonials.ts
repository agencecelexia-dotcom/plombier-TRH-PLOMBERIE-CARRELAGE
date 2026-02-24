export interface AdminTestimonial {
  id: string;
  clientName: string;
  clientRole?: string;
  quote: string;
  rating: number;
  projectType: string;
  date: string;
}

export const testimonials: AdminTestimonial[] = [
  {
    id: "1",
    clientName: "Sophie L.",
    clientRole: "Propriétaire à Ploemeur",
    quote: "Brendan est intervenu rapidement pour une fuite dans notre salle de bain à Ploemeur. Travail propre et soigné, tarif très correct. Je recommande sans hésiter !",
    rating: 5,
    projectType: "Dépannage urgent",
    date: "2026-01",
  },
  {
    id: "2",
    clientName: "Jean-Marc D.",
    clientRole: "Propriétaire à Ploemeur",
    quote: "Rénovation complète de notre salle de bain : plomberie et carrelage impeccables. Brendan est ponctuel, sérieux et de bon conseil. Résultat au-delà de nos attentes.",
    rating: 5,
    projectType: "Salle de bain",
    date: "2026-02",
  },
  {
    id: "3",
    clientName: "Marie-Anne K.",
    clientRole: "Propriétaire à Lorient",
    quote: "Intervention en urgence un samedi matin pour un WC bouché à Lorient. Brendan est arrivé en moins d'une heure. Problème résolu en un rien de temps. Merci !",
    rating: 5,
    projectType: "Dépannage urgent",
    date: "2025-12",
  },
  {
    id: "4",
    clientName: "Patrick M.",
    clientRole: "Propriétaire à Guidel",
    quote: "Pose de carrelage dans notre cuisine à Guidel. Le travail est remarquable, les joints sont parfaits. Un vrai artisan qui prend soin de son travail.",
    rating: 5,
    projectType: "Carrelage",
    date: "2026-01",
  },
  {
    id: "5",
    clientName: "Nathalie R.",
    clientRole: "Propriétaire à Larmor-Plage",
    quote: "Remplacement de notre vieux chauffe-eau par un modèle thermodynamique à Larmor-Plage. Installation propre et explications claires sur le fonctionnement. Très professionnel.",
    rating: 5,
    projectType: "Chauffe-eau",
    date: "2026-02",
  },
];
