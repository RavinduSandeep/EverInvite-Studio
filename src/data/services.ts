import type { ProcessStep, ServiceFeature } from "@/types";

/**
 * What can go into an invitation.
 * Grouped so the services page reads as a menu rather than a long list.
 */
export const serviceGroups: { title: string; items: ServiceFeature[] }[] = [
  {
    title: "The design",
    items: [
      {
        name: "Custom invitation design",
        description:
          "Your invitation is laid out around your names, your date and your colours, not dropped into a stock template.",
      },
      {
        name: "Custom colours and fonts",
        description:
          "Match your stationery, your outfits or your venue. We will show you the palette before we build.",
      },
      {
        name: "Designed for phones first",
        description:
          "Almost every guest opens the link on a phone, so that is where the design starts and where it is tested.",
      },
      {
        name: "Animated opening",
        description:
          "A sealed envelope that lifts, folds back and lets the invitation rise out, so arriving feels like an occasion.",
      },
      {
        name: "Your story",
        description:
          "A short section for how you met, or for the family who brought the day together.",
      },
    ],
  },
  {
    title: "The details guests need",
    items: [
      {
        name: "Event countdown",
        description: "A live count of the days, hours and minutes until the ceremony.",
      },
      {
        name: "Venue and directions",
        description:
          "A map with one-tap directions, so nobody arrives late looking for the turn-off.",
      },
      {
        name: "Event schedule",
        description:
          "Poruwa, registration, reception. The order of the day, clearly laid out.",
      },
      {
        name: "Dress code",
        description: "A short note so guests know what to wear before they ask.",
      },
      {
        name: "Family details",
        description: "Blessings and family names presented properly from both sides.",
      },
      {
        name: "Add to calendar",
        description:
          "One tap puts your date into the calendar your guest already uses.",
      },
    ],
  },
  {
    title: "Replies and sharing",
    items: [
      {
        name: "WhatsApp RSVP",
        description:
          "Replies arrive as a WhatsApp message, already written, so guests only have to press send.",
      },
      {
        name: "Phone RSVP",
        description: "A one-tap call button for guests who would rather speak to someone.",
      },
      {
        name: "Social sharing",
        description:
          "When the link is shared, it previews with your names and design rather than a blank card.",
      },
      {
        name: "Photo gallery",
        description: "A small, fast gallery of your photographs, optimised for mobile data.",
      },
      {
        name: "Background music",
        description:
          "A song your guest can choose to play. It never starts on its own.",
      },
    ],
  },
  {
    title: "After it is built",
    items: [
      {
        name: "Revisions",
        description:
          "An agreed number of revision rounds, written into your quotation before work begins.",
      },
      {
        name: "Hosting assistance",
        description:
          "We publish the invitation for you and make sure the link works everywhere you plan to share it.",
      },
      {
        name: "Custom domain support",
        description:
          "Use a web address of your own, such as your two names, on the Signature package.",
      },
    ],
  },
];

/** Flat list, used for the feature checkboxes on the enquiry form. */
export const allServiceNames: string[] = serviceGroups.flatMap((group) =>
  group.items.map((item) => item.name),
);

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Choose a design, or ask for something new",
    description:
      "Browse the samples and tell us which one is closest to what you imagined. If none of them fit, describe the day and we will design a concept for it.",
  },
  {
    step: 2,
    title: "Send us your details",
    description:
      "Names, dates, venue, ceremony timings, photos and the colours you have in mind. A message on WhatsApp is enough to start.",
  },
  {
    step: 3,
    title: "See your first preview",
    description:
      "We build your invitation and send you a private link. You open it on your own phone, exactly as a guest would.",
  },
  {
    step: 4,
    title: "Tell us what to change",
    description:
      "Wording, colours, photographs, timings. We work through the revision rounds agreed in your quotation.",
  },
  {
    step: 5,
    title: "Approve and publish",
    description:
      "Once you are happy, the invitation goes live on its own web address and we check it across phones and browsers.",
  },
  {
    step: 6,
    title: "Share your link",
    description:
      "Send the link to your guests on WhatsApp or anywhere else. They open it, read it, and reply to you.",
  },
];

/** Short, honest reasons to work with the studio. */
export const whyChooseUs: ServiceFeature[] = [
  {
    name: "Designed for your event alone",
    description:
      "Your names, your palette and your ceremony, laid out on purpose rather than dropped into a template.",
  },
  {
    name: "Opens on any modern phone",
    description:
      "Built mobile first and checked on small screens, so the invitation reads well in a guest's hand.",
  },
  {
    name: "Nothing to install",
    description:
      "No app, no account, no sign-up. Your guest taps a link and the invitation is there.",
  },
  {
    name: "One link to share",
    description:
      "Send the same link on WhatsApp, in a message or by email, and it works everywhere.",
  },
  {
    name: "An invitation guests explore",
    description:
      "Countdown, directions, schedule and RSVP in one place, so guests stop asking the same questions.",
  },
  {
    name: "Direct support while you prepare",
    description:
      "You talk to the person building your invitation, not a support queue.",
  },
];
