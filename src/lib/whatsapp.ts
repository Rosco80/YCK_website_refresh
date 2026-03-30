export const WHATSAPP_NUMBER = "60162481899";

/**
 * Helper to build a WhatsApp URL with a pre-filled message.
 * The message should already be localized before passing to this helper.
 * This utility can be used in both Server and Client components.
 */
export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
