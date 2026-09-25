export const WHATSAPP_DISPLAY = "0857-3025-3097";
export const WHATSAPP_E164 = "+6285730253097";
export const WHATSAPP_DIGITS = "6285730253097";
export const CITY = "Surabaya";
export const waLink = (text?: string) => `https://wa.me/${WHATSAPP_DIGITS}${text ? `?text=${text}` : ""}`;
