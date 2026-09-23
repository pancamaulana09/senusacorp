import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { LanguageProvider, useLanguage } from "../lib/i18n";

const nav = [
  ["/work", "Karya", "Work"], ["/services", "Layanan", "Services"], ["/process", "Proses", "Process"],
  ["/pricing", "Harga", "Pricing"], ["/about", "Tentang", "About"],
] as const;

function Header() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <Link to="/" className="wordmark" aria-label="SenusaCorp home"><span>se</span>nusa<span>corp</span><i /></Link>
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

function Footer() {
  const { language } = useLanguage();
  return <footer className="site-footer">
    <div><p className="eyebrow">{language === "id" ? "Punya ide?" : "Have an idea?"}</p><h2>{language === "id" ? "Mari buat jadi nyata." : "Let's make it real."}</h2></div>
    <Link to="/contact" className="circle-link" aria-label="Start a brief"><ArrowUpRight/></Link>
    <div className="footer-bottom"><span>© 2026 SenusaCorp</span><span>{language === "id" ? "Indonesia · bekerja lintas zona waktu" : "Indonesia · working across time zones"}</span><Link to="/privacy">{language === "id" ? "Privasi" : "Privacy"}</Link><span>IG · BE · LI</span></div>
  </footer>;
}

export function SiteShell({ children }: { children: ReactNode }) {
  return <LanguageProvider><Header/><main>{children}</main><Footer/></LanguageProvider>;
}

export function PageHero({ index, eyebrow, title, intro }: { index: string; eyebrow: string; title: ReactNode; intro: string }) {
  return <section className="page-hero"><div className="page-number">({index})</div><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-intro">{intro}</p></div></section>;
}