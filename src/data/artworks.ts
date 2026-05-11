import type { ImageMetadata } from "astro";

import masculinity from "../assets/images/masculinity.webp";
import sovereign from "../assets/images/sovereign.webp";
import crowned from "../assets/images/crowned.webp";
import grandfathersHands from "../assets/images/a-grandfathers-hands.webp";
import enPointe from "../assets/images/en-pointe.webp";
import adorned from "../assets/images/adorned.webp";
import commission1 from "../assets/images/commission-pieces-(1).webp";
import commission2 from "../assets/images/commission-pieces-(2).webp";
import commission3 from "../assets/images/commission-pieces-(3).webp";
import wedding from "../assets/images/wedding-commission.webp";

export interface Artwork {
  slug: string;
  title: string;
  image: ImageMetadata;
  medium: string;
  dimensions: string;
  alt: string;
  description?: string;
  exhibited?: string;
  year?: string;
  featured?: boolean;
  category: "portrait" | "study" | "commission";
}

export const artworks: Artwork[] = [
  {
    slug: "masculinity",
    title: "Masculinity",
    image: masculinity,
    medium: "Charcoal on paper",
    dimensions: "84 × 60 cm",
    alt: "Masculinity — charcoal portrait, softness as strength, tenderness and bloom",
    description:
      "A meditation on softness as strength — tenderness and bloom in the masculine.",
    featured: true,
    category: "portrait",
  },
  {
    slug: "sovereign",
    title: "Sovereign",
    image: sovereign,
    medium: "Charcoal on paper",
    dimensions: "84 × 60 cm",
    alt: "Sovereign — charcoal portrait, a meditation on identity and adornment",
    description: "A meditation on identity and adornment.",
    featured: true,
    category: "portrait",
  },
  {
    slug: "crowned",
    title: "Crowned",
    image: crowned,
    medium: "Charcoal on paper",
    dimensions: "84 × 60 cm",
    alt: "Crowned — charcoal profile study exploring texture and form",
    description: "A charcoal profile study, exploring texture and form.",
    featured: true,
    category: "portrait",
  },
  {
    slug: "a-grandfathers-hands",
    title: "A Grandfather's Hands",
    image: grandfathersHands,
    medium: "Charcoal on paper",
    dimensions: "60 × 60 cm",
    alt: "A Grandfather's Hands — charcoal drawing, generations held in a single gesture",
    description: "Generations held in a single gesture.",
    featured: true,
    category: "study",
  },
  {
    slug: "en-pointe",
    title: "En Pointe",
    image: enPointe,
    medium: "Charcoal on paper",
    dimensions: "60 × 60 cm",
    alt: "En Pointe — charcoal drawing, the architecture of a dancer's back",
    description: "The architecture of a dancer's back.",
    exhibited: "Fronteer Gallery, Sheffield",
    category: "study",
  },
  {
    slug: "adorned",
    title: "Adorned",
    image: adorned,
    medium: "Charcoal on paper",
    dimensions: "60 × 60 cm",
    alt: "Adorned — charcoal drawing, the body as canvas, ink and flesh in dialogue",
    description: "The body as canvas — ink and flesh in dialogue.",
    exhibited: "Open Gallery, Halifax",
    category: "study",
  },
  {
    slug: "commission-one",
    title: "Private Commission, I",
    image: commission1,
    medium: "Charcoal on paper",
    dimensions: "Commissioned size",
    alt: "Private charcoal portrait commission",
    description: "A private commission.",
    category: "commission",
  },
  {
    slug: "commission-two",
    title: "Private Commission, II",
    image: commission2,
    medium: "Graphite on paper",
    dimensions: "Commissioned size",
    alt: "Private graphite portrait commission",
    description: "A private commission.",
    category: "commission",
  },
  {
    slug: "commission-three",
    title: "Private Commission, III",
    image: commission3,
    medium: "Charcoal on paper",
    dimensions: "Commissioned size",
    alt: "Private charcoal portrait commission",
    description: "A private commission.",
    category: "commission",
  },
  {
    slug: "wedding-commission",
    title: "Wedding Commission",
    image: wedding,
    medium: "Charcoal on paper",
    dimensions: "Commissioned size",
    alt: "Wedding portrait commission in charcoal",
    description: "A wedding portrait, commissioned.",
    category: "commission",
  },
];

export const featuredArtworks = artworks.filter((a) => a.featured);
export const galleryArtworks = artworks.filter((a) => a.category !== "commission");
export const commissionExamples = artworks.filter((a) => a.category === "commission");
