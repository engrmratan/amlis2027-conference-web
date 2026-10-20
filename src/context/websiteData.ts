/**
 * ============================================================================
 * AMLIS 2027 CONFERENCE - CENTRAL MASTER WEBSITE CONTENT DATA
 * ============================================================================
 * 
 * Welcome to the Central Website Content Data repository!
 * 
 * This module governs all data and content displayed throughout the conference website:
 *   - General Conference Details (Title, Acronym, Dates, City, Country, Venue)
 *   - Important Timeline Dates & Deadlines (Call for papers, Camera-ready, etc.)
 *   - Research Tracks & Technical Topics
 *   - Committee Leadership & Keynote Speakers
 *   - Registration Pricing Tiers & Author Fees
 *   - Program Schedule & Daily Sessions
 *   - Conference Awards & Honors
 *   - Accepted Papers Directory
 *   - Sponsors & Academic Partners
 *   - Frequently Asked Questions (FAQ)
 * 
 * HOW TO EDIT CONTENT IN CODE:
 * 1. Open "/src/context/initialData.ts".
 * 2. Edit any text, dates, fees, tracks, or speakers directly in the plain
 *    JavaScript/TypeScript objects (INITIAL_CONFIG, INITIAL_DATES, INITIAL_TRACKS, etc.).
 * 3. All 14 conference pages will automatically update.
 * ============================================================================
 */

export {
  INITIAL_CONFIG,
  INITIAL_TRACKS,
  INITIAL_DATES,
  INITIAL_COMMITTEE,
  INITIAL_AWARDS,
  INITIAL_PAPERS,
  INITIAL_SPONSORS,
  INITIAL_REGISTRATION_TIERS,
  INITIAL_PROGRAM,
  INITIAL_FAQS
} from './initialData';

export type {
  ConferenceConfig,
  ImportantDateItem,
  ResearchTrackItem,
  CommitteeMemberItem,
  AwardItem,
  AcceptedPaperItem,
  SponsorItem,
  RegistrationTierItem,
  ProgramSessionItem,
  ContactMessageItem,
  FaqItem
} from './types';
