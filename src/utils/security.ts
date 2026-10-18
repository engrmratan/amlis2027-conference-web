/**
 * security.ts
 * -----------------------------------------------------------------------
 * Input sanitization utilities for the AMLIS 2027 conference website.
 * Prevents XSS and enforces field-level length constraints on all
 * user-supplied strings before they are stored or rendered.
 * -----------------------------------------------------------------------
 */

/**
 * Strips HTML tags and trims a string to a maximum character length.
 *
 * @param value   - Raw string from a form field or URL parameter.
 * @param maxLen  - Maximum number of characters allowed (default: 500).
 * @returns       A sanitized, trimmed string safe for display and storage.
 */
export function sanitizeInput(value: string, maxLen = 500): string {
  return value
    .replace(/<[^>]*>/g, '')   // strip HTML tags
    .replace(/[<>"'`]/g, '')   // strip residual angle brackets & quotes
    .trim()
    .slice(0, maxLen);
}

/**
 * Validates that a string looks like a well-formed email address.
 *
 * @param email - Raw email string to validate.
 * @returns     True when the email matches a basic RFC 5322-compatible pattern.
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/**
 * Ensures a URL string starts with http:// or https://, preventing
 * javascript: protocol injection in anchor href attributes.
 *
 * @param url - Raw URL string.
 * @returns   True when the URL is safe to use as an href.
 */
export function isSafeUrl(url: string): boolean {
  return /^https?:\/\//i.test(url.trim());
}
