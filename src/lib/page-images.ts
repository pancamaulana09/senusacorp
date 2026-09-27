import studioPhoto from "../assets/pages/kantor-studio-desain-website-senusacorp-surabaya.jpg";
import processPhoto from "../assets/pages/proses-pembuatan-website-dan-aplikasi-senusacorp.jpg";
import pricingPhoto from "../assets/pages/transparansi-biaya-pembuatan-website-senusacorp.jpg";
import contactPhoto from "../assets/pages/konsultasi-jasa-pembuatan-website-senusacorp-surabaya.jpg";

export type PageImage = {
  src: string;
  width: number;
  height: number;
  alt: { id: string; en: string };
  title: string;
};

export const pageImages: Record<"about" | "process" | "pricing" | "contact", PageImage> = {
  about: {
    src: studioPhoto,
    width: 1200,
    height: 800,
    alt: {
      id: "Meja kerja studio SenusaCorp di Surabaya dengan laptop, sketsa tata letak website, dan panduan warna",
      en: "SenusaCorp studio worktable in Surabaya with laptops, website layout sketches, and colour guides",
    },
    title: "Studio jasa pembuatan website SenusaCorp Surabaya",
  },
  process: {
    src: processPhoto,
    width: 1200,
    height: 688,
    alt: {
      id: "Proses pembuatan website: sketsa wireframe, panduan sistem desain, dan tampilan halaman di tablet",
      en: "Website build process: wireframe sketches, design system guide, and a page layout on a tablet",
    },
    title: "Proses pembuatan website dan aplikasi bisnis SenusaCorp",
  },
  pricing: {
    src: pricingPhoto,
    width: 1200,
    height: 688,
    alt: {
      id: "Meja konsultasi dengan rincian estimasi biaya pembuatan website dan laporan performa di laptop",
      en: "Consultation desk with a written website cost estimate and a performance report on a laptop",
    },
    title: "Rincian biaya pembuatan website transparan SenusaCorp",
  },
  contact: {
    src: contactPhoto,
    width: 1200,
    height: 800,
    alt: {
      id: "Sudut ruang temu studio SenusaCorp untuk konsultasi proyek website bersama klien",
      en: "Meeting corner in the SenusaCorp studio used for client website project consultations",
    },
    title: "Konsultasi jasa pembuatan website SenusaCorp Surabaya",
  },
};

export const imageObjectLd = (image: PageImage, absolute: (path: string) => string) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  url: absolute(image.src),
  contentUrl: absolute(image.src),
  width: image.width,
  height: image.height,
  caption: image.alt.id,
  representativeOfPage: true,
});
