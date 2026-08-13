import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Fondation Bello et Bisso | Agir avec dignité",
  description: "La Fondation Bello et Bisso mobilise les énergies pour des communautés plus solidaires et résilientes."
};

export default function RootLayout({ children }) {
  return <html lang="fr"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
