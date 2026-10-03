export const en = {
  meta: {
    title: "Safeguard Window Tint",
    description:
      "Precision film installation and automotive protection. Premium window tint, ceramic film, and automotive film — fitted by hand.",
  },
  nav: {
    brandSafe: "Safe",
    brandGuard: "guard",
    home: "Home",
    services: "Services",
    gallery: "Gallery",
    about: "About",
    contact: "Contact",
    requestQuote: "Request a quote →",
    menuOpen: "MENU",
    menuClose: "CLOSE",
    menuAria: "Menu",
    brandAria: "Safeguard Window Tint",
  },
  hero: {
    sideLabel: "Precision film installation",
    line1: "SAFEGUARD",
    line2: "WINDOW TINT",
    tagline: "Precision film installation / Automotive protection",
    ctaPrimary: "Request a quote →",
    ctaSecondary: "View our work",
  },
  services: {
    title: "PROTECTION,\nREFINED.",
    intro:
      "Three films, one standard of installation. Each is cut, fitted and finished by hand to the vehicle in front of us.",
    items: [
      {
        number: "01",
        title: "Window tint",
        points: [
          "Heat rejection",
          "UV protection",
          "Privacy",
          "Optical clarity",
        ],
      },
      {
        number: "02",
        title: "Ceramic window film",
        points: [
          "Advanced heat rejection",
          "High optical clarity",
          "Premium protection",
        ],
      },
      {
        number: "03",
        title: "Automotive film",
        points: [
          "Precision installation",
          "Premium finish",
          "Long-term performance",
        ],
      },
    ],
  },
  gallery: {
    title: "OUR WORK",
    cta: "Start a conversation →",
    items: [
      { label: "01 / INSTALLATION", className: "g1" },
      { label: "02 / DETAIL", className: "g2" },
      { label: "03 / FINISH", className: "g3" },
      { label: "04 / VEHICLE", className: "g4" },
      { label: "05 / SIDE PROFILE", className: "g5" },
    ],
  },
  testimonials: {
    label: "Clients",
    items: [
      {
        quote: "Exceptional finish. You can immediately see the difference.",
        name: "Client name",
        detail: "Vehicle / Ceramic film",
      },
      {
        quote: "The cabin is noticeably cooler and quieter. Flawless edges.",
        name: "Client name",
        detail: "Vehicle / Window tint",
      },
      {
        quote:
          "Careful, unhurried work. It looks like it came from the factory.",
        name: "Client name",
        detail: "Vehicle / Automotive film",
      },
      {
        quote:
          "Clear glass at night, cooler seats by day. Exactly what I asked for.",
        name: "Client name",
        detail: "Vehicle / Ceramic film",
      },
      {
        quote: "They treated the car like it was their own.",
        name: "Client name",
        detail: "Vehicle / Window tint",
      },
    ],
  },
  about: {
    photoLabel: "PHOTO / HAND APPLYING FILM",
    eyebrow: "The Safeguard Standard",
    title: "PRECISION\nWITHOUT\nCOMPROMISE.",
    p1: "Film is only as good as the hands that fit it. We work in a clean, controlled bay, one vehicle at a time, and we don't release a car until every edge, corner and line has been inspected in daylight.",
    p2: "The result is glass that looks like it left the factory that way: quieter cabin, cooler seats, nothing to notice but the clarity.",
    stats: [
      {
        title: "One car at a time",
        text: "Full attention, no stacking jobs.",
      },
      {
        title: "Inspected in daylight",
        text: "Every edge checked before handover.",
      },
    ],
  },
  process: {
    title: "FOUR STEPS,\nNO SHORTCUTS.",
    steps: [
      {
        number: "01",
        title: "Consult",
        text: "We look at the vehicle and talk through how you drive, park and what you want from the glass.",
      },
      {
        number: "02",
        title: "Prepare",
        text: "Glass is cleaned and prepared, and the right film is selected and cut to the window.",
      },
      {
        number: "03",
        title: "Install",
        text: "Trained installers fit each panel by hand, edge to edge.",
      },
      {
        number: "04",
        title: "Finish",
        text: "Final inspection and detailing, then care instructions at handover.",
      },
    ],
  },
  contact: {
    title: "LET'S PROTECT\nWHAT YOU DRIVE.",
    visit: "Visit",
    visitValue: "[Street address]\n[City, Postcode]",
    call: "Call",
    callValue: "[Phone number]",
    email: "Email",
    emailValue: "[hello@safeguardtint.com]",
    hours: "Hours",
    hoursValue: "Mon–Fri [9:00–17:30]\nSat [by appointment]",
    form: {
      name: "Name",
      phone: "Phone",
      email: "Email",
      vehicle: "Vehicle",
      vehiclePlaceholder: "Make, model, year",
      service: "Service",
      message: "Message",
      submit: "Request your quote →",
      error: "Please add your name and a valid email so we can reply.",
      success: "Thank you. We will reply within one working day.",
      serviceOptions: [
        "Window tint",
        "Ceramic window film",
        "Automotive film",
        "Not sure yet",
      ],
    },
  },
  finalCta: {
    eyebrow: "Safeguard Window Tint",
    title: "READY FOR A\nCLEARER DRIVE?",
    text: "Premium protection.\nPrecision installation.",
    cta: "Request a quote →",
  },
  footer: {
    brandSafe: "Safe",
    brandGuard: "guard",
    blurb:
      "Precision window film, installed by hand and inspected in daylight.",
    navigate: "Navigate",
    contact: "Contact",
    hoursSocial: "Hours / Social",
    phone: "[Phone number]",
    email: "[Email]",
    address: "[Address]",
    hours: "Mon–Fri [9:00–17:30]",
    instagram: "Instagram",
    facebook: "Facebook",
    copyright: "© {year} Safeguard Window Tint",
    rights: "All rights reserved",
    links: {
      services: "Services",
      gallery: "Gallery",
      about: "About",
      contact: "Contact",
    },
  },
};

type DeepStringify<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends readonly (infer U)[]
      ? DeepStringify<U>[]
      : T[K] extends object
        ? DeepStringify<T[K]>
        : T[K];
};

export type Dictionary = DeepStringify<typeof en>;
