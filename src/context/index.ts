/**
 * ============================================================================
 * AMLIS 2027 - UNIFIED CONTEXT, DATA, TYPES & SECURITY HUB
 * ============================================================================
 * Central state, website data, domain types, and security utilities.
 * 
 * Contains:
 *   - ConferenceContext.tsx -> Live React Context, actions, localStorage sync
 *   - initialData.ts        -> Master baseline conference dataset
 *   - websiteData.ts        -> Human-readable documentation & re-exports
 *   - types.ts              -> Domain interfaces (Member, Track, Session, FAQ)
 *   - security.ts           -> Input sanitization, safe URLs & prototype protection
 * ============================================================================
 */

export { ConferenceProvider, useConference } from './ConferenceContext';
export * from './types';
export * from './security';
export * from './initialData';
export * from './websiteData';
