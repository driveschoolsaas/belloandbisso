import Link from "next/link";

export const metadata = {
  title: "Partenariats",
  description: "Entreprises, ONG, écoles et institutions : travailler avec BELLO & BISSO CHARITY FOUNDATION dans le Grand-Nord du Cameroun, par convention écrite et rapport de fin de projet."
};

const weBring = [
  ["Une connaissance du terrain", "Une équipe installée à Meskine, dans l’arrondissement de Maroua 1er, qui travaille avec les familles, les enseignants et les chefs de quartier de la bande sahélienne."],
  ["Des preuves utilisables", "Photos datées, chiffres vérifiés, listes signées et attestations locales. De quoi alimenter vos propres rapports, pas seulement les nôtres."],
  ["Un interlocuteur unique", "Un point de contact identifié, un délai de réponse tenu sous 48 heures ouvrées, et un conseil d’administration qui valide chaque convention."]
];

const weAsk = [
  ["Un objectif partagé", "Formulé et chiffré avant le premier décaissement. Nous préférons un projet réduit et tenu à un projet ambitieux et abandonné au troisième mois."],
  ["Le respect de nos règles", "Nos règles de protection des personnes accompagnées s’appliquent aussi à vos publications : consentement écrit, aucun mineur identifiable, aucun lieu localisable."],
  ["L’accord de rendre compte", "Nous publions le partenariat, son objectif et son résultat. Y compris lorsque le résultat est en deçà de ce qui était annoncé."]
];

export default function PartenairesPage() {
  return <main className="page-shell">
    <section className="page-intro partners-intro"><p className="eyebrow">Partenariats</p><h1>Une convention écrite, <em>un rapport de fin de projet.</em></h1><p>Entreprises, ONG, écoles, institutions et collectivités : nous travaillons sur la base d’un objectif défini, d’un budget, d’un calendrier et d’un compte rendu remis à la fin. Le conseil d’administration valide chaque partenariat.</p></section>

    <section className="values section-wide"><p className="eyebrow">Ce que nous apportons</p><div className="values-grid">{weBring.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="action-steps section-wide"><p className="eyebrow">Ce que nous demandons</p><h2>Trois conditions, posées avant de commencer.</h2><div>{weAsk.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="action-feature section-wide"><img src="/images/partners-meeting.webp" alt="Une réunion de travail sous un abri, autour de carnets et de documents" /><div><p className="eyebrow">Comment cela se passe</p><h2>Un échange, une convention, un résultat publié.</h2><p>Le premier échange sert à vérifier une seule chose : votre objectif entre-t-il dans l’une de nos trois priorités et dans notre périmètre ? Si la réponse est non, nous le disons tout de suite et nous vous orientons vers un acteur plus pertinent. Si elle est oui, nous rédigeons une convention qui fixe l’objectif, le budget, le calendrier et la date du rapport final.</p><div className="audience-note"><span>Pour qui ?</span><p>Entreprises et fondations d’entreprise, ONG et organisations de développement, écoles et établissements, institutions publiques et collectivités, réseaux de la diaspora camerounaise.</p></div></div></section>

    <section className="campaign-band"><div><p className="eyebrow">Premier contact</p><h2>Votre organisation souhaite contribuer ? Échangeons.</h2><p>Présentez-nous votre objectif en quelques lignes et la zone qui vous intéresse. Nous revenons vers vous sous 48 heures ouvrées avec une réponse claire, y compris lorsqu’elle est négative. Un dossier de partenariat détaillé est disponible sur demande.</p><Link className="button button-sun" href="/contact">Proposer un partenariat <span>→</span></Link></div><img src="/images/community-gathering.webp" alt="Une assemblée communautaire réunie à l’ombre d’un grand acacia" /></section>
  </main>;
}
