import { WHATSAPP_DISPLAY, waLink } from "../lib/contact";
import { Link, useLocation } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { LanguageProvider, useLanguage } from "../lib/i18n";
import { projects } from "../lib/site-data";
import logoAsset from "../assets/brand/senusa-logo.webp.asset.json";
import iconAsset from "../assets/brand/senusa-icon.webp.asset.json";

const nav = [
  ["/work", "Karya", "Work"], ["/services", "Layanan", "Services"], ["/process", "Proses", "Process"],
  ["/pricing", "Harga", "Pricing"], ["/about", "Tentang", "About"],
] as const;

function Header() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <Link to="/" className="wordmark" aria-label="SenusaCorp home">
      <img className="brand-logo-full" src={logoAsset.url} alt="" width="1265" height="330" />
      <img className="brand-logo-icon" src={iconAsset.url} alt="" width="600" height="665" />
    </Link>
    <nav className="desktop-nav" aria-label="Main navigation">
      {nav.map(([to,id,en]) => <Link key={to} to={to} activeProps={{className:"active"}}>{language === "id" ? id : en}</Link>)}
    </nav>
    <div className="header-actions">
      <button className="lang-toggle" onClick={() => setLanguage(language === "id" ? "en" : "id")} aria-label="Change language"><b>{language.toUpperCase()}</b><span>/</span>{language === "id" ? "EN" : "ID"}</button>
      <Link to="/contact" className="button button-lime">{language === "id" ? "Mulai Brief" : "Start a Brief"}<ArrowUpRight size={16}/></Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <nav className="mobile-nav">{nav.map(([to,id,en]) => <Link key={to} to={to} onClick={() => setOpen(false)}>{language === "id" ? id : en}</Link>)}<Link to="/contact" onClick={() => setOpen(false)}>{language === "id" ? "Mulai Brief" : "Start a Brief"}</Link></nav>}
  </header>;
}

function MotionObserver() {
  const location = useLocation();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });
    const timer = window.setTimeout(() => {
      const elements = document.querySelectorAll("main section, main article, .project-card, .gallery-item");
      elements.forEach((element) => {
        element.classList.add("reveal-ready");
        observer.observe(element);
      });
    }, 350);
    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, [location.pathname]);
  return null;
}

function Footer() {
  const { language } = useLanguage();
  return <footer className="site-footer">
    <div className="footer-pitch"><p className="eyebrow">{language === "id" ? "Punya ide?" : "Have an idea?"}</p><h2>{language === "id" ? "Mari buat jadi nyata." : "Let's make it real."}</h2></div>
    <Link to="/contact" className="circle-link" aria-label="Start a brief"><ArrowUpRight/></Link>
    <div className="footer-directory"><div className="footer-brand"><img src={logoAsset.url} alt="SenusaCorp" width="1265" height="330"/><p>{language === "id" ? "Studio kreatif dan teknologi Indonesia." : "An Indonesian creative and technology studio."}</p></div><nav aria-label="Footer navigation">{nav.map(([to,id,en])=><Link key={to} to={to}>{language === "id" ? id : en}</Link>)}</nav><figure><img src={projects[3]?.image} alt={language === "id" ? "Karya pilihan SenusaCorp" : "Selected SenusaCorp work"}/></figure></div>
    <div className="footer-bottom"><span>© 2026 SenusaCorp</span><span>Surabaya, Jawa Timur · {language === "id" ? "melayani seluruh Indonesia" : "serving all of Indonesia"}</span><a href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp {WHATSAPP_DISPLAY}</a><Link to="/privacy">{language === "id" ? "Privasi" : "Privacy"}</Link></div>
  </footer>;
}

export function SiteShell({ children }: { children: ReactNode }) {
  return <LanguageProvider><MotionObserver/><a href="#main" className="skip-link">Lewati ke konten</a><Header/><main id="main">{children}</main><Footer/></LanguageProvider>;
}

export function PageHero({ index, eyebrow, title, intro }: { index: string; eyebrow: string; title: ReactNode; intro: string }) {
  return <section className="page-hero"><div className="page-number">({index})</div><div className="page-hero-title"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1></div><p className="page-intro">{intro}</p><span className="page-hero-mark" aria-hidden="true">SC</span></section>;
}