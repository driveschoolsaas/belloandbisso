import Link from "next/link";

const impact = [
  ["L’éducation", "Accompagner les apprentissages et l’autonomie des jeunes.", "/images/education-program.png"],
  ["La santé", "Renforcer le bien-être des familles avec une approche de proximité.", "/images/health-program.png"],
  ["La solidarité", "Mobiliser les énergies locales autour de solutions concrètes.", "/images/volunteers-banner.png"]
];

export default function Home() {
  return <main>
    <section className="home-hero">
      <div className="hero-photo"><img src="/images/hero-community.png" alt="Une mentore entourée d’enfants dans un jardin communautaire" /><div className="photo-shade" /></div>
      <div className="hero-content"><p className="eyebrow light-text">Fondation à vocation sociale</p><h1>Des gestes qui rassemblent.<br /><em>Des vies qui avancent.</em></h1><p>La Fondation Bello et Bisso transforme l’entraide en opportunités durables pour les communautés.</p><div className="hero-actions"><Link className="button button-sun" href="/engager">Soutenir la fondation <span>→</span></Link><Link className="text-link light-link" href="/fondation">Découvrir notre histoire <span>↓</span></Link></div></div>
      <div className="hero-sticker">Ensemble,<br />pour demain <span>✦</span></div>
    </section>

    <section className="intro-grid section-wide">
      <div className="intro-copy"><p className="eyebrow">Une fondation, une communauté</p><h2>L’impact commence par une attention portée à chacun.</h2><p>Nous fédérons des personnes, des idées et des ressources pour faire naître des réponses simples, utiles et profondément humaines.</p><Link className="button button-ink" href="/fondation">Qui sommes-nous ? <span>→</span></Link></div>
      <div className="stats-stack"><article className="stat-card purple"><strong>Une vision</strong><span>mettre la dignité au cœur de chaque projet.</span></article><article className="image-card"><img src="/images/education-program.png" alt="Atelier d’apprentissage pour enfants" /></article><article className="stat-card orange"><strong>Des actions</strong><span>pensées avec les communautés, sur le terrain.</span></article></div>
    </section>

    <section className="programs section-wide"><div className="section-heading"><div><p className="eyebrow">Nos domaines d’action</p><h2>Faire grandir les possibles.</h2></div><Link className="text-link" href="/actions">Toutes nos actions <span>→</span></Link></div><div className="program-grid">{impact.map(([title,text,image], index) => <article className="program-card" key={title}><img src={image} alt="" /><div><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><Link href="/actions">En savoir plus <b>→</b></Link></div></article>)}</div></section>

    <section className="campaign-band"><div><p className="eyebrow">Notre mouvement</p><h2>Unir les forces locales pour construire un avenir plus juste.</h2><Link className="button button-sun" href="/engager">Je participe <span>→</span></Link></div><img src="/images/volunteers-banner.png" alt="Des bénévoles réunis dans une cour communautaire" /></section>
  </main>;
}
