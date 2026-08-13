"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["/fondation", "La fondation"],
  ["/actions", "Nos actions"],
  ["/engager", "S’engager"],
  ["/contact", "Contact"]
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return <header className={`site-header ${pathname === "/" ? "home-header" : "internal-header"}`}>
    <Link className="brand logo-brand" href="/" aria-label="Fondation Bello et Bisso, accueil"><img src="/images/bbcf-logo-transparent.png" alt="Bello et Bisso Charity Foundation" /></Link>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="navigation">{open ? "Fermer" : "Menu"}</button>
    <nav id="navigation" className={open ? "open" : ""}>{links.map(([href, label]) => <Link onClick={() => setOpen(false)} className={pathname === href ? "active" : ""} href={href} key={href}>{label}</Link>)}<Link onClick={() => setOpen(false)} className={pathname === "/blog" ? "active" : ""} href="/blog">Actualités</Link></nav>
    <Link className="header-cta" href="/engager">Faire un don <span>↗</span></Link>
  </header>;
}
