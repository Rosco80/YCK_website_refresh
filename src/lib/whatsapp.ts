export const WHATSAPP_NUMBER = "60162481899";
export const ADS_WHATSAPP_NUMBER = "601137689979";

/**
 * Helper to build a WhatsApp URL with a pre-filled message.
 * The message should already be localized before passing to this helper.
 * This utility can be used in both Server and Client components.
 */
export function getWhatsAppUrl(message: string, phoneNumber: string = WHATSAPP_NUMBER) {
  const cleanNumber = phoneNumber.replace(/\+/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
