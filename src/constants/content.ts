import type { ProgrammeDetails, Coach, Testimonial } from "@/types";

export const PROGRAMMES: Record<string, ProgrammeDetails> = {
  kaizen: {
    id: "kaizen",
    name: "Kaizen",
    age: "4-7 years",
    description: "Designed for young learners aged 4–7, Kaizen introduces communication through play, storytelling, creativity and guided activities that encourage self-expression.",
    features: [
      "Play-based communication activities",
      "Storytelling and creative expression",
      "Listening and response skills",
      "Fun, age-appropriate engagement",
      "Safe environment for self-expression",
    ],
    learningOutcomes: [
      "Increased confidence",
      "Better self-expression",
      "Listening skills",
      "Creativity",
      "Social interaction",
    ],
    faqs: [
      {
        question: "How does Kaizen differ from regular preschool?",
        answer: "Kaizen is specifically designed to develop communication and confidence through targeted activities. While preschool focuses on general development, Kaizen creates dedicated space for children to express themselves, listen to others and build social confidence.",
      },
      {
        question: "Is my 4-year-old too young?",
        answer: "No! Children aged 4–7 are at a perfect stage for communication development. Kaizen uses play and storytelling, which are natural learning methods for this age group.",
      },
      {
        question: "What if my child is shy?",
        answer: "Shyness is completely normal. Kaizen creates a safe, encouraging environment where children participate at their own pace. Our coaches are experienced in supporting shy children to gradually build confidence.",
      },
      {
        question: "How often are classes held?",
        answer: "Kaizen classes are typically held once weekly for 16 weeks, with regular showcases to celebrate learning. This consistent, supportive approach helps children develop skills progressively.",
      },
    ],
  },

  orator: {
    id: "orator",
    name: "Orator",
    age: "8-12 years",
    description: "Orator helps children develop public speaking, storytelling, teamwork and presentation skills while encouraging critical thinking.",
    features: [
      "Public speaking and presentation skills",
      "Storytelling and narrative development",
      "Teamwork and collaboration activities",
      "Critical thinking development",
      "Real speaking opportunities in supportive environment",
    ],
    learningOutcomes: [
      "Presentation skills",
      "Storytelling",
      "Teamwork",
      "Confidence",
      "Communication",
    ],
    faqs: [
      {
        question: "Why is public speaking important at this age?",
        answer: "Primary school years are crucial for developing communication skills. Children who can speak confidently and clearly are more likely to participate in class, build friendships and develop strong foundations for future learning and leadership.",
      },
      {
        question: "Will there be performing and presentations?",
        answer: "Yes! Regular presentations are central to Orator. Children practise in a safe classroom environment first, then showcase their learning to parents and the community. This builds confidence and reinforces skills.",
      },
      {
        question: "What if my child gets nervous?",
        answer: "Nervousness is natural and we help children manage it. Our coaches teach techniques to handle nervousness, and children gradually build confidence through repeated practice in a supportive setting.",
      },
      {
        question: "How does Orator support school performance?",
        answer: "Children develop skills directly applicable in school: class presentations, group work, reading aloud, and expressing ideas clearly. Many parents report improved school participation and academic confidence.",
      },
    ],
  },

  apex: {
    id: "apex",
    name: "APEX",
    age: "13-17 years",
    description: "APEX prepares teenagers to communicate effectively, think critically and lead with confidence in school and beyond.",
    features: [
      "Advanced public speaking and presentation",
      "Leadership and decision-making skills",
      "Critical thinking and analysis",
      "Persuasive communication",
      "Preparation for academic and life challenges",
    ],
    learningOutcomes: [
      "Leadership",
      "Critical thinking",
      "Public speaking",
      "Collaboration",
      "Confidence",
    ],
    faqs: [
      {
        question: "How is APEX different from Orator?",
        answer: "While Orator builds foundational communication skills, APEX develops advanced communication, leadership and critical thinking. APEX focuses on preparing teenagers for higher education, leadership roles and confident participation in society.",
      },
      {
        question: "Will APEX help with school presentations and exams?",
        answer: "Absolutely. APEX equips teenagers with skills for class presentations, group discussions, persuasive communication and handling pressure. Many students find these skills directly applicable in academics and co-curricular activities.",
      },
      {
        question: "Is APEX just public speaking?",
        answer: "No. APEX goes beyond public speaking to develop leaders. We work on communication, critical thinking, decision-making, collaboration and character development — preparing teenagers for success in all areas of life.",
      },
      {
        question: "Can my teenager join mid-year?",
        answer: "Yes, though starting at the beginning of a 16-week cycle helps. We assess your teenager's current level and integrate them into a group with similar skills. Contact us to discuss options.",
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
    quote: "[DUMMY TESTIMONIAL — REPLACE BEFORE LAUNCH] Our child has become more comfortable expressing ideas in front of others and has started participating more confidently in group activities.",
    author: "[Parent Name — PLACEHOLDER]",
    role: "Parent",
    type: "parent",
    programme: "Kaizen",
    isPlaceholder: true,
  },

  {
    id: "t2",
    quote: "[DUMMY TESTIMONIAL — REPLACE BEFORE LAUNCH] We appreciate the structured environment and the opportunities for our child to practise communication skills in a supportive setting.",
    author: "[Parent Name — PLACEHOLDER]",
    role: "Parent",
    type: "parent",
    programme: "Orator",
    isPlaceholder: true,
  },

  {
    id: "t3",
    quote: "[DUMMY TESTIMONIAL — REPLACE BEFORE LAUNCH] The activities gave our child opportunities to work with others, share ideas and gradually become more willing to speak up.",
    author: "[Parent Name — PLACEHOLDER]",
    role: "Parent",
    type: "parent",
    programme: "APEX",
    isPlaceholder: true,
  },

  {
    id: "t4",
    quote: "[DUMMY TESTIMONIAL — REPLACE BEFORE LAUNCH] I enjoyed having opportunities to practise speaking and sharing my ideas. The activities made it easier for me to participate.",
    author: "[Student Name — PLACEHOLDER]",
    role: "Student",
    type: "student",
    programme: "Kaizen",
    isPlaceholder: true,
  },

  {
    id: "t5",
    quote: "[DUMMY TESTIMONIAL — REPLACE BEFORE LAUNCH] I liked being able to work with other students and practise presenting my ideas. It helped me become more comfortable speaking in front of people.",
    author: "[Student Name — PLACEHOLDER]",
    role: "Student",
    type: "student",
    programme: "Orator",
    isPlaceholder: true,
  },

  {
    id: "t6",
    quote: "[DUMMY TESTIMONIAL — REPLACE BEFORE LAUNCH] Budding Voice gave me opportunities to practise communication, teamwork and expressing my ideas in a supportive environment.",
    author: "[Name — PLACEHOLDER]",
    role: "Budding Voice Student / Alumni — PLACEHOLDER",
    type: "general",
    programme: "General Budding Voice Experience",
    isPlaceholder: true,
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
