import Link from "next/link";
import SiteSignature from "./SiteSignature";
import SocialLinks from "./SocialLinks";

const discover = [
  ["/fondation", "La fondation"],
  ["/actions", "Nos trois priorités"],
  ["/transparence", "Transparence"],
  ["/blog", "Actualités"]
];

const act = [
  ["/engager", "S’engager"],
  ["/partenaires", "Devenir partenaire"],
  ["/demande-assistance", "Demande d’assistance"],
  ["/contact", "Nous écrire"]
];

export default function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-top">
      <div className="footer-brand-col">
        <Link className="brand logo-brand footer-brand" href="/"><img src="/images/bbcf-logo-transparent.png" alt="Bello & Bisso Charity Foundation" /></Link>
        <p className="footer-mission">BBCF agit avec les communautés du Grand-Nord du Cameroun pour protéger les personnes vulnérables, éduquer les jeunes filles et renforcer l’autonomie économique des femmes.</p>
        <p className="footer-devise">Protéger • Éduquer • Autonomiser</p>
        <SocialLinks />
      </div>

      <nav className="footer-col" aria-label="Découvrir">
        <h3>Découvrir</h3>
        <ul>{discover.map(([href, label]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul>
      </nav>

      <nav className="footer-col" aria-label="Agir">
        <h3>Agir</h3>
        <ul>{act.map(([href, label]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul>
      </nav>

      <div className="footer-col footer-contact">
        <h3>Nous joindre</h3>
        <p>Meskine, arrondissement de Maroua 1er<br />Département du Diamaré, région de l’Extrême-Nord, Cameroun</p>
        <p><a href="tel:+237694143610">+237 694 14 36 10</a><br /><a href="tel:+237651267053">+237 651 26 70 53</a><br /><a href="tel:+447946023371">+44 7946 023371</a> (international)</p>
        <p><a href="mailto:contact@belloandbissocharity.org">contact@belloandbissocharity.org</a></p>
      </div>
    </div>

    <div className="footer-bottom">
      <p>Organisation non gouvernementale apolitique, constituée le 9 décembre 2025. Périmètre d’intervention : l’Extrême-Nord, le Nord et l’Adamaoua, avec la bande sahélienne comme zone prioritaire.</p>
      <div className="footer-legal">
        <Link href="/mentions-legales">Mentions légales</Link>
        <Link href="/confidentialite">Confidentialité</Link>
        <span>© {new Date().getFullYear()} Bello &amp; Bisso Charity Foundation</span>
      </div>
    </div>

    <SiteSignature />
  </footer>;
}
