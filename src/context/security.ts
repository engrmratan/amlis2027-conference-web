/**
 * AMLIS 2027 Conference System - Security & Input Sanitization Utilities
 * 
 * Production security safeguards to prevent XSS (Cross-Site Scripting),
 * prototype pollution, and malicious payload injection in client-side forms.
 */

/**
 * Strips script tags, HTML tags, null bytes, and malicious characters
 * from user input strings before state storage or transmission.
 */
export function sanitizeInput(input: string, maxLength: number = 2000): string {
  if (typeof input !== 'string') return '';

  return input
    // Remove null bytes
    .replace(/\0/g, '')
    // Remove explicit script blocks
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    // Remove inline event handlers (e.g., onload=, onerror=, onclick=)
    .replace(/on\w+\s*=\s*(?:'[^']*'|"[^"]*"|[^\s>]+)/gi, '')
    // Remove javascript: URI schemes
    .replace(/javascript:/gi, '')
    // Strip HTML opening and closing tags for plain-text form fields
    .replace(/<[^>]*>?/gm, '')
    // Trim extraneous whitespace
    .trim()
    // Enforce reasonable length constraint
    .slice(0, maxLength);
}

/**
 * Validates whether an email string conforms to standard RFC 5322 format
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  // RFC 5322 compliant regex pattern
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email.trim()) && email.length <= 254;
}

/**
 * Validates and safely normalizes URLs, preventing javascript: and data: exploits
 */
export function sanitizeUrl(url: string, fallback: string = '#'): string {
  if (!url || typeof url !== 'string') return fallback;
  const trimmed = url.trim();

  // Allow standard relative and absolute HTTP/HTTPS links
  if (
    trimmed.startsWith('/') ||
    trimmed.startsWith('https://') ||
    trimmed.startsWith('http://') ||
    trimmed.startsWith('mailto:')
  ) {
    return trimmed;
  }

  return fallback;
}

/**
 * Safely parses JSON with prototype pollution protection
 */
export function safeJsonParse<T = unknown>(jsonStr: string): { success: boolean; data?: T; error?: string } {
  try {
    if (!jsonStr || typeof jsonStr !== 'string') {
      return { success: false, error: 'Empty JSON input' };
    }
    const parsed = JSON.parse(jsonStr, (key, value) => {
      if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
        return undefined;
      }
      return typeof value === 'string' ? sanitizeInput(value, 5000) : value;
    });
    return { success: true, data: parsed as T };
  } catch (err: unknown) {
    return { success: false, error: err instanceof Error ? err.message : 'Invalid JSON' };
  }
}
