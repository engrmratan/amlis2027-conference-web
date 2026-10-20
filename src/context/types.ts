export type DateStatus = 'Upcoming' | 'Closed' | 'Completed';

export interface ImportantDateItem {
  id: string;
  title: string;
  dateStr: string;
  rawDate?: string;
  time?: string;
  timezone?: string;
  description: string;
  status: DateStatus;
}

export interface ResearchTrackItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  colorClass: string;
  topics: string[];
}

export type CommitteeCategory = 
  | 'General Chairs'
  | 'General Co-Chairs'
  | 'Advisory Committee'
  | 'Technical Program Committee'
  | 'Organizing Committee'
  | 'Publication Chairs'
  | 'Publicity Chairs';

export interface CommitteeMemberItem {
  id: string;
  name: string;
  title: string;
  affiliation: string;
  position: string;
  category: CommitteeCategory;
  country: string;
  photo: string;
  profileUrl?: string;
}

export interface AwardItem {
  id: string;
  title: string;
  description: string;
  eligibility: string;
  criteria: string;
  iconName: string;
  benefits?: string;
}

export interface AcceptedPaperItem {
  id: string;
  paperId: string;
  title: string;
  authors: string;
  track: string;
  type: 'Full Paper' | 'Short Paper' | 'Poster Paper' | 'Workshop Paper';
  abstract?: string;
  pdfUrl?: string;
  doi?: string;
  isPublished: boolean;
}

export interface SponsorItem {
  id: string;
  name: string;
  tier: 'Organizer' | 'Platinum' | 'Gold' | 'Silver' | 'Supporting Partner';
  logoText: string;
  logoUrl?: string;
  websiteUrl: string;
  isConfirmed: boolean;
}

export interface RegistrationTierItem {
  id: string;
  category: string;
  ieeeMemberEarly: string;
  ieeeMemberRegular: string;
  nonMemberEarly: string;
  nonMemberRegular: string;
  studentEarly: string;
  studentRegular: string;
  description: string;
  features: string[];
  isAvailable: boolean;
}

export interface ProgramSessionItem {
  id: string;
  day: number;
  date: string;
  startTime: string;
  endTime: string;
  timezone: string;
  title: string;
  speaker?: string;
  venue: string;
  category: 'Keynote' | 'Technical Session' | 'Ceremony' | 'Workshop' | 'Break' | 'Poster';
  description: string;
}

export interface ContactMessageItem {
  id: string;
  name: string;
  email: string;
  category: string;
  subject: string;
  message: string;
  createdAt: string;
  read: boolean;
}

export interface ConferenceConfig {
  title: string;
  acronym: string;
  subHeader: string;
  datesText: string;
  venueText: string;
  city: string;
  country: string;
  announcementActive: boolean;
  announcementText: string;
  announcementDeadlineText: string;
  submissionPortalUrl: string;
  submissionPortalReady: boolean;
  officialEmail: string;
  officialWebsite: string;
  socialLinkedin: string;
  socialX: string;
  socialYoutube: string;
  venueAddress?: string;
  officialPhone?: string;
  aboutSummary?: string;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}
