import Link from "next/link";

const programs = [
  { slug:"jeunes-filles-education", tag:"Priorité 1 · Jeunes filles & éducation", title:"Une fille qui apprend transforme toute une génération.", text:"Maintien à l’école, alphabétisation, centres éducatifs de proximité, prévention du mariage précoce. Nous travaillons sur les obstacles réels - distance, coût des fournitures, charge domestique, pression familiale - plutôt que de dénoncer en bloc.", image:"/images/education-teaching.webp" },
  { slug:"femmes-autonomisation", tag:"Priorité 2 · Femmes & autonomisation", title:"L’autonomie ne se distribue pas. Elle se construit.", text:"Maraîchage, transformation agricole, élevage de lapins, commerce et artisanat. Nous accompagnons des collectifs de femmes vers des revenus qui tiennent une fois notre appui terminé.", image:"/images/women-livestock.webp" },
  { slug:"dignite-solidarite", tag:"Priorité 3 · Dignité & solidarité", title:"La dignité n’a ni âge ni condition sociale.", text:"Accompagnement des femmes âgées isolées ou mises à l’écart, hébergement et protection des personnes sans abri, soutien aux familles en rupture, transmission de la parole des aînés.", image:"/images/elders-listening.webp" }
];

export const metadata = {
  title: "Nos priorités",
  description: "Éducation des jeunes filles, autonomisation économique des femmes, dignité des personnes vulnérables : les trois priorités de BBCF dans le Grand-Nord du Cameroun."
};

export default function ActionsPage() {
  return <main className="page-shell">
    <section className="page-intro actions-intro"><p className="eyebrow">Nos priorités</p><h1>Trois priorités. <em>Rien d’autre.</em></h1><p>Toutes nos actions se rattachent à l’une de ces trois priorités. Un projet qui n’en relève d’aucune n’est pas mené. C’est cette discipline qui nous évite de nous disperser, et qui vous permet de savoir exactement où va votre soutien.</p></section>

    <section className="program-list section-wide">{programs.map((program, index) => <article className="program-row" key={program.slug}><div className="program-image"><img src={program.image} alt="" /><span>0{index + 1}</span></div><div><p className="eyebrow">{program.tag}</p><h2>{program.title}</h2><p>{program.text}</p><Link className="text-link" href={`/actions/${program.slug}`}>Voir comment nous procédons <span>→</span></Link></div></article>)}</section>

    <section className="impact-callout"><div><span>✦</span><h2>Vous connaissez une situation qui relève de l’une de ces priorités ?</h2></div><Link className="button button-ink" href="/demande-assistance">Nous la signaler <span>→</span></Link></section>
  </main>;
}
