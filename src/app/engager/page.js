import Link from "next/link";

export const metadata = {
  title: "Agir avec nous",
  description: "Bénévolat, partenariat, soutien financier : trois façons d’agir avec BBCF dans le Grand-Nord du Cameroun, et un engagement de redevabilité mensuelle."
};

export default function EngagePage() {
  return <main className="page-shell">
    <section className="page-intro engage-intro"><p className="eyebrow">S’engager</p><h1>Trois façons d’agir, <em>et une règle : nous rendons des comptes.</em></h1><p>Que vous donniez du temps, une compétence, un réseau ou une contribution, vous saurez ce qu’elle a permis. Nous publions chaque mois les personnes accompagnées, les ressources reçues, leur affectation et ce qui n’a pas fonctionné.</p></section>

    <section className="back-band"><span>Nos comptes rendus sont publics et détaillés.</span><Link className="button button-sun" href="/transparence">Voir notre transparence <span>→</span></Link></section>

    <section className="engage-grid section-wide">
      <article className="engage-card volunteer"><span>01</span><h2>Donner du temps</h2><p>Une sortie terrain par mois, la captation de photos et de témoignages, l’appui aux activités, la traduction en fulfulde. Le bénévolat est aujourd’hui notre premier besoin, avant l’argent.</p><Link className="button button-sun" href="/contact">Devenir bénévole <span>→</span></Link></article>
      <article className="engage-card partner"><span>02</span><h2>Devenir partenaire</h2><p>Entreprises, ONG, écoles et institutions : nous travaillons par convention écrite, avec un objectif défini, un budget, un calendrier et un rapport de fin de projet.</p><Link className="button button-ink" href="/partenaires">Voir nos conditions <span>→</span></Link></article>
      <article className="engage-card donate"><span>03</span><h2>Soutenir financièrement</h2><p>Nos moyens de don au nom de la fondation sont en cours d’ouverture. Écrivez-nous pour être prévenu dès qu’ils sont opérationnels : nous préférons attendre plutôt que de collecter sur un compte personnel.</p><Link className="text-link" href="/contact">Être prévenu <span>→</span></Link></article>
    </section>

    <section className="engage-photo"><img src="/images/volunteers-field.webp" alt="Des femmes en pagne et des hommes en boubou préparent ensemble des lots de fournitures scolaires" /><div><p className="eyebrow">Ce que nous demandons d’abord</p><h2>Du temps, une compétence, un relais. L’argent vient après la preuve.</h2></div></section>

    <section className="quote-panel"><p>Sur dix publications, une seule demande une contribution. C’est ce rapport qui rend l’appel crédible quand il arrive.</p><Link className="button button-sun" href="/blog">Voir nos publications <span>→</span></Link></section>
  </main>;
}
