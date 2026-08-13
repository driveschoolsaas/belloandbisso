import Link from "next/link";

const programs = [
  { slug:"education-des-filles", tag:"Éducation des filles", title:"Apprendre, imaginer, réussir.", text:"Soutenir la scolarisation des jeunes filles et créer des centres éducatifs dédiés à l’alphabétisation et au développement des compétences.", image:"/images/education-program.png" },
  { slug:"protection-et-sante", tag:"Protection & santé", title:"Prendre soin, tout simplement.", text:"Protéger les jeunes filles et les personnes âgées, et sensibiliser aux risques liés au mariage précoce, notamment la fistule et l’abandon.", image:"/images/health-program.png" },
  { slug:"autonomie-des-femmes", tag:"Autonomie des femmes", title:"Des communautés qui se mettent en mouvement.", text:"Promouvoir l’agrobusiness, l’élevage de lapins et d’autres activités agricoles pour créer des revenus durables pour les collectifs de femmes.", image:"/images/volunteers-banner.png" }
];

export const metadata = { title: "Nos actions | Bello et Bisso" };

export default function ActionsPage() { return <main className="page-shell"><section className="page-intro actions-intro"><p className="eyebrow">Nos actions</p><h1>Des réponses ancrées dans <em>la vie quotidienne.</em></h1><p>De l’éducation des filles à l’autonomie économique des femmes, nos actions accompagnent les personnes là où les besoins sont les plus importants.</p></section><section className="program-list section-wide">{programs.map((program,index)=><article className="program-row" key={program.tag}><div className="program-image"><img src={program.image} alt="" /><span>0{index+1}</span></div><div><p className="eyebrow">{program.tag}</p><h2>{program.title}</h2><p>{program.text}</p><Link className="text-link" href={`/actions/${program.slug}`}>Découvrir cette action <span>→</span></Link></div></article>)}</section><section className="impact-callout"><div><span>✦</span><h2>Vous avez une idée ou un projet à partager ?</h2></div><Link className="button button-ink" href="/contact">Parlons-en <span>→</span></Link></section></main>; }
