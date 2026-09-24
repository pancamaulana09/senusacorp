import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../lib/i18n";
import { projects } from "../lib/site-data";
import { pageHead, SITE_URL, absoluteUrl } from "../lib/seo";

export const Route=createFileRoute("/work/$slug")({staticData:{sitemap:true},loader:({params})=>{const project=projects.find(p=>p.slug===params.slug);if(!project)throw notFound();return project},head:({loaderData:p})=>p?pageHead({path:`/work/${p.slug}`,title:`${p.name} — Contoh Website ${p.sector.id} | SenusaCorp`,description:`${p.name}: ${p.descriptor.id} Studi kasus desain dan pembuatan website oleh SenusaCorp.`.slice(0,160),image:p.image,imageAlt:`Preview website ${p.name}`,type:"article",breadcrumbs:[{name:"Karya",path:"/work"},{name:p.name,path:`/work/${p.slug}`}],jsonLd:[{"@context":"https://schema.org","@type":"CreativeWork",name:p.name,url:`${SITE_URL}/work/${p.slug}`,image:absoluteUrl(p.image),description:p.descriptor.id,dateCreated:String(p.year),creator:{"@type":"Organization",name:"SenusaCorp",url:SITE_URL}}]}):{meta:[{title:"Karya tidak ditemukan — SenusaCorp"},{name:"robots",content:"noindex"}]},component:ProjectDetail,notFoundComponent:()=> <section className="section"><h1>Karya tidak ditemukan.</h1><Link to="/work">Kembali ke karya</Link></section>});

function ProjectDetail(){
  const p=Route.useLoaderData();
  const{language}=useLanguage();
  const id=language==="id";
  const index=projects.findIndex(project=>project.slug===p.slug);
  const previous=projects[(index-1+projects.length)%projects.length] ?? p;
  const next=projects[(index+1)%projects.length] ?? p;
  return <>
    <section className="detail-hero"><div className="case-index">{String(index+1).padStart(2,"0")} / {String(projects.length).padStart(2,"0")}</div><p className="eyebrow">{p.sector[language]} · {p.year}</p><h1>{p.name}</h1><div className="detail-hero-bottom"><p className="page-intro">{p.descriptor[language]}</p><a className="button button-light detail-live" href={p.url} target="_blank" rel="noreferrer">{id?"Buka proyek langsung":"Visit live project"}<ArrowUpRight size={16}/></a></div></section>
    <figure className="detail-image"><img src={p.image} width="1291" height="653" alt={`${p.name} — ${p.descriptor[language]}`}/><figcaption><span>{id?"Preview website":"Website preview"}</span><b>{p.name}</b></figcaption></figure>
    <section className="section case-overview"><p className="eyebrow">{id?"Konteks":"Context"}</p><p className="case-statement">{p.challenge[language]}</p><div className="case-facts"><div><span>{id?"Sektor":"Sector"}</span><b>{p.sector[language]}</b></div><div><span>{id?"Layanan":"Services"}</span><b>{p.services[language]}</b></div><div><span>{id?"Tahun":"Year"}</span><b>{p.year}</b></div></div></section>
    <section className="section section-dark case-narrative"><article><p className="eyebrow">01 · {id?"Arah kreatif":"Creative direction"}</p><h2>{p.approach[language]}</h2></article><article><p className="eyebrow">02 · {id?"Hasil":"Outcome"}</p><p>{p.outcome[language]}</p></article></section>
    <section className="case-gallery" aria-label={id?"Galeri proyek":"Project gallery"}>{p.gallery.map((item,i)=><figure key={`${item.image}-${i}`} className={`gallery-item gallery-item-${i+1} gallery-${item.ratio}`}><img src={item.image} loading="lazy" width={item.ratio==="wide"?1291:1408} height={item.ratio==="wide"?653:1008} alt={item.alt[language]}/><figcaption><span>{item.type==="preview"?(id?"Preview website":"Website preview"):(id?"Arah visual":"Visual direction")}</span><p>{item.caption[language]}</p></figcaption></figure>)}</section>
    <section className="section case-cta"><div><p className="eyebrow">{id?"Lihat pengalaman lengkap":"See the complete experience"}</p><h2>{id?"Buka karya langsung.":"Visit the live work."}</h2></div><a className="circle-link" href={p.url} target="_blank" rel="noreferrer" aria-label={`${id?"Buka":"Visit"} ${p.name}`}><ArrowUpRight/></a></section>
    <nav className="case-pagination" aria-label={id?"Navigasi karya":"Project navigation"}><Link to="/work/$slug" params={{slug:previous.slug}}><ArrowLeft/><span><small>{id?"Sebelumnya":"Previous"}</small><b>{previous.name}</b></span></Link><Link to="/work/$slug" params={{slug:next.slug}}><span><small>{id?"Berikutnya":"Next"}</small><b>{next.name}</b></span><ArrowRight/></Link></nav>
  </>
}