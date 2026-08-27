import Link from "next/link";
import { notFound } from "next/navigation";

const details = {
  "jeunes-filles-education": {
    eyebrow: "Priorité 1 · Jeunes filles & éducation",
    title: "Une fille qui apprend transforme toute une génération.",
    image: "/images/education-classroom.webp",
    visual: "/images/education-teaching.webp",
    audience: "Les jeunes filles scolarisées ou déscolarisées du Grand-Nord, leurs familles, et les adultes qui décident de leur parcours.",
    intro: "Dans le Grand-Nord, une fille ne quitte presque jamais l’école pour une seule raison. C’est une accumulation : la distance, le coût des fournitures, la charge domestique, la pression familiale, parfois un mariage décidé avant seize ans. Nous travaillons sur ces obstacles, un par un, avec les familles.",
    sections: [
      ["Rester à l’école", "Repérer avec les enseignants et les familles les parcours qui se fragilisent, puis lever l’obstacle concret qui menace la scolarité : fournitures, transport, temps disponible, soutien à la maison."],
      ["Apprendre à tout âge", "Créer des centres éducatifs de proximité consacrés à l’alphabétisation, au calcul et aux compétences de base, ouverts aux jeunes que le système scolaire n’a pas retenus."],
      ["Prévenir le mariage précoce", "Informer les familles sur les conséquences réelles du mariage avant seize ans, notamment les risques obstétricaux et l’abandon. Le dialogue précède toujours l’interpellation."]
    ],
    feature: ["La pédagogie avant l’appel à l’action.", "Nous ne mettons pas les familles en accusation. Nous partons de ce qui bloque réellement, nous l’expliquons, puis nous proposons une réponse à leur portée. Un parent convaincu protège une fille plus durablement qu’une aide venue de l’extérieur."],
    steps: [
      ["Écouter", "Rencontrer les familles, les enseignants et les jeunes filles pour identifier l’obstacle réel, pas l’obstacle supposé."],
      ["Lever l’obstacle", "Agir sur le point précis qui menace la scolarité, avec une contribution de la famille chaque fois qu’elle est possible."],
      ["Suivre", "Vérifier la présence à l’école sur au moins deux trimestres et publier le résultat, même lorsqu’il est inférieur à ce que nous avions annoncé."]
    ]
  },
  "femmes-autonomisation": {
    eyebrow: "Priorité 2 · Femmes & autonomisation",
    title: "L’autonomie ne se distribue pas. Elle se construit.",
    image: "/images/women-market-garden.webp",
    visual: "/images/women-livestock.webp",
    audience: "Les groupes et collectifs de femmes du Grand-Nord qui portent déjà une activité, ou qui souhaitent en démarrer une.",
    intro: "Une femme accompagnée par BBCF est d’abord maraîchère, éleveuse, couturière ou commerçante. La vulnérabilité est un contexte, jamais une identité. Nous accompagnons des activités qui produisent encore des revenus une fois notre appui terminé.",
    sections: [
      ["Agriculture et agrobusiness", "Soutenir des activités maraîchères et de transformation adaptées au sol, au climat et aux circuits de vente réellement accessibles depuis la localité du collectif."],
      ["Élevage de proximité", "Développer l’élevage de lapins et de petits animaux : un cycle court, un investissement de départ modeste, une activité compatible avec la charge domestique."],
      ["Collectifs de femmes", "Travailler avec des groupes constitués plutôt qu’avec des personnes isolées. Le collectif absorbe les mauvais mois, partage les compétences et négocie mieux ses prix."]
    ],
    feature: ["Le métier avant le statut.", "Nous parlons de ce qu’une femme produit, vend et décide. C’est la seule façon de raconter son parcours sans l’abîmer, et la seule qui retienne l’attention d’un partenaire économique."],
    steps: [
      ["Partir de l’existant", "Identifier avec le collectif les savoir-faire déjà présents et le marché réellement atteignable."],
      ["Outiller", "Apporter la formation, l’intrant ou le petit équipement qui manque, et rien de plus. Ce qui est donné sans nécessité fragilise l’activité."],
      ["Mesurer", "Suivre les revenus sur plusieurs cycles et publier ce que l’activité rapporte vraiment aux femmes qui la portent."]
    ]
  },
  "dignite-solidarite": {
    eyebrow: "Priorité 3 · Dignité & solidarité",
    title: "La dignité n’a ni âge ni condition sociale.",
    image: "/images/elders-courtyard.webp",
    visual: "/images/elders-listening.webp",
    audience: "Les personnes âgées isolées, les personnes sans domicile et les familles en rupture, dans l’Extrême-Nord, le Nord et l’Adamaoua.",
    intro: "Des femmes âgées abandonnées ou mises à l’écart de leur communauté. Des personnes sans abri exposées aux abus et à l’exploitation. Des familles qui traversent une rupture. C’est la priorité dont on parle le moins et qui se voit le plus dans une communauté.",
    sections: [
      ["Accompagner les aînés", "Prendre soin des femmes âgées isolées, abandonnées ou exclues de leur communauté, et leur assurer un hébergement lorsque la solidarité familiale s’est rompue."],
      ["Mettre à l’abri", "Offrir un abri et un accompagnement aux personnes sans domicile, afin de les protéger des abus criminels et de l’exploitation."],
      ["Recueillir la parole", "Documenter la mémoire et la parole des aînés. Une communauté qui écoute ses anciens les abandonne moins facilement."]
    ],
    feature: ["La parole donnée aux aînés.", "Nous ne filmons pas la détresse. Nous filmons des personnes qui racontent, transmettent et décident encore. C’est ce qui sépare un accompagnement d’une mise en scène."],
    steps: [
      ["Recevoir le signalement", "Accueillir les signalements des familles, des voisins et des chefs de quartier par un canal unique, identique pour tous."],
      ["Évaluer sur place", "Vérifier la situation, et dire clairement ce qui relève de BBCF et ce qui doit être orienté vers un autre acteur."],
      ["Accompagner dans la durée", "Assurer un suivi régulier plutôt qu’une distribution ponctuelle. L’isolement revient dès que l’attention s’arrête."]
    ]
  }
};

export function generateStaticParams(){ return Object.keys(details).map((slug)=>({slug})); }

export async function generateMetadata({ params }) { const { slug } = await params; const action = details[slug]; return action ? { title: action.eyebrow.split("· ")[1], description: action.intro.slice(0, 155) } : {}; }

export default async function ActionDetail({ params }) { const { slug } = await params; const action = details[slug]; if(!action) notFound(); return <main className="page-shell"><section className="detail-lede section-wide"><div><p className="eyebrow">{action.eyebrow}</p><h1>{action.title}</h1><p>{action.intro}</p><Link className="button button-ink" href="/engager">Soutenir cette priorité <span>→</span></Link></div><img src={action.image} alt="" /></section><section className="detail-body section-wide"><p className="eyebrow">Ce que nous faisons concrètement</p><div className="detail-grid">{action.sections.map(([heading,text], index)=><article key={heading}><span>0{index+1}</span><h2>{heading}</h2><p>{text}</p></article>)}</div></section><section className="action-feature section-wide"><img src={action.visual} alt="" /><div><p className="eyebrow">Notre angle</p><h2>{action.feature[0]}</h2><p>{action.feature[1]}</p><div className="audience-note"><span>Pour qui ?</span><p>{action.audience}</p></div></div></section><section className="action-steps section-wide"><p className="eyebrow">Notre méthode</p><h2>Trois étapes, et un résultat rendu public.</h2><div>{action.steps.map(([title,text],index)=><article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section><section className="back-band"><Link href="/actions">← Retour à nos trois priorités</Link><Link className="button button-sun" href="/engager">Agir avec nous <span>→</span></Link></section></main>; }
