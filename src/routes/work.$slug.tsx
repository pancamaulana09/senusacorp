import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../lib/i18n";
import { projects } from "../lib/site-data";

export const Route=createFileRoute("/work/$slug")({loader:({params})=>{const project=projects.find(p=>p.slug===params.slug);if(!project)throw notFound();return project},head:({loaderData:p})=>({meta:[{title:p?`${p.name} — Studi Kasus SenusaCorp`:"Karya tidak ditemukan — SenusaCorp"},{name:"description",content:p?`${p.name}: ${p.descriptor.id}`:"Karya SenusaCorp tidak ditemukan."},{property:"og:title",content:p?`${p.name} — SenusaCorp`:"SenusaCorp"},{property:"og:description",content:p?.descriptor.en??"SenusaCorp project case study"},{property:"og:type",content:"article"},{name:"twitter:card",content:"summary_large_image"}]}),component:ProjectDetail,notFoundComponent:()=> <section className="section"><h1>Karya tidak ditemukan.</h1><Link to="/work">Kembali ke karya</Link></section>});

function ProjectDetail(){
  const p=Route.useLoaderData();
  const{language}=useLanguage();
  const id=language==="id";
  const index=projects.findIndex(project=>project.slug===p.slug);
  const previous=projects[(index-1+projects.length)%projects.length] ?? p;
  const next=projects[(index+1)%projects.length] ?? p;
  return <>
    <section className="detail-hero"><div className="case-index">{String(index+1).padStart(2,"0")} / {String(projects.length).padStart(2,"0")}</div><p className="eyebrow">{p.sector[language]} · {p.year}</p><h1>{p.name}</h1><p className="page-intro">{p.descriptor[language]}</p><a className="button button-light detail-live" href={p.url} target="_blank" rel="noreferrer">{id?"Buka proyek langsung":"Visit live project"}<ArrowUpRight size={16}/></a></section>
    <div className="detail-image"><img src={p.image} width="1408" height="1008" alt={`${p.name} — ${p.descriptor[language]}`}/></div>
    <section className="section case-overview"><p className="eyebrow">{id?"Konteks":"Context"}</p><p className="case-statement">{p.challenge[language]}</p><div className="case-facts"><div><span>{id?"Sektor":"Sector"}</span><b>{p.sector[language]}</b></div><div><span>{id?"Layanan":"Services"}</span><b>{p.services[language]}</b></div><div><span>{id?"Tahun":"Year"}</span><b>{p.year}</b></div></div></section>
    <section className="section section-dark case-narrative"><article><p className="eyebrow">01 · {id?"Arah kreatif":"Creative direction"}</p><h2>{p.approach[language]}</h2></article><article><p className="eyebrow">02 · {id?"Hasil":"Outcome"}</p><p>{p.outcome[language]}</p></article></section>
    <section className="case-gallery" aria-label={id?"Galeri proyek":"Project gallery"}>{p.gallery.map((image,i)=><figure key={`${image}-${i}`} className={`gallery-item gallery-item-${i+1}`}><img src={image} loading="lazy" width="1408" height="1008" alt={`${p.name} ${id?"visual karya":"project visual"} ${i+1}`}/></figure>)}</section>
    <section className="section case-cta"><div><p className="eyebrow">{id?"Lihat pengalaman lengkap":"See the complete experience"}</p><h2>{id?"Buka karya langsung.":"Visit the live work."}</h2></div><a className="circle-link" href={p.url} target="_blank" rel="noreferrer" aria-label={`${id?"Buka":"Visit"} ${p.name}`}><ArrowUpRight/></a></section>
    <nav className="case-pagination" aria-label={id?"Navigasi karya":"Project navigation"}><Link to="/work/$slug" params={{slug:previous.slug}}><ArrowLeft/><span><small>{id?"Sebelumnya":"Previous"}</small><b>{previous.name}</b></span></Link><Link to="/work/$slug" params={{slug:next.slug}}><span><small>{id?"Berikutnya":"Next"}</small><b>{next.name}</b></span><ArrowRight/></Link></nav>
  </>
}