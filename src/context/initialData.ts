import {
  ConferenceConfig,
  ImportantDateItem,
  ResearchTrackItem,
  CommitteeMemberItem,
  AwardItem,
  AcceptedPaperItem,
  SponsorItem,
  RegistrationTierItem,
  ProgramSessionItem,
  FaqItem
} from './types';

export const INITIAL_CONFIG: ConferenceConfig = {
  title: '2027 IEEE International Conference on Advancements of Machine Learning and Intelligent Systems',
  acronym: 'AMLIS 2027',
  subHeader: 'IEEE International Conference',
  datesText: '02 – 04 June 2027',
  venueText: 'Sydney, Australia',
  city: 'Sydney',
  country: 'Australia',
  venueAddress: 'Sydney International Convention Centre (ICC Sydney), 14 Darling Dr, Sydney NSW 2000, Australia',
  officialPhone: '+61 2 9215 7100',
  aboutSummary: 'The 2027 IEEE International Conference on Advancements of Machine Learning and Intelligent Systems (AMLIS 2027) is the premier global forum uniting AI researchers, scientists, industry practitioners, and students to present cutting-edge discoveries in machine intelligence, deep learning, trustworthy AI, and autonomous cyber-physical systems.',
  announcementActive: true,
  announcementText: 'Call for Papers is now open!',
  announcementDeadlineText: 'Submission Deadline: 31 December 2026',
  submissionPortalUrl: 'https://icamlis.org/2027/submit',
  submissionPortalReady: true,
  officialEmail: 'info@amlis2027.org',
  officialWebsite: 'www.amlis2027.org',
  socialLinkedin: 'https://linkedin.com',
  socialX: 'https://x.com',
  socialYoutube: 'https://youtube.com',
};

export const INITIAL_TRACKS: ResearchTrackItem[] = [
  {
    id: 'track-1',
    title: 'Machine Learning',
    description: 'Algorithms, learning models and optimization',
    iconName: 'Cpu',
    colorClass: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    topics: [
      'Supervised & Unsupervised Learning',
      'Reinforcement Learning & Multi-agent Systems',
      'Meta-learning & Few-shot Learning',
      'Optimization Algorithms in ML',
      'Statistical Learning & Bayesian Methods'
    ]
  },
  {
    id: 'track-2',
    title: 'Artificial Intelligence',
    description: 'Intelligent agents, reasoning and knowledge representation',
    iconName: 'Brain',
    colorClass: 'text-blue-600 bg-blue-50 border-blue-100',
    topics: [
      'Knowledge Graphs & Semantic Web',
      'Automated Reasoning & Logic Programming',
      'Cognitive Computing & Decision Support',
      'Autonomous Agents & Distributed AI',
      'Human-AI Collaboration'
    ]
  },
  {
    id: 'track-3',
    title: 'Deep Learning',
    description: 'Neural networks and deep architectures',
    iconName: 'Layers',
    colorClass: 'text-violet-600 bg-violet-50 border-violet-100',
    topics: [
      'Deep Convolutional & Recurrent Networks',
      'Transformer Architectures & Attention Mechanisms',
      'Self-supervised Representation Learning',
      'Geometric Deep Learning & Graph Neural Networks',
      'Hardware Acceleration for Deep Neural Nets'
    ]
  },
  {
    id: 'track-4',
    title: 'Generative AI',
    description: 'Foundation models, LLMs and generative techniques',
    iconName: 'Sparkles',
    colorClass: 'text-teal-600 bg-teal-50 border-teal-100',
    topics: [
      'Large Language Models & Prompt Engineering',
      'Diffusion Models & Multimodal Synthesis',
      'Retrieval-Augmented Generation (RAG)',
      'Fine-tuning & Alignment Strategies (RLHF)',
      'Synthetic Data Generation & Evaluation'
    ]
  },
  {
    id: 'track-5',
    title: 'Data Science and Big Data',
    description: 'Data analysis, big data processing and visualization',
    iconName: 'Database',
    colorClass: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    topics: [
      'Scalable Big Data Architectures',
      'Predictive Analytics & High-dimensional Data',
      'Data Mining & Anomaly Detection',
      'Scientific Data Visualization',
      'Stream Processing & Real-time Analytics'
    ]
  },
  {
    id: 'track-6',
    title: 'Computer Vision',
    description: 'Image analysis, pattern recognition and vision systems',
    iconName: 'Eye',
    colorClass: 'text-purple-600 bg-purple-50 border-purple-100',
    topics: [
      'Object Detection, Segmentation & Tracking',
      '3D Vision, NeRFs & Spatial Reconstruction',
      'Medical Image Computing & Diagnostics',
      'Video Analytics & Action Recognition',
      'Visual Question Answering & Multimodal Vision'
    ]
  },
  {
    id: 'track-7',
    title: 'Natural Language Processing',
    description: 'Language models, text mining and NLP applications',
    iconName: 'MessageSquare',
    colorClass: 'text-sky-600 bg-sky-50 border-sky-100',
    topics: [
      'Information Extraction & Named Entity Recognition',
      'Machine Translation & Cross-lingual Models',
      'Sentiment Analysis & Discourse Understanding',
      'Dialogue Systems & Conversational AI',
      'Computational Linguistics & Text Summarization'
    ]
  },
  {
    id: 'track-8',
    title: 'Explainable and Trustworthy AI',
    description: 'Interpretability, fairness, ethics and safety',
    iconName: 'ShieldAlert',
    colorClass: 'text-rose-600 bg-rose-50 border-rose-100',
    topics: [
      'Model Interpretability & Feature Attribution',
      'Algorithmic Fairness & Bias Mitigation',
      'AI Safety & Alignment Verification',
      'Responsible AI Governance & Ethical Frameworks',
      'Auditing & Transparency in Black-box Systems'
    ]
  },
  {
    id: 'track-9',
    title: 'Intelligent Systems',
    description: 'Robotics, multi-agent systems and autonomous systems',
    iconName: 'Cog',
    colorClass: 'text-cyan-600 bg-cyan-50 border-cyan-100',
    topics: [
      'Autonomous Robotic Navigation & Control',
      'Smart City & IoT Intelligent Frameworks',
      'Cyber-Physical Systems & Embedded AI',
      'Intelligent Transportation Systems',
      'Swarm Intelligence & Multi-robot Coordination'
    ]
  },
  {
    id: 'track-10',
    title: 'AI Security and Privacy',
    description: 'Security, privacy and adversarial learning',
    iconName: 'Lock',
    colorClass: 'text-amber-600 bg-amber-50 border-amber-100',
    topics: [
      'Adversarial Attacks & Robust Defense Models',
      'Federated Learning & Privacy-preserving ML',
      'Differential Privacy & Secure Multi-party Computation',
      'Model Stealing, Watermarking & IP Protection',
      'AI for Cybersecurity Threat Intelligence'
    ]
  },
  {
    id: 'track-11',
    title: 'Other Relevant Topics',
    description: 'Emerging areas in AI, ML, DS and intelligent systems',
    iconName: 'MoreHorizontal',
    colorClass: 'text-slate-600 bg-slate-50 border-slate-100',
    topics: [
      'Quantum Machine Learning',
      'Neuromorphic Computing & Spiking Networks',
      'Bioinformatics & Computational Biology',
      'Green AI & Energy-efficient Deep Learning',
      'Edge AI & Low-power Intelligence'
    ]
  }
];

export const INITIAL_DATES: ImportantDateItem[] = [
  {
    id: 'date-1',
    title: 'Paper Submission Deadline',
    dateStr: 'To Be Announced',
    description: 'Full manuscript submission in IEEE standard format via online submission portal.',
    status: 'Upcoming'
  },
  {
    id: 'date-2',
    title: 'Review Notification',
    dateStr: 'To Be Announced',
    description: 'Formal double-blind peer review outcomes sent to authors with reviewer feedback.',
    status: 'Upcoming'
  },
  {
    id: 'date-3',
    title: 'Early Registration Deadline',
    dateStr: 'To Be Announced',
    description: 'Discounted early-bird conference registration rates close for authors and delegates.',
    status: 'Upcoming'
  },
  {
    id: 'date-4',
    title: 'Camera-ready Deadline',
    dateStr: 'To Be Announced',
    description: 'Final publication-ready paper submission with IEEE copyright transfer verification.',
    status: 'Upcoming'
  },
  {
    id: 'date-5',
    title: 'Conference Dates',
    dateStr: '02 – 04 June 2027',
    description: 'Main conference technical sessions, keynote lectures, tutorials, and awards ceremony.',
    status: 'Upcoming'
  }
];

export const INITIAL_COMMITTEE: CommitteeMemberItem[] = [
  {
    id: 'comm-1',
    name: 'Prof. Dr. John Smith',
    title: 'Professor of Computer Science & AI',
    affiliation: 'University of California, USA',
    position: 'General Chair',
    category: 'General Chairs',
    country: 'USA',
    photo: '/src/assets/images/committee_john_smith_1791972866685.jpg',
    profileUrl: '#'
  },
  {
    id: 'comm-2',
    name: 'Prof. Dr. Sarah Johnson',
    title: 'Chair of Data Intelligence & Machine Learning',
    affiliation: 'Stanford University, USA',
    position: 'General Co-Chair',
    category: 'General Co-Chairs',
    country: 'USA',
    photo: '/src/assets/images/committee_sarah_johnson_1791972866215.jpg',
    profileUrl: '#'
  },
  {
    id: 'comm-3',
    name: 'Prof. Dr. Michael Chen',
    title: 'Professor of Intelligent Automation',
    affiliation: 'Tsinghua University, China',
    position: 'Technical Program Chair',
    category: 'Technical Program Committee',
    country: 'China',
    photo: '/src/assets/images/committee_michael_chen_1791972866604.jpg',
    profileUrl: '#'
  },
  {
    id: 'comm-4',
    name: 'Prof. Dr. Emily Davis',
    title: 'Professor of Electrical Engineering & CS',
    affiliation: 'MIT, USA',
    position: 'Organizing Chair',
    category: 'Organizing Committee',
    country: 'USA',
    photo: '/src/assets/images/committee_emily_davis_1791972867145.jpg',
    profileUrl: '#'
  }
];

export const INITIAL_AWARDS: AwardItem[] = [
  {
    id: 'award-1',
    title: 'Best Paper Award',
    description: 'Outstanding research paper in the conference demonstrating exceptional technical depth and novelty.',
    eligibility: 'All accepted full papers presented orally by registered authors.',
    criteria: 'Rigorous peer evaluation based on originality, methodological rigor, and empirical impact.',
    iconName: 'Trophy',
    benefits: 'Official IEEE Conference Certificate & Commemorative Plaque'
  },
  {
    id: 'award-2',
    title: 'Best Student Paper Award',
    description: 'Exceptional work by student researchers who are primary authors and presenters.',
    eligibility: 'First author must be an enrolled undergraduate or graduate student at the time of submission.',
    criteria: 'Innovation, clarity of presentation, and student technical contribution.',
    iconName: 'GraduationCap',
    benefits: 'Official Certificate of Excellence & Special Recognition'
  },
  {
    id: 'award-3',
    title: 'Best Presentation Award',
    description: 'Excellent presentation and communication of scientific findings during oral sessions.',
    eligibility: 'All presenters across technical tracks.',
    criteria: 'Judged by session chairs on clarity, time management, visual aids, and Q&A interaction.',
    iconName: 'Star',
    benefits: 'Official Conference Certificate of Distinction'
  },
  {
    id: 'award-4',
    title: 'Best Reviewer Award',
    description: 'Outstanding contribution to the review process through constructive and detailed assessments.',
    eligibility: 'All technical program committee reviewers.',
    criteria: 'Evaluated by Track Chairs based on timeliness, review quality, and actionable feedback.',
    iconName: 'ShieldCheck',
    benefits: 'Formal Recognition & Certificate of Appreciation'
  }
];

export const INITIAL_PAPERS: AcceptedPaperItem[] = [
  {
    id: 'paper-1',
    paperId: 'AMLIS-27-0101',
    title: 'To Be Announced',
    authors: 'To Be Announced',
    track: 'Machine Learning',
    type: 'Full Paper',
    abstract: 'Official peer-reviewed paper titles and author listings will appear here upon completion of the double-blind review process.',
    isPublished: true
  },
  {
    id: 'paper-2',
    paperId: 'AMLIS-27-0102',
    title: 'To Be Announced',
    authors: 'To Be Announced',
    track: 'Artificial Intelligence',
    type: 'Full Paper',
    abstract: 'Official peer-reviewed paper titles and author listings will appear here upon completion of the double-blind review process.',
    isPublished: true
  },
  {
    id: 'paper-3',
    paperId: 'AMLIS-27-0103',
    title: 'To Be Announced',
    authors: 'To Be Announced',
    track: 'Deep Learning',
    type: 'Full Paper',
    abstract: 'Official peer-reviewed paper titles and author listings will appear here upon completion of the double-blind review process.',
    isPublished: true
  },
  {
    id: 'paper-4',
    paperId: 'AMLIS-27-0104',
    title: 'To Be Announced',
    authors: 'To Be Announced',
    track: 'Generative AI',
    type: 'Full Paper',
    abstract: 'Official peer-reviewed paper titles and author listings will appear here upon completion of the double-blind review process.',
    isPublished: true
  },
  {
    id: 'paper-5',
    paperId: 'AMLIS-27-0105',
    title: 'To Be Announced',
    authors: 'To Be Announced',
    track: 'Data Science and Big Data',
    type: 'Full Paper',
    abstract: 'Official peer-reviewed paper titles and author listings will appear here upon completion of the double-blind review process.',
    isPublished: true
  },
  {
    id: 'paper-6',
    paperId: 'AMLIS-27-0106',
    title: 'To Be Announced',
    authors: 'To Be Announced',
    track: 'Computer Vision',
    type: 'Full Paper',
    abstract: 'Official peer-reviewed paper titles and author listings will appear here upon completion of the double-blind review process.',
    isPublished: true
  },
  {
    id: 'paper-7',
    paperId: 'AMLIS-27-0107',
    title: 'To Be Announced',
    authors: 'To Be Announced',
    track: 'Natural Language Processing',
    type: 'Full Paper',
    abstract: 'Official peer-reviewed paper titles and author listings will appear here upon completion of the double-blind review process.',
    isPublished: true
  },
  {
    id: 'paper-8',
    paperId: 'AMLIS-27-0108',
    title: 'To Be Announced',
    authors: 'To Be Announced',
    track: 'Explainable and Trustworthy AI',
    type: 'Full Paper',
    abstract: 'Official peer-reviewed paper titles and author listings will appear here upon completion of the double-blind review process.',
    isPublished: true
  },
  {
    id: 'paper-9',
    paperId: 'AMLIS-27-0109',
    title: 'To Be Announced',
    authors: 'To Be Announced',
    track: 'Intelligent Systems',
    type: 'Full Paper',
    abstract: 'Official peer-reviewed paper titles and author listings will appear here upon completion of the double-blind review process.',
    isPublished: true
  },
  {
    id: 'paper-10',
    paperId: 'AMLIS-27-0110',
    title: 'To Be Announced',
    authors: 'To Be Announced',
    track: 'Other Relevant Topics',
    type: 'Full Paper',
    abstract: 'Official peer-reviewed paper titles and author listings will appear here upon completion of the double-blind review process.',
    isPublished: true
  }
];

export const INITIAL_SPONSORS: SponsorItem[] = [
  {
    id: 'sp-1',
    name: 'IEEE',
    tier: 'Organizer',
    logoText: 'IEEE',
    websiteUrl: 'https://www.ieee.org',
    isConfirmed: true
  },
  {
    id: 'sp-2',
    name: 'Google',
    tier: 'Platinum',
    logoText: 'Google',
    websiteUrl: 'https://about.google',
    isConfirmed: true
  },
  {
    id: 'sp-3',
    name: 'Microsoft',
    tier: 'Platinum',
    logoText: 'Microsoft',
    websiteUrl: 'https://www.microsoft.com',
    isConfirmed: true
  },
  {
    id: 'sp-4',
    name: 'To Be Announced',
    tier: 'Gold',
    logoText: 'To Be Announced',
    websiteUrl: '#',
    isConfirmed: true
  }
];

export const INITIAL_REGISTRATION_TIERS: RegistrationTierItem[] = [
  {
    id: 'reg-author',
    category: 'Author Registration',
    ieeeMemberEarly: 'To Be Announced',
    ieeeMemberRegular: 'To Be Announced',
    nonMemberEarly: 'To Be Announced',
    nonMemberRegular: 'To Be Announced',
    studentEarly: 'To Be Announced',
    studentRegular: 'To Be Announced',
    description: 'Mandatory for at least one author per accepted paper to ensure inclusion in the conference proceedings.',
    features: [
      'Full access to all technical sessions',
      'Paper presentation slot in conference schedule',
      'Inclusion in official conference proceedings',
      'Conference kit and access to keynote videos',
      'Networking banquets and refreshment breaks',
      'Certificate of Oral Presentation'
    ],
    isAvailable: true
  },
  {
    id: 'reg-delegate',
    category: 'Regular Delegate (Non-Author)',
    ieeeMemberEarly: 'To Be Announced',
    ieeeMemberRegular: 'To Be Announced',
    nonMemberEarly: 'To Be Announced',
    nonMemberRegular: 'To Be Announced',
    studentEarly: 'To Be Announced',
    studentRegular: 'To Be Announced',
    description: 'For researchers, professors, and industry professionals attending without an accepted paper.',
    features: [
      'Access to all keynote addresses & workshops',
      'Admission to all 11 technical tracks',
      'Digital conference proceedings download',
      'Lunch, coffee breaks & networking receptions',
      'Certificate of Attendance'
    ],
    isAvailable: true
  },
  {
    id: 'reg-student',
    category: 'Student Delegate',
    ieeeMemberEarly: 'To Be Announced',
    ieeeMemberRegular: 'To Be Announced',
    nonMemberEarly: 'To Be Announced',
    nonMemberRegular: 'To Be Announced',
    studentEarly: 'To Be Announced',
    studentRegular: 'To Be Announced',
    description: 'Subsidized rate for undergraduate, master, and doctoral students with valid student ID.',
    features: [
      'Access to all technical sessions & student symposium',
      'Doctoral colloquium participation',
      'Conference kit and digital materials',
      'Lunch and coffee breaks',
      'Certificate of Participation'
    ],
    isAvailable: true
  }
];

export const INITIAL_PROGRAM: ProgramSessionItem[] = [
  {
    id: 'prog-1',
    day: 1,
    date: '02 June 2027',
    startTime: '08:30 AM',
    endTime: '09:30 AM',
    timezone: 'AEST (UTC+10)',
    title: 'Registration & Welcome Morning Coffee',
    venue: 'Grand Foyer, Sydney International Convention Centre (ICC Sydney)',
    category: 'Break',
    description: 'Badge pickup, conference kit distribution, and informal welcome gathering.'
  },
  {
    id: 'prog-2',
    day: 1,
    date: '02 June 2027',
    startTime: '09:30 AM',
    endTime: '10:30 AM',
    timezone: 'AEST (UTC+10)',
    title: 'Opening Ceremony & Presidential Address',
    speaker: 'General Conference Chairs',
    venue: 'Darling Harbour Theatre, ICC Sydney',
    category: 'Ceremony',
    description: 'Official opening remarks from IEEE leadership and AMLIS 2027 General Chairs.'
  },
  {
    id: 'prog-3',
    day: 1,
    date: '02 June 2027',
    startTime: '10:45 AM',
    endTime: '12:00 PM',
    timezone: 'AEST (UTC+10)',
    title: 'Keynote I: The Next Frontier of Generative AI & Foundation Models',
    speaker: 'To Be Announced (Distinguished Keynote Speaker)',
    venue: 'Darling Harbour Theatre, ICC Sydney',
    category: 'Keynote',
    description: 'In-depth exploration of emerging paradigms in multimodal foundation architectures and safety bounds.'
  },
  {
    id: 'prog-4',
    day: 1,
    date: '02 June 2027',
    startTime: '01:30 PM',
    endTime: '03:30 PM',
    timezone: 'AEST (UTC+10)',
    title: 'Technical Session 1: Machine Learning & Optimization',
    venue: 'Pyrmont Suite 101, ICC Sydney',
    category: 'Technical Session',
    description: 'Peer-reviewed oral paper presentations in machine learning algorithms and convex optimization.'
  },
  {
    id: 'prog-5',
    day: 2,
    date: '03 June 2027',
    startTime: '09:30 AM',
    endTime: '11:00 AM',
    timezone: 'AEST (UTC+10)',
    title: 'Keynote II: Trustworthy AI, Explainability & Societal Impact',
    speaker: 'To Be Announced (Leading Scholar)',
    venue: 'Darling Harbour Theatre, ICC Sydney',
    category: 'Keynote',
    description: 'Bridging algorithmic interpretability with regulatory frameworks and ethical constraints.'
  },
  {
    id: 'prog-6',
    day: 2,
    date: '03 June 2027',
    startTime: '02:00 PM',
    endTime: '04:30 PM',
    timezone: 'AEST (UTC+10)',
    title: 'Technical Sessions 2 & 3: Computer Vision & Intelligent Systems',
    venue: 'Parkside Rooms 102 & 103, ICC Sydney',
    category: 'Technical Session',
    description: 'Parallel oral presentations on visual perception, spatial AI, robotics, and cyber-physical systems.'
  },
  {
    id: 'prog-7',
    day: 3,
    date: '04 June 2027',
    startTime: '10:00 AM',
    endTime: '12:30 PM',
    timezone: 'AEST (UTC+10)',
    title: 'Technical Session 4: NLP & Big Data Science',
    venue: 'Pyrmont Suite 101, ICC Sydney',
    category: 'Technical Session',
    description: 'Presentations on language models, speech processing, and distributed data analytics.'
  },
  {
    id: 'prog-8',
    day: 3,
    date: '04 June 2027',
    startTime: '03:30 PM',
    endTime: '05:00 PM',
    timezone: 'AEST (UTC+10)',
    title: 'Awards Ceremony & Closing Remarks',
    speaker: 'General Chairs & Award Committee',
    venue: 'Darling Harbour Theatre, ICC Sydney',
    category: 'Ceremony',
    description: 'Announcement of Best Paper, Best Student Paper, Best Presentation awards, and closing address.'
  }
];

export const INITIAL_FAQS: FaqItem[] = [
  // Registration & Fees
  {
    id: 'faq-reg-1',
    category: 'Registration & Fees',
    question: 'What payment methods are supported for conference registration?',
    answer: 'We accept major international credit and debit cards (Visa, MasterCard, American Express) via the secure online registration portal. Additionally, academic institutions, university departments, and corporate sponsors requiring bank wire transfer can request an official pro-forma invoice with international SWIFT/IBAN details by contacting the Secretariat at info@amlis2027.org.'
  },
  {
    id: 'faq-reg-2',
    category: 'Registration & Fees',
    question: 'How do I qualify for the Student Registration rate?',
    answer: 'To use the student registration tier ($350 USD for IEEE student members / $400 USD for non-IEEE students), the applicant must be actively enrolled in a recognized undergraduate, master’s, or PhD program. During checkout, you will need to provide your academic supervisor’s institutional email address and upload verifiable student identification or an official university enrolment letter.'
  },
  {
    id: 'faq-reg-3',
    category: 'Registration & Fees',
    question: 'Can one registration fee cover more than one accepted paper?',
    answer: 'Every accepted manuscript must be accompanied by at least one registered author to ensure placement in the technical schedule and publication in the proceedings. If an author has multiple accepted manuscripts, the first paper requires standard author registration, while each subsequent paper is eligible for the discounted Additional Paper fee ($250 USD) rather than requiring multiple full registrations.'
  },
  {
    id: 'faq-reg-4',
    category: 'Registration & Fees',
    question: 'What is the cancellation, refund, and registration transfer policy?',
    answer: 'Registrations may be transferred to a qualified co-author free of charge at any time up to 14 days prior to the conference opening. Written cancellation requests submitted on or before 15 April 2027 are eligible for an 80% refund (with a 20% administrative handling deduction). Due to contractual venue and catering obligations, cancellations received after 15 April 2027 are strictly non-refundable.'
  },
  {
    id: 'faq-reg-5',
    category: 'Registration & Fees',
    question: 'When does the registration portal open and close?',
    answer: 'The official online registration portal opens on 28 February 2027 following the release of author review reports. Early bird discounted rates will remain active until 15 April 2027 (23:59 AoE). Final registration for all presenting authors strictly closes on 30 April 2027.'
  },

  // Travel, Visa & Logistics
  {
    id: 'faq-travel-1',
    category: 'Travel & Visa',
    question: 'How do I obtain an official Australian Visa Invitation Letter?',
    answer: 'Official conference visa invitation letters are issued exclusively to authors of accepted manuscripts and fully registered delegates. Once your paper is accepted or registration is complete, submit your Paper ID, passport full name, date of birth, nationality, and passport number to info@amlis2027.org. Official letters bearing the conference seal and organizing secretariat details are issued as digital PDFs within 2–3 business days.'
  },
  {
    id: 'faq-travel-2',
    category: 'Travel & Visa',
    question: 'Which Australian visa subclass should international delegates apply for?',
    answer: 'Most international academic attendees travel under a Visitor Visa (Subclass 600 - Business Visitor stream) or an Electronic Travel Authority (ETA Subclass 601 / eVisitor Subclass 651), depending on passport eligibility. Because international visa processing times vary significantly, we strongly recommend submitting your visa application at least 8 to 12 weeks before June 2027.'
  },
  {
    id: 'faq-travel-3',
    category: 'Travel & Visa',
    question: 'How do I travel from Sydney Kingsford Smith Airport (SYD) to the conference venue?',
    answer: 'Sydney Airport (SYD) is located just 8 km south of the Central Business District (CBD). The Airport Link train (T8 line) departs every 10 minutes from both International (T1) and Domestic (T2/T3) stations, arriving at Central Station in approximately 13 minutes. Licensed taxis and rideshare services (Uber) take 20–35 minutes depending on traffic conditions.'
  },
  {
    id: 'faq-travel-4',
    category: 'Travel & Visa',
    question: 'Are special room blocks and rates available at partner hotels?',
    answer: 'Yes. The organizing committee has secured negotiated academic rates with selected 4-star and 5-star partner hotels located within 5–15 minutes walking distance of the venue in the Sydney CBD and Darling Harbour precinct. Discount codes and direct reservation links are provided in your registration confirmation email.'
  },
  {
    id: 'faq-travel-5',
    category: 'Travel & Visa',
    question: 'How does local public transportation operate in Sydney (trains, light rail, ferries)?',
    answer: 'Sydney operates on the fully integrated contactless Opal transit network. Delegates do not need to buy paper transit cards—you can simply tap on and tap off at turnstiles, light rail platforms, ferry wharves, and buses using any contactless credit card, debit card, or smartphone wallet (Apple Pay / Google Wallet).'
  },

  // Conference & Policies
  {
    id: 'faq-policy-1',
    category: 'Conference & Policies',
    question: 'Will there be remote or virtual presentation options for authors?',
    answer: 'AMLIS 2027 is structured primarily as an in-person, immersive international research gathering at ICC Sydney. However, pre-approved virtual oral presentation slots will be facilitated strictly for overseas authors facing documented consular visa rejections or sudden medical travel restrictions.'
  },
  {
    id: 'faq-policy-2',
    category: 'Conference & Policies',
    question: 'What is the conference policy on Generative AI and LLM tool usage in submissions?',
    answer: 'AMLIS 2027 adheres strictly to IEEE Publication Services and Products Board (PSPB) Operations Manual policies. Generative AI tools (e.g., ChatGPT, Claude) may be used for grammar enhancement or initial drafting, but cannot be listed as authors. Authors must disclose any substantial AI tool usage in the Methodology or Acknowledgments section.'
  },
  {
    id: 'faq-policy-3',
    category: 'Conference & Policies',
    question: 'What are the technical guidelines for oral and poster presentations?',
    answer: 'Oral presentations in technical sessions are allocated 15 minutes total (12 minutes presentation + 3 minutes Q&A). Presentation slides should be prepared in 16:9 widescreen format (PDF or PowerPoint). Poster presenters will be provided standard A0 vertical portrait display boards (841 x 1189 mm) and mounting pins in the Exhibition Foyer.'
  },
  {
    id: 'faq-policy-4',
    category: 'Conference & Policies',
    question: 'Is the Sydney conference venue fully accessible for delegates with disabilities?',
    answer: 'Yes. The International Convention Centre Sydney (ICC Sydney) is designed to universal accessibility standards, featuring zero-step street entry, high-capacity passenger elevators, braille tactile signage, accessible wheelchair restrooms, and assisted hearing loop induction systems across all major auditoriums.'
  },
  {
    id: 'faq-policy-5',
    category: 'Conference & Policies',
    question: 'Will conference proceedings be submitted to IEEE Xplore and major indexing databases?',
    answer: 'Yes. All accepted and presented papers that satisfy IEEE review standards and formatting guidelines will be submitted for inclusion in IEEE Xplore Digital Library and subsequently forwarded to Scopus, Ei Compendex, and Google Scholar for indexing.'
  }
];

