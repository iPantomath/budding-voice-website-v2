import type { ProgrammeDetails, Coach, Testimonial } from "@/types";

export const PROGRAMMES: Record<string, ProgrammeDetails> = {
  kaizen: {
    id: "kaizen",
    name: "Kaizen",
    age: "4-7 years",
    description: "[PLACEHOLDER: Kaizen programme description from Budding Voice]",
    features: [
      "[PLACEHOLDER: Feature 1]",
      "[PLACEHOLDER: Feature 2]",
      "[PLACEHOLDER: Feature 3]",
    ],
    learningOutcomes: [
      "[PLACEHOLDER: Learning outcome 1]",
      "[PLACEHOLDER: Learning outcome 2]",
      "[PLACEHOLDER: Learning outcome 3]",
    ],
    faqs: [
      {
        question: "[PLACEHOLDER: FAQ Question 1]",
        answer: "[PLACEHOLDER: FAQ Answer 1]",
      },
      {
        question: "[PLACEHOLDER: FAQ Question 2]",
        answer: "[PLACEHOLDER: FAQ Answer 2]",
      },
    ],
  },

  orator: {
    id: "orator",
    name: "Orator",
    age: "8-12 years",
    description: "[PLACEHOLDER: Orator programme description from Budding Voice]",
    features: [
      "[PLACEHOLDER: Feature 1]",
      "[PLACEHOLDER: Feature 2]",
      "[PLACEHOLDER: Feature 3]",
    ],
    learningOutcomes: [
      "[PLACEHOLDER: Learning outcome 1]",
      "[PLACEHOLDER: Learning outcome 2]",
      "[PLACEHOLDER: Learning outcome 3]",
    ],
    faqs: [
      {
        question: "[PLACEHOLDER: FAQ Question 1]",
        answer: "[PLACEHOLDER: FAQ Answer 1]",
      },
      {
        question: "[PLACEHOLDER: FAQ Question 2]",
        answer: "[PLACEHOLDER: FAQ Answer 2]",
      },
    ],
  },

  apex: {
    id: "apex",
    name: "Apex",
    age: "13+ years",
    description: "[PLACEHOLDER: Apex programme description from Budding Voice]",
    features: [
      "[PLACEHOLDER: Feature 1]",
      "[PLACEHOLDER: Feature 2]",
      "[PLACEHOLDER: Feature 3]",
    ],
    learningOutcomes: [
      "[PLACEHOLDER: Learning outcome 1]",
      "[PLACEHOLDER: Learning outcome 2]",
      "[PLACEHOLDER: Learning outcome 3]",
    ],
    faqs: [
      {
        question: "[PLACEHOLDER: FAQ Question 1]",
        answer: "[PLACEHOLDER: FAQ Answer 1]",
      },
      {
        question: "[PLACEHOLDER: FAQ Question 2]",
        answer: "[PLACEHOLDER: FAQ Answer 2]",
      },
    ],
  },
};

export const COACHES: Record<string, Coach & { programmes: string[] }> = {
  coach1: {
    id: "coach1",
    name: "[PLACEHOLDER: Coach 1 Name]",
    role: "[PLACEHOLDER: Coach 1 Role]",
    bio: "[PLACEHOLDER: Coach 1 Biography from Budding Voice]",
    specialisation: "[PLACEHOLDER: Coach 1 Specialisation]",
    programmes: ["kaizen"],
  },

  coach2: {
    id: "coach2",
    name: "[PLACEHOLDER: Coach 2 Name]",
    role: "[PLACEHOLDER: Coach 2 Role]",
    bio: "[PLACEHOLDER: Coach 2 Biography from Budding Voice]",
    specialisation: "[PLACEHOLDER: Coach 2 Specialisation]",
    programmes: ["orator"],
  },

  coach3: {
    id: "coach3",
    name: "[PLACEHOLDER: Coach 3 Name]",
    role: "[PLACEHOLDER: Coach 3 Role]",
    bio: "[PLACEHOLDER: Coach 3 Biography from Budding Voice]",
    specialisation: "[PLACEHOLDER: Coach 3 Specialisation]",
    programmes: ["apex"],
  },
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    author: "[PLACEHOLDER: Parent/Guardian Name]",
    role: "[PLACEHOLDER: Relation to student]",
    content: "[PLACEHOLDER: Testimonial content - what parent says about the programme]",
    rating: 5,
  },

  {
    id: "t2",
    author: "[PLACEHOLDER: Parent/Guardian Name]",
    role: "[PLACEHOLDER: Relation to student]",
    content: "[PLACEHOLDER: Testimonial content - what parent says about the programme]",
    rating: 5,
  },

  {
    id: "t3",
    author: "[PLACEHOLDER: Parent/Guardian Name]",
    role: "[PLACEHOLDER: Relation to student]",
    content: "[PLACEHOLDER: Testimonial content - what parent says about the programme]",
    rating: 5,
  },

  {
    id: "t4",
    author: "[PLACEHOLDER: Parent/Guardian Name]",
    role: "[PLACEHOLDER: Relation to student]",
    content: "[PLACEHOLDER: Testimonial content - what parent says about the programme]",
    rating: 5,
  },

  {
    id: "t5",
    author: "[PLACEHOLDER: Parent/Guardian Name]",
    role: "[PLACEHOLDER: Relation to student]",
    content: "[PLACEHOLDER: Testimonial content - what parent says about the programme]",
    rating: 5,
  },
];

export const FORM_FIELDS = {
  TRIAL_CLASS: [
    { name: "childName", type: "text", required: true, label: "Child's Name" },
    { name: "childAge", type: "number", required: true, label: "Child's Age" },
    { name: "parentName", type: "text", required: true, label: "Parent/Guardian Name" },
    { name: "parentEmail", type: "email", required: true, label: "Parent Email" },
    { name: "parentPhone", type: "tel", required: true, label: "Parent Phone Number" },
    { name: "selectedProgramme", type: "select", required: true, label: "Interested Programme" },
    { name: "message", type: "textarea", required: false, label: "Additional Message" },
  ],

  CONTACT_US: [
    { name: "name", type: "text", required: true, label: "Full Name" },
    { name: "email", type: "email", required: true, label: "Email Address" },
    { name: "phone", type: "tel", required: true, label: "Phone Number" },
    { name: "enquiryType", type: "select", required: true, label: "Enquiry Type" },
    { name: "message", type: "textarea", required: true, label: "Message" },
  ],
};

export const FAQ_CATEGORIES = {
  GENERAL: "[PLACEHOLDER: General FAQs about Budding Voice]",
  PROGRAMMES: "[PLACEHOLDER: FAQs about specific programmes]",
  TRIALS: "[PLACEHOLDER: FAQs about trial classes]",
  SCHOOLS: "[PLACEHOLDER: FAQs about school partnerships]",
  CORPORATE: "[PLACEHOLDER: FAQs about corporate training]",
};
