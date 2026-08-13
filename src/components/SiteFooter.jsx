import Link from "next/link";

export default function SiteFooter() {
  return <footer>
    <Link className="brand logo-brand footer-brand" href="/"><img src="/images/bbcf-logo-transparent.png" alt="Bello et Bisso Charity Foundation" /></Link>
    <p>Quartier Chassdewo Meskine, Maroua 1er, Cameroun<br /><a href="tel:+237659413247">+237 659 413 247</a> · <a href="mailto:contact@bellobissocharityfondation.org">Nous écrire</a></p>
    <p>© {new Date().getFullYear()} Fondation Bello et Bisso</p>
  </footer>;
}
