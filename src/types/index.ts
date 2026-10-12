export interface NavLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface Hero {
  title: string;
  subtitle?: string;
  cta?: {
    text: string;
    href: string;
  };
}

export interface Programme {
  id: string;
  name: string;
  age: string;
  description: string;
  features?: string[];
  image?: string;
  link?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProgrammeDetails extends Programme {
  features: string[];
  learningOutcomes: string[];
  faqs: FAQ[];
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialisation?: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  type: "parent" | "student" | "general";
  programme: string;
  image?: string;
  isPlaceholder: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
