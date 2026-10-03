export type MediaType = "image" | "video";

export type MediaAsset = {
  type: MediaType;
  src: string;
  alt: string;
};

export const assets = {
  videos: {
    ramFullWorks: "/assets/ram-full-works.mp4",
    f250Exterior: "/assets/f250-exterior.mp4",
    audiS4: "/assets/audi-s4.mp4",
    audiMaintenance: "/assets/audi-maintenance.mp4",
  },
  images: {
    gallery01: "/assets/gallery-01.jpg",
    gallery02: "/assets/gallery-02.jpg",
    gallery03: "/assets/gallery-03.jpg",
    gallery04: "/assets/gallery-04.jpg",
    gallery05: "/assets/gallery-05.jpg",
    gallery06: "/assets/gallery-06.jpg",
    gallery07: "/assets/gallery-07.jpg",
    gallery08: "/assets/gallery-08.jpg",
    gallery09: "/assets/gallery-09.jpg",
    gallery10: "/assets/gallery-10.jpg",
  },
} as const;

export const siteMedia = {
  hero: {
    type: "video" as const,
    src: assets.videos.ramFullWorks,
    alt: "Tinted RAM truck — Safeguard Window Tint",
    poster: assets.images.gallery08,
  },
  services: [
    {
      type: "image" as const,
      src: assets.images.gallery01,
      alt: "Luxury SUV with professional window tint",
    },
    {
      type: "image" as const,
      src: assets.images.gallery06,
      alt: "Audi sedan with ceramic window film",
    },
    {
      type: "image" as const,
      src: assets.images.gallery07,
      alt: "Audi S8 with automotive film finish",
    },
  ],
  gallery: [
    {
      type: "image" as const,
      src: assets.images.gallery08,
      alt: "Charcoal Super Duty with dark tint",
      className: "g1",
    },
    {
      type: "image" as const,
      src: assets.images.gallery02,
      alt: "Lifted truck with tinted glass at night",
      className: "g2",
    },
    {
      type: "image" as const,
      src: assets.images.gallery05,
      alt: "Ford Raptor with privacy tint",
      className: "g3",
    },
    {
      type: "image" as const,
      src: assets.images.gallery04,
      alt: "Red Super Duty with finished tint",
      className: "g4",
    },
    {
      type: "image" as const,
      src: assets.images.gallery09,
      alt: "Black F-250 with full window tint",
      className: "g5",
    },
    {
      type: "image" as const,
      src: assets.images.gallery03,
      alt: "Black RAM 3500 with dark tint",
      className: "g6",
    },
    {
      type: "video" as const,
      src: assets.videos.f250Exterior,
      alt: "F-250 exterior film showcase",
      className: "g7",
    },
  ],
  about: {
    type: "video" as const,
    src: assets.videos.audiMaintenance,
    alt: "Precision film work in progress",
  },
  aboutPoster: {
    type: "image" as const,
    src: assets.images.gallery10,
    alt: "Vehicle cabin after film installation",
  },
  final: {
    type: "video" as const,
    src: assets.videos.audiS4,
    alt: "Audi S4 with Safeguard film",
  },
} as const;
