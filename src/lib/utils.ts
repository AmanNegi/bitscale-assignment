/**
 * Utility function to conditionally join class names together. 
 */
export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}