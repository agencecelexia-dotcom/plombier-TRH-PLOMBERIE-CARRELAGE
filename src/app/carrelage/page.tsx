import type { Metadata } from "next";
import Link from "next/link";
import { Grid3x3, Layers, Sun, Hammer, CheckCircle } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { RealisationCard } from "@/components/sections/RealisationCard";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { siteConfig } from "@/config/site";
import { faqCarrelage } from "@/config/faq";
import { realisations } from "@/config/realisations";
import { heroImages, pageImages } from "@/config/images";
import { carrelage, shared } from "@/config/content";

export const metadata: Metadata = generatePageMetadata({
  title: `Carreleur ${siteConfig.address.city} | Pose carrelage et faïence`,
  description: `Carreleur professionnel à ${siteConfig.address.city}. Pose de carrelage, faïence, mosaïque. Sol, mur, terrasse. Salle de bain, cuisine, séjour. Devis gratuit.`,
  path: "/carrelage",
});

const serviceIcons = [Grid3x3, Layers, Sun, Hammer];

const serviceImages: Record<string, { prompt: string; imageKey: string }> = {
  "Carrelage sol intérieur": { prompt: "Carreleur posant du carrelage imitation bois grand format dans un sejour lumineux, genoux au sol, outils de pose, photo realiste, ratio 3:2", imageKey: "carrelage-sol-interieur" },
  "Faïence murale": { prompt: "Carreleur posant de la faience blanche metro sur le mur d'une salle de bain, spatule crantee, pose soignee, photo realiste, ratio 3:2", imageKey: "carrelage-faience-murale" },
  "Carrelage extérieur": { prompt: "Terrasse exterieure en cours de pose, carrelage gres cerame gris, maison bretonne en arriere-plan, artisan au travail, photo realiste, ratio 3:2", imageKey: "carrelage-exterieur" },
  "Préparation des supports": { prompt: "Artisan appliquant un ragreage sur sol beton, spatule large, seau de mortier, chantier en cours, photo realiste, ratio 3:2", imageKey: "carrelage-preparation" },
};

const serviceLiesLinks: Record<string, string> = {
  "Salle de bain": "/renovation-salle-de-bain",
  "Plomberie": "/plomberie",
};

export default function CarrelagePage() {
  const carrelageRealisations = realisations.filter(
    (r) => r.category === "Carrelage"
  );

  return (
    <ServicePageLayout
      hero={{
        title: carrelage.hero.title,
        subtitle: carrelage.hero.subtitle,
        imagePlaceholder: {
          prompt: "Carreleur professionnel posant du carrelage grand format gris dans une salle de bain moderne, travail soigne, outils de pose, lumiere naturelle, photo realiste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["carrelage"] || undefined,
        },
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Carrelage" },
      ]}
      faqs={faqCarrelage}
    >
      {/* Services détaillés */}
      <SectionContainer>
        <SectionHeading
          title={carrelage.services.title}
          subtitle={carrelage.services.subtitle}
        />
        <div className="space-y-12">
          {carrelage.services.items.map((s, i) => {
            const Icon = serviceIcons[i];
            const imgData = serviceImages[s.title];
            return (
              <div key={s.title} className="grid lg:grid-cols-2 gap-8 items-center">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">{s.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <ImagePlaceholder prompt={imgData?.prompt ?? ""} src={pageImages[imgData?.imageKey ?? ""] || undefined} aspectRatio="3/2" alt={s.title} />
                </div>
              </div>
            );
          })}
        </div>
      </SectionContainer>

      {/* Pourquoi me choisir */}
      <SectionContainer variant="gray">
        <SectionHeading title={carrelage.avantages.title} />
        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {carrelage.avantages.items.map((a) => (
              <div key={a} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent-500 shrink-0" />
                <span className="text-sm font-medium">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Réalisations carrelage */}
      {carrelageRealisations.length > 0 && (
        <SectionContainer>
          <SectionHeading
            title={carrelage.realisations.title}
            subtitle={carrelage.realisations.subtitle}
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {carrelageRealisations.slice(0, 4).map((real) => (
              <RealisationCard key={real.id} realisation={real} />
            ))}
          </div>
        </SectionContainer>
      )}

      {/* Services liés */}
      <SectionContainer variant="white">
        <SectionHeading title={shared.sections.servicesLies} />
        <div className="flex flex-wrap justify-center gap-4">
          {carrelage.servicesLies.map((label) => (
            <Link key={label} href={serviceLiesLinks[label]} className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">{label}</Link>
          ))}
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
