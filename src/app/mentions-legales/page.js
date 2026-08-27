import Link from "next/link";

export const metadata = {
  title: "Mentions légales",
  description: "Mentions légales de BELLO & BISSO CHARITY FOUNDATION : identité, siège, statut juridique, directeur de la publication et hébergement du site."
};

export default function MentionsLegalesPage() {
  return <main className="page-shell">
    <section className="page-intro legal-intro"><p className="eyebrow">Informations légales</p><h1>Mentions <em>légales.</em></h1><p>Informations relatives à l’éditeur de ce site, à son statut juridique et à son hébergement.</p></section>

    <article className="article"><div className="article-content">
      <h2>Éditeur du site</h2>
      <p><b>BELLO &amp; BISSO CHARITY FOUNDATION</b>, abrégée BBCF.<br />Organisation non gouvernementale apolitique, à caractère social et éducatif.<br />Statuts et règlement intérieur approuvés en assemblée générale constitutive du 9 décembre 2025.<br />Association constituée conformément à la loi n° 90/053 du 19 décembre 1990 portant sur la liberté d’association et à la loi n° 90/055 du 19 décembre 1990 fixant le régime des réunions et manifestations publiques.</p>
      <p><b>Siège social</b><br />Meskine, arrondissement de Maroua 1er<br />Département du Diamaré, région de l’Extrême-Nord, Cameroun</p>
      <p><b>Numéro de récépissé de déclaration</b> : [à compléter par la direction]<br /><b>Durée de l’organisation</b> : illimitée<br /><b>Devise</b> : Endam be Koullol Allah</p>

      <h2>Contact</h2>
      <p><b>Téléphone et WhatsApp</b><br /><a href="tel:+237694143610">+237 694 14 36 10</a><br /><a href="tel:+237651267053">+237 651 26 70 53</a><br /><a href="tel:+447946023371">+44 7946 023371</a> (international)</p>
      <p><b>Adresse électronique</b><br /><a href="mailto:contact@belloandbissocharity.org">contact@belloandbissocharity.org</a></p>

      <h2>Directeur de la publication</h2>
      <p>Le directeur de la publication est le président du conseil d’administration de la fondation : [nom à compléter par la direction].</p>

      <h2>Hébergement</h2>
      <p>[Raison sociale de l’hébergeur, adresse et coordonnées à compléter avant la mise en ligne publique.]</p>

      <h2>Propriété intellectuelle</h2>
      <p>L’ensemble des contenus de ce site - textes, photographies, vidéos, éléments graphiques, logo et devise - est la propriété de BELLO &amp; BISSO CHARITY FOUNDATION, sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite.</p>
      <p>Les photographies et témoignages de personnes accompagnées sont diffusés au titre d’une autorisation écrite, accordée à titre gratuit et pour les seuls usages liés à la mission de la fondation. Elle exclut toute utilisation commerciale et toute cession à un tiers. Une personne peut retirer son autorisation à tout moment : nous retirons alors les contenus concernés de nos supports sous quinze jours.</p>

      <h2>Responsabilité</h2>
      <p>La fondation s’efforce de publier des informations exactes et tenues à jour. Les chiffres d’activité publiés sur ce site proviennent du registre interne de la fondation et sont arrêtés à la date indiquée sur chaque rapport. Les liens vers des sites tiers n’engagent pas la responsabilité de la fondation quant à leur contenu.</p>

      <h2>Signalement</h2>
      <p>Pour signaler un contenu vous concernant, demander le retrait d’une image ou d’un témoignage, ou porter à notre connaissance une situation exposant une personne vulnérable, écrivez-nous. Ces demandes sont traitées en priorité par le référent protection de la fondation.</p>
      <Link className="button button-ink" href="/contact">Nous écrire <span>→</span></Link>
    </div></article>

    <section className="back-band"><Link href="/confidentialite">Politique de confidentialité →</Link><Link className="button button-sun" href="/transparence">Nos comptes rendus <span>→</span></Link></section>
  </main>;
}
