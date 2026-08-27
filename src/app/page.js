import Link from "next/link";

const priorities = [
  ["Jeunes filles & éducation", "Rester à l’école, apprendre à lire et à compter, être protégée du mariage précoce. Une fille qui apprend aujourd’hui peut transformer toute une génération.", "/images/education-classroom.webp", "jeunes-filles-education"],
  ["Femmes & autonomisation", "Maraîchage, élevage, commerce, artisanat. Nous accompagnons des activités qui produisent des revenus réels, pas des aides ponctuelles.", "/images/women-market-garden.webp", "femmes-autonomisation"],
  ["Dignité & solidarité", "Aînés isolés, personnes sans abri, familles en rupture. La dignité n’a ni âge ni condition sociale.", "/images/elders-courtyard.webp", "dignite-solidarite"]
];

export default function Home() {
  return <main>
    <section className="home-hero">
      <div className="hero-photo"><img src="/images/hero-family-garden.webp" alt="Une femme peule en pagne entourée de deux enfants en boubou et robe en pagne, dans un jardin verdoyant en fin de journée" /><div className="photo-shade" /></div>
      <div className="hero-content"><p className="eyebrow light-text">Protéger • Éduquer • Autonomiser</p><h1>Agir avec le Grand-Nord,<br /><em>jamais à sa place.</em></h1><p>BELLO &amp; BISSO CHARITY FOUNDATION protège les personnes vulnérables, soutient l’éducation des jeunes filles et renforce l’autonomie économique des femmes dans l’Extrême-Nord, le Nord et l’Adamaoua.</p><div className="hero-actions"><Link className="button button-sun" href="/engager">Agir avec nous <span>→</span></Link><Link className="text-link light-link" href="/fondation">Comprendre notre mission <span>↓</span></Link></div></div>
      <div className="hero-sticker">Endam be<br />Koullol Allah <span>✦</span></div>
    </section>

    <section className="intro-grid section-wide">
      <div className="intro-copy"><p className="eyebrow">Notre point de départ</p><h2>Une fondation jeune, qui choisit de prouver avant de promettre.</h2><p>BBCF a été constituée le 9 décembre 2025 à Maroua, à l’initiative de trois membres fondateurs. Nous démarrons avec des moyens modestes et une règle qui ne bougera pas : chaque action menée est documentée, chiffrée et publiée.</p><p>Y compris ce qui n’a pas fonctionné. C’est cette ligne-là qui sépare un rapport crédible d’une communication d’autosatisfaction.</p><Link className="button button-ink" href="/fondation">Qui sommes-nous ? <span>→</span></Link></div>
      <div className="stats-stack"><article className="stat-card purple"><strong>Notre engagement</strong><span>publier chaque mois ce que nous avons fait, où, avec qui et avec quels moyens.</span></article><article className="image-card"><img src="/images/community-gathering.webp" alt="Une assemblée communautaire réunie à l’ombre d’un grand acacia" /></article><article className="stat-card orange"><strong>Notre périmètre</strong><span>l’Extrême-Nord, le Nord et l’Adamaoua. Nous n’annonçons rien au-delà.</span></article></div>
    </section>

    <section className="programs section-wide"><div className="section-heading"><div><p className="eyebrow">Nos trois priorités</p><h2>Trois terrains, choisis pour ne pas nous disperser.</h2></div><Link className="text-link" href="/actions">Voir nos priorités <span>→</span></Link></div><div className="program-grid">{priorities.map(([title, text, image, slug], index) => <article className="program-card" key={title}><img src={image} alt="" /><div><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><Link href={`/actions/${slug}`}>En savoir plus <b>→</b></Link></div></article>)}</div></section>

    <section className="campaign-band"><div><p className="eyebrow">Nos campagnes</p><h2>Trois campagnes par an. Un objectif chiffré. Des résultats publiés.</h2><p>Une fille, un avenir à la rentrée scolaire. Elle entreprend autour du 8 mars. Ne laissons personne derrière en fin d’année. Aucune campagne n’est lancée sans échéance annoncée, et aucune ne redémarre tant que les résultats de la précédente ne sont pas publiés.</p><Link className="button button-sun" href="/engager">Je participe <span>→</span></Link></div><img src="/images/volunteers-field.webp" alt="Des femmes en pagne et des hommes en boubou préparent ensemble des lots de fournitures scolaires" /></section>

    <section className="quote-panel"><p>« Chaque action peut redonner une chance et contribuer à construire un avenir plus digne. »</p><Link className="button button-sun" href="/actions">Découvrir nos actions <span>→</span></Link></section>
  </main>;
}
