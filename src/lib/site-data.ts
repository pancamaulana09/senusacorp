import brandImage from "../assets/senusa-brand.jpg";
import digitalImage from "../assets/senusa-digital.jpg";
import materialImage from "../assets/senusa-material.jpg";
import studioImage from "../assets/senusa-studio.jpg";

export type Project = {
  slug: string;
  name: string;
  category: "Brand & Commerce" | "Culture & Community" | "Hospitality" | "Digital Product";
  descriptor: { id: string; en: string };
  image: string;
  url: string;
  year: string;
};

export const projects: Project[] = [
  { slug: "arqive", name: "ARQIVE", category: "Digital Product", descriptor: { id: "Sistem operasi untuk fashion stylist", en: "An operating system for fashion stylists" }, image: digitalImage, url: "https://arqive-senusacorp.lovable.app", year: "2025" },
  { slug: "nusa-living", name: "NUSA Living", category: "Brand & Commerce", descriptor: { id: "Ruang digital untuk kriya Jepara", en: "A digital home for Jepara craft" }, image: materialImage, url: "https://nusa-senusacorp.lovable.app", year: "2025" },
  { slug: "rona-festival", name: "RONA Festival", category: "Culture & Community", descriptor: { id: "Festival musik dalam lanskap visual", en: "Music festival in a visual landscape" }, image: brandImage, url: "https://rona-senusacorp.lovable.app", year: "2025" },
  { slug: "niskala-aruna", name: "Niskala Aruna", category: "Hospitality", descriptor: { id: "Hospitalitas dengan jiwa Jawa", en: "Hospitality with a Javanese soul" }, image: materialImage, url: "https://niskalaaruna-senusacorp.lovable.app", year: "2025" },
  { slug: "senja-parfum", name: "SÉNJA PARFUM", category: "Brand & Commerce", descriptor: { id: "Aroma Nusantara saat matahari turun", en: "Archipelago scents at sundown" }, image: materialImage, url: "https://wangi-indah-digital-senusacorp.lovable.app", year: "2025" },
  { slug: "fenomena-bike", name: "Fenomena Bike", category: "Culture & Community", descriptor: { id: "Cerita jalanan komunitas sepeda", en: "Street stories from a cycling community" }, image: studioImage, url: "https://fenomenabike.lovable.app", year: "2025" },
  { slug: "ruang-seduh", name: "Ruang Seduh", category: "Hospitality", descriptor: { id: "Kopi, proses, dan percakapan", en: "Coffee, process, and conversation" }, image: materialImage, url: "https://ruangsenduh-senusacorp.lovable.app", year: "2025" },
  { slug: "aspal", name: "ASPAL", category: "Brand & Commerce", descriptor: { id: "Streetwear dari hutan beton", en: "Streetwear from the concrete jungle" }, image: brandImage, url: "https://aspal-senusacorp.lovable.app", year: "2025" },
  { slug: "selaras", name: "SÉLARAS", category: "Brand & Commerce", descriptor: { id: "Busana tenang dalam gerak", en: "Quiet clothing in motion" }, image: brandImage, url: "https://selaras-senusacorp.lovable.app", year: "2025" },
  { slug: "morphe", name: "MORPHÉ", category: "Brand & Commerce", descriptor: { id: "Studi eksperimental dalam perak", en: "Experimental studies in silver" }, image: materialImage, url: "https://morphe-senusacorp.lovable.app", year: "2025" },
  { slug: "virel-house", name: "VIREL House", category: "Hospitality", descriptor: { id: "Singgah, pulih, dan menikmati", en: "Stay, restore, and taste" }, image: studioImage, url: "https://virel-senusacorp.lovable.app", year: "2025" },
  { slug: "villa-anggrek", name: "Villa Anggrek", category: "Hospitality", descriptor: { id: "Tempat pulang di Senggigi", en: "A place to return to in Senggigi" }, image: materialImage, url: "https://hotelangrek-senusacorp.lovable.app", year: "2025" },
  { slug: "north-coffee", name: "NORTH / COFFEE", category: "Hospitality", descriptor: { id: "Roastery kecil dari Bali", en: "A small-batch roastery from Bali" }, image: materialImage, url: "https://north-senusacorp.lovable.app", year: "2025" },
  { slug: "aroma-27", name: "AROMA/27", category: "Brand & Commerce", descriptor: { id: "Eksperimen aroma yang berani", en: "A bold experiment in scent" }, image: brandImage, url: "https://wangi-indah-desain-senusacorp.lovable.app", year: "2025" },
  { slug: "ruang-rupa", name: "Ruang Rupa", category: "Culture & Community", descriptor: { id: "Jurnal mode dan material", en: "A journal of fashion and material" }, image: studioImage, url: "https://ruangrupa-senusacorp.lovable.app", year: "2025" },
  { slug: "sela", name: "SELA", category: "Brand & Commerce", descriptor: { id: "Busana uniseks untuk keseharian", en: "Unisex clothing for everyday life" }, image: brandImage, url: "https://sela-senuacorp.lovable.app", year: "2025" },
  { slug: "penulis", name: "PENULIS", category: "Culture & Community", descriptor: { id: "Portofolio sastra Indonesia", en: "An Indonesian literary portfolio" }, image: studioImage, url: "https://pesona-desain-web-senusacorp.lovable.app", year: "2025" },
];

export const assets = { brandImage, digitalImage, materialImage, studioImage };