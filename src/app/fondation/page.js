import Link from "next/link";

export const metadata = {
  title: "La fondation",
  description: "BBCF est une organisation non gouvernementale apolitique, à vocation sociale et éducative, constituée le 9 décembre 2025 à Maroua et active dans le Grand-Nord du Cameroun."
};

const verbs = [
  ["Protéger", "Réduire l’exposition au risque des jeunes filles, des aînés isolés et des personnes sans abri. Protéger, ce n’est pas sauver : nous ne nous substituons jamais aux familles."],
  ["Éduquer", "Lever les obstacles concrets qui éloignent les filles de l’école : la distance, le coût des fournitures, la charge domestique, la pression familiale."],
  ["Autonomiser", "L’autonomie ne se distribue pas, elle se construit. Nous accompagnons des activités qui produisent encore des revenus après notre départ."]
];

const team = [
  ["SMB", "Safia Moustapha Bobbore", "Membre du collège fondateur"],
  ["BA", "Bisso épouse Assembe", "Membre du collège fondateur"],
  ["MB", "Moustapha Bobbore", "Membre du collège fondateur"]
];

const governance = [
  ["Assemblée générale", "L’organe suprême. Elle oriente la politique de la fondation, approuve les comptes de l’exercice clos et vote le budget. Elle se réunit deux fois par an."],
  ["Conseil d’administration", "L’organe de contrôle : présidence, secrétariat général, trésorerie et deux membres. Mandat de trois ans. Il valide les partenariats et supervise la collecte."],
  ["Comité exécutif", "L’organe opérationnel, nommé par le conseil : coordination, délégués, conseillers et affaires générales. Il conduit les actions sur le terrain."]
];

export default function FoundationPage() {
  return <main className="page-shell">
    <section className="page-intro foundation-intro"><p className="eyebrow">La fondation</p><h1>Qui nous sommes, ce que nous faisons, <em>comment nous le prouvons.</em></h1><p>BELLO &amp; BISSO CHARITY FOUNDATION est une organisation non gouvernementale apolitique, à vocation sociale et éducative, constituée en assemblée générale le 9 décembre 2025 à Maroua et active dans le Grand-Nord du Cameroun.</p></section>

    <section className="split-story section-wide"><img src="/images/community-gathering.webp" alt="Une assemblée communautaire réunie à l’ombre d’un grand acacia" /><div><p className="eyebrow">Notre raison d’être</p><h2>Protéger sans se substituer. Éduquer sans imposer. Renforcer sans remplacer.</h2><p>Une organisation de solidarité n’est plus jugée sur ses intentions. Elle est jugée sur ce qu’elle fait réellement, sur ce qu’elle peut en prouver, et sur la relation qu’elle entretient avec les personnes qu’elle sert. Nous avons construit BBCF autour de ces trois exigences, dès le premier jour.</p><p>Notre périmètre est fixe et nous ne l’élargirons pas par opportunisme : l’Extrême-Nord, le Nord et l’Adamaoua, avec la bande sahélienne comme zone d’action prioritaire. Notre siège est à Meskine, dans l’arrondissement de Maroua 1er, et nos actions partent toujours d’une demande formulée sur place, jamais d’un projet conçu ailleurs.</p></div></section>

    <section className="values section-wide"><p className="eyebrow">Ce qui nous guide</p><div className="values-grid">{verbs.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="values section-wide"><p className="eyebrow">Gouvernance et redevabilité</p><div className="values-grid">{governance.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="team section-wide"><p className="eyebrow">Notre équipe</p><h2>Le collège fondateur.</h2><div className="values-grid">{team.map(([initials, name, role]) => <article key={name}><span>{initials}</span><h3>{name}</h3><p>{role}</p></article>)}</div><p className="contact-note">Les membres fondateurs conservent leur qualité de membre à titre permanent. Ils siègent de droit au conseil d’administration, sans élection préalable, et disposent d’une voix délibérative ainsi que d’un droit de veto sur les décisions soumises au vote. Les titulaires des fonctions opérationnelles - présidence du conseil, secrétariat général, trésorerie, coordination et référence protection - seront publiés ici dès leur désignation. Le référent protection n’est jamais la personne qui produit les contenus : celle qui les fabrique ne peut pas être celle qui les autorise.</p></section>

    <section className="split-story section-wide"><div><p className="eyebrow">Nos règles financières</p><h2>Un seul compte, un seul registre, un audit chaque année.</h2><p>Toute somme reçue est enregistrée le jour même dans un registre unique mentionnant la date, le montant, le canal, l’origine et l’affectation. Le trésorier est le seul signataire du compte de la fondation, le président du conseil d’administration le seul ordonnateur des dépenses, et un audit est réalisé à chaque fin d’exercice.</p><p>Tant qu’un compte au nom de la fondation n’est pas pleinement opérationnel, nous ne lançons aucune collecte publique. Un don reçu sur un compte personnel est la faille de crédibilité la plus difficile à réparer : nous préférons attendre.</p><Link className="button button-ink" href="/transparence">Voir nos comptes rendus <span>→</span></Link></div><img src="/images/transparency-register.webp" alt="Des mains inscrivent des chiffres dans un registre papier posé sur une table en bois" /></section>

    <section className="quote-panel"><p>« Endam be Koullol Allah » est notre héritage. Notre aide, elle, ne demande à personne sa confession, son origine ou son appartenance.</p><Link className="button button-sun" href="/contact">Échanger avec nous <span>→</span></Link></section>
  </main>;
}
