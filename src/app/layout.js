import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: {
    default: "BELLO & BISSO CHARITY FOUNDATION | Protéger, éduquer, autonomiser",
    template: "%s | BBCF"
  },
  description: "BELLO & BISSO CHARITY FOUNDATION agit avec les communautés du Grand-Nord du Cameroun pour protéger les personnes vulnérables, éduquer les jeunes filles et renforcer l’autonomie économique des femmes."
};

export default function RootLayout({ children }) {
  // suppressHydrationWarning : certaines extensions de navigateur ajoutent une classe
  // sur <body> avant l'hydratation de React, ce qui déclenche une fausse alerte.
  return <html lang="fr"><body suppressHydrationWarning><SiteHeader />{children}<SiteFooter /></body></html>;
}
