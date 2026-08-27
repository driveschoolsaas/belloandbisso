import Link from "next/link";
import { notFound } from "next/navigation";

const articles = {
  "bbcf-impact-report": {
    category: "Transparence",
    title: "BBCF Impact Report : ce que nous publierons chaque mois",
    intro: "La confiance ne se déclare pas, elle se prouve. Voici précisément ce que contiendra notre rapport mensuel, et pourquoi il comportera toujours une rubrique consacrée à ce qui n’a pas marché.",
    image: "/images/transparency-register.webp",
    body: [
      ["p", "Une fondation qui publie beaucoup mais ne prouve rien perd sa crédibilité plus vite qu’une fondation silencieuse. C’est la raison d’être de ce rendez-vous : le même jour chaque mois, un document court, chiffré et vérifiable."],
      ["h2", "Neuf points, tous les mois"],
      ["p", "Le mois en une phrase. Les actions menées : quoi, où, quand, avec qui. Le nombre et les catégories de personnes accompagnées. Les bénévoles mobilisés et les heures données. Les ressources reçues et leur affectation. Ce qui n’a pas fonctionné et pourquoi. Les partenaires impliqués. Les prochaines actions et les besoins. Enfin, un seul appel à l’action pour le mois."],
      ["quote", "Expliquer l’écart entre l’objectif annoncé et le résultat obtenu renforce la crédibilité davantage que d’atteindre l’objectif sans l’expliquer."],
      ["h2", "Trois niveaux de preuve"],
      ["p", "La preuve visuelle : des photos et des vidéos datées de l’action, publiées après le retour de l’équipe. La preuve chiffrée : nombre de bénéficiaires, montants, localités, dates. La preuve vérifiable : listes signées, attestations d’écoles ou d’autorités locales, rapport téléchargeable. C’est ce troisième niveau qui ouvre la porte des partenariats institutionnels, et c’est celui que nous visons dès notre première année."],
      ["h2", "Un cycle complet, jamais un fragment"],
      ["p", "Chaque campagne importante est publiée du début à la fin : objectif annoncé et chiffré, point d’étape à mi-parcours, action réalisée, résultats mesurés, justificatifs, prochaine étape. Une campagne dont les résultats ne sont pas publiés interdit la suivante. Cette règle nous engage plus qu’elle n’engage nos soutiens."]
    ]
  },
  "les-visages-de-lespoir": {
    category: "Portraits",
    title: "Les visages de l’espoir : raconter sans exposer",
    intro: "Une personne, une histoire, un parcours. C’est notre série la plus lue, et celle dont les règles sont les plus strictes. Aucun portrait n’est publié sans consentement écrit, et aucun ne doit exposer la personne qu’il raconte.",
    image: "/images/elders-listening.webp",
    body: [
      ["p", "Les personnes que nous accompagnons sont présentées comme les actrices de leur propre parcours, jamais comme des objets de compassion. Un portrait BBCF suit toujours la même structure : qui elle est, ce qu’elle fait, l’obstacle rencontré, son ambition, et la façon dont la communauté peut la soutenir."],
      ["quote", "La souffrance n’est jamais un outil de persuasion."],
      ["h2", "Ce que nous ne publions jamais"],
      ["p", "Pas de gros plan larmoyant, pas de mise en scène de la détresse, pas de comparaison « avant / après » centrée sur l’apparence physique. Jamais le nom complet d’une personne associé à son visage, jamais l’école et le quartier mentionnés ensemble, jamais un enfant montré en situation de dénuement ou de soins. Un prénom seul, modifié si nécessaire, suffit à raconter une histoire."],
      ["h2", "Le consentement, avant et après"],
      ["p", "Avant toute publication concernant une personne, nous recueillons son consentement écrit ou filmé, et celui de son représentant légal si elle est mineure. Nous évaluons ensuite le risque : cette publication peut-elle l’exposer à une pression familiale, communautaire ou sécuritaire ? Les éléments d’identification indirecte sont retirés, y compris un uniforme, une façade ou un panneau reconnaissable."],
      ["p", "Une autorisation peut être retirée à tout moment, par simple demande écrite ou orale. Dans ce cas, nous retirons les contenus concernés de nos supports sous quinze jours, sans discussion et sans justification à fournir."],
      ["h2", "La sécurité passe avant le récit"],
      ["p", "Le contexte du Grand-Nord nous impose une règle supplémentaire : aucun contenu ne doit permettre de localiser une personne accompagnée, un domicile, un itinéraire d’équipe ou un site sensible. Entre un bon contenu et un risque de sécurité, le contenu n’est pas publié."]
    ]
  },
  "une-minute-pour-comprendre": {
    category: "Pédagogie",
    title: "Une minute pour comprendre : les questions qui reviennent",
    intro: "Des formats courts, en français simple ou en langue locale sous-titrée, consacrés aux questions qui reviennent le plus souvent dans nos échanges avec les familles du Grand-Nord.",
    image: "/images/education-teaching.webp",
    body: [
      ["p", "Comprendre une cause précède toujours l’envie d’agir sur elle. Cette série existe pour cela : expliquer un mécanisme, un droit ou une conséquence en une minute, sans jargon et sans dramatisation."],
      ["h2", "Les premiers sujets"],
      ["p", "Pourquoi l’éducation des filles change une communauté entière. Quelles sont les conséquences réelles du mariage avant seize ans. Pourquoi l’autonomie économique des femmes protège aussi les enfants. Ce que dit la loi camerounaise sur la scolarisation obligatoire. Comment reconnaître une situation de vulnérabilité, et à qui s’adresser."],
      ["quote", "La pédagogie sur les causes précède toujours l’appel à l’action."],
      ["h2", "Accessible même avec un petit forfait"],
      ["p", "Une part importante de notre communauté consulte Internet avec des données limitées. Nos contenus sont donc légers, compréhensibles sans le son, sous-titrés systématiquement, et l’information essentielle figure toujours dans les premières secondes et dans le texte qui accompagne la publication."],
      ["h2", "Proposer un sujet"],
      ["p", "Les meilleures questions posées en commentaire deviennent des épisodes. Si une question revient chez vous et que personne n’y répond clairement, écrivez-nous : c’est exactement le type de sujet que cette série doit traiter."]
    ]
  }
};

export function generateStaticParams(){return Object.keys(articles).map((slug)=>({slug}));}

export async function generateMetadata({ params }){ const {slug}=await params; const article=articles[slug]; return article ? { title: article.title, description: article.intro.slice(0,155) } : {}; }

export default async function ArticlePage({params}){const {slug}=await params;const article=articles[slug];if(!article)notFound();return <main className="page-shell"><article className="article"><header className="article-header"><p className="eyebrow">{article.category} · Série signature</p><h1>{article.title}</h1><p>{article.intro}</p></header><img className="article-cover" src={article.image} alt="" /><div className="article-content">{article.body.map(([tag,text],index)=>tag==="h2"?<h2 key={index}>{text}</h2>:tag==="quote"?<blockquote key={index}>« {text} »</blockquote>:<p key={index}>{text}</p>)}<Link className="button button-ink" href="/contact">Prendre contact <span>→</span></Link></div></article><section className="back-band"><Link href="/blog">← Retour aux actualités</Link><Link className="button button-sun" href="/engager">Agir avec nous <span>→</span></Link></section></main>; }
