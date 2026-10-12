export interface NavigationLink {
  label: string;
  href?: string;
  children?: NavigationLink[];
}

export const navigationLinks: NavigationLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Programmes",
    children: [
      { label: "Kaizen (Age 4-7)", href: "/programmes/kaizen" },
      { label: "Orator (Age 8-12)", href: "/programmes/orator" },
      { label: "Apex (Age 13-17)", href: "/programmes/apex" },
    ],
  },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];
