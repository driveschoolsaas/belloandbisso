import Link from "next/link";

export const metadata = {
  title: "Transparence",
  description: "Preuves, rapports d’impact mensuels et cycle complet des campagnes : comment BELLO & BISSO CHARITY FOUNDATION rend compte de son action dans le Grand-Nord du Cameroun."
};

const proofs = [
  ["Preuve visuelle", "Des photos et des vidéos datées de l’action, publiées après le retour de l’équipe. Jamais en temps réel : la sécurité de nos équipes et des personnes accompagnées passe avant l’actualité."],
  ["Preuve chiffrée", "Le nombre de personnes accompagnées, les montants engagés, les localités et les dates. Un chiffre qui n’est pas vérifié en interne n’est pas publié."],
  ["Preuve vérifiable", "Listes signées, attestations d’écoles ou d’autorités locales, rapport téléchargeable. C’est ce niveau qui ouvre la porte des partenariats institutionnels."]
];

const cycle = [
  ["Ce que nous annonçons", "Un objectif chiffré, une échéance, un moyen de contribuer déjà fonctionnel. Aucune campagne n’est lancée sans ces trois éléments réunis."],
  ["Ce que nous faisons", "Un point d’étape à mi-parcours, puis l’action elle-même : la date, la localité, le nombre de personnes effectivement accompagnées."],
  ["Ce que nous publions", "Les résultats mesurés, le détail des dépenses, l’écart avec l’objectif et son explication, puis la prochaine étape."]
];

export default function TransparencePage() {
  return <main className="page-shell">
    <section className="page-intro transparence-intro"><p className="eyebrow">Transparence</p><h1>La confiance ne se déclare pas. <em>Elle se prouve.</em></h1><p>Chaque campagne est publiée du début à la fin : objectif annoncé et chiffré, point d’étape, action réalisée, résultats mesurés, justificatifs, prochaine étape. Une campagne dont les résultats ne sont pas publiés interdit la suivante.</p></section>

    <section className="values section-wide"><p className="eyebrow">Nos trois niveaux de preuve</p><div className="values-grid">{proofs.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="action-steps section-wide"><p className="eyebrow">Le cycle d’une campagne</p><h2>Trois temps, tous rendus publics.</h2><div>{cycle.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="split-story section-wide"><img src="/images/transparency-register.webp" alt="Des mains inscrivent des chiffres dans un registre papier posé sur une table en bois" /><div><p className="eyebrow">BBCF Impact Report</p><h2>Le rapport mensuel, publié le même jour chaque mois.</h2><p>Il tient en neuf points : le mois en une phrase, les actions menées avec leur lieu et leur date, le nombre et les catégories de personnes accompagnées, les bénévoles mobilisés et les heures données, les ressources reçues et leur affectation, les partenaires impliqués, les prochaines actions et les besoins, un seul appel à l’action.</p><p>Et un neuvième point que la plupart des organisations omettent : ce qui n’a pas fonctionné, et pourquoi. C’est cette rubrique qui sépare un rapport crédible d’une communication d’autosatisfaction.</p></div></section>

    <section className="split-story section-wide"><div><p className="eyebrow">Traçabilité des ressources</p><h2>Un registre unique, tenu le jour même.</h2><p>Toute somme reçue est enregistrée le jour de sa réception, avec la date, le montant, le canal, l’origine et l’affectation. Ce registre est la source unique du rapport mensuel : sans lui, aucune des promesses de cette page ne serait tenable.</p><p>Le trésorier est le seul signataire du compte de la fondation et le président du conseil d’administration le seul ordonnateur des dépenses. Un audit est réalisé à chaque fin d’exercice. Tant qu’un compte au nom de la fondation n’est pas pleinement opérationnel, nous ne lançons aucune collecte publique.</p><Link className="button button-ink" href="/fondation">Voir notre gouvernance <span>→</span></Link></div><img src="/images/volunteers-field.webp" alt="Des femmes en pagne et des hommes en boubou préparent ensemble des lots de fournitures scolaires" /></section>

    <section className="impact-callout"><div><span>✦</span><h2>Le premier rapport paraîtra à l’issue de notre première sortie terrain documentée.</h2></div><Link className="button button-ink" href="/contact">Être prévenu <span>→</span></Link></section>

    <section className="quote-panel"><p>Expliquer l’écart entre l’objectif et le résultat renforce plus la crédibilité que d’atteindre l’objectif sans l’expliquer.</p><Link className="button button-sun" href="/engager">Agir avec nous <span>→</span></Link></section>
  </main>;
}
