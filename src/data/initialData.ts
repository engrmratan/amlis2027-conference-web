import {
  ConferenceConfig,
  ImportantDateItem,
  ResearchTrackItem,
  CommitteeMemberItem,
  AwardItem,
  AcceptedPaperItem,
  SponsorItem,
  RegistrationTierItem,
  ProgramSessionItem
} from '../types/conference';

export const INITIAL_CONFIG: ConferenceConfig = {
  title: '2027 IEEE International Conference on Advancements of Machine Learning and Intelligent Systems',
  acronym: 'AMLIS 2027',
  subHeader: 'IEEE International Conference',
  datesText: '02 – 04 June 2027',
  venueText: 'Sydney, Australia',
  city: 'Sydney',
  country: 'Australia',
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
    timezone: 'PST (UTC-8)',
    title: 'Registration & Welcome Morning Coffee',
    venue: 'Grand Foyer, Los Angeles Conference Center',
    category: 'Break',
    description: 'Badge pickup, conference kit distribution, and informal welcome gathering.'
  },
  {
    id: 'prog-2',
    day: 1,
    date: '02 June 2027',
    startTime: '09:30 AM',
    endTime: '10:30 AM',
    timezone: 'PST (UTC-8)',
    title: 'Opening Ceremony & Presidential Address',
    speaker: 'General Conference Chairs',
    venue: 'Auditorium Hall A',
    category: 'Ceremony',
    description: 'Official opening remarks from IEEE leadership and AMLIS 2027 General Chairs.'
  },
  {
    id: 'prog-3',
    day: 1,
    date: '02 June 2027',
    startTime: '10:45 AM',
    endTime: '12:00 PM',
    timezone: 'PST (UTC-8)',
    title: 'Keynote I: The Next Frontier of Generative AI & Foundation Models',
    speaker: 'To Be Announced (Distinguished Keynote Speaker)',
    venue: 'Auditorium Hall A',
    category: 'Keynote',
    description: 'In-depth exploration of emerging paradigms in multimodal foundation architectures and safety bounds.'
  },
  {
    id: 'prog-4',
    day: 1,
    date: '02 June 2027',
    startTime: '01:30 PM',
    endTime: '03:30 PM',
    timezone: 'PST (UTC-8)',
    title: 'Technical Session 1: Machine Learning & Optimization',
    venue: 'Conference Room 101',
    category: 'Technical Session',
    description: 'Peer-reviewed oral paper presentations in machine learning algorithms and convex optimization.'
  },
  {
    id: 'prog-5',
    day: 2,
    date: '03 June 2027',
    startTime: '09:30 AM',
    endTime: '11:00 AM',
    timezone: 'PST (UTC-8)',
    title: 'Keynote II: Trustworthy AI, Explainability & Societal Impact',
    speaker: 'To Be Announced (Leading Scholar)',
    venue: 'Auditorium Hall A',
    category: 'Keynote',
    description: 'Bridging algorithmic interpretability with regulatory frameworks and ethical constraints.'
  },
  {
    id: 'prog-6',
    day: 2,
    date: '03 June 2027',
    startTime: '02:00 PM',
    endTime: '04:30 PM',
    timezone: 'PST (UTC-8)',
    title: 'Technical Sessions 2 & 3: Computer Vision & Intelligent Systems',
    venue: 'Conference Rooms 102 & 103',
    category: 'Technical Session',
    description: 'Parallel oral presentations on visual perception, spatial AI, robotics, and cyber-physical systems.'
  },
  {
    id: 'prog-7',
    day: 3,
    date: '04 June 2027',
    startTime: '10:00 AM',
    endTime: '12:30 PM',
    timezone: 'PST (UTC-8)',
    title: 'Technical Session 4: NLP & Big Data Science',
    venue: 'Conference Room 101',
    category: 'Technical Session',
    description: 'Presentations on language models, speech processing, and distributed data analytics.'
  },
  {
    id: 'prog-8',
    day: 3,
    date: '04 June 2027',
    startTime: '03:30 PM',
    endTime: '05:00 PM',
    timezone: 'PST (UTC-8)',
    title: 'Awards Ceremony & Closing Remarks',
    speaker: 'General Chairs & Award Committee',
    venue: 'Auditorium Hall A',
    category: 'Ceremony',
    description: 'Announcement of Best Paper, Best Student Paper, Best Presentation awards, and closing address.'
  }
];
