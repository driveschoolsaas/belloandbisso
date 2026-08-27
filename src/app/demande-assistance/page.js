"use client";
import Link from "next/link";
import { useState } from "react";

const steps = [
  ["Vous écrivez", "Vous remplissez le formulaire ci-dessous. Nous accusons réception sous 72 heures, quelle que soit la suite donnée. Aucune demande ne reste sans réponse."],
  ["Nous vérifions", "Nous regardons si la demande relève de l’une de nos trois priorités et de notre périmètre : l’Extrême-Nord, le Nord et l’Adamaoua."],
  ["La commission décide", "Seule la commission compétente peut engager la fondation. Nous vous répondons ensuite, y compris lorsque la réponse est non."]
];

const scope = [
  ["Jeunes filles & éducation", "Une fille déscolarisée ou sur le point de l’être, un besoin d’alphabétisation, une situation de mariage précoce annoncé."],
  ["Femmes & autonomisation", "Un collectif de femmes qui porte une activité agricole, d’élevage, de commerce ou d’artisanat et cherche un appui pour la consolider."],
  ["Dignité & solidarité", "Une personne âgée isolée ou mise à l’écart, une personne sans domicile, une famille en rupture."]
];

export default function AssistancePage() {
  const [sent, setSent] = useState(false);
  function submit(e) { e.preventDefault(); setSent(true); e.currentTarget.reset(); }

  return <main className="page-shell">
    <section className="page-intro assistance-intro"><p className="eyebrow">Demande d’assistance</p><h1>Une seule procédure, <em>la même pour tout le monde.</em></h1><p>Nous recevons plus de demandes que nous ne pouvons en traiter. Pour que chacune soit examinée équitablement, elles passent toutes par ce formulaire, jamais par un message privé.</p></section>

    <section className="action-steps section-wide"><p className="eyebrow">Comment cela se passe</p><h2>Trois étapes, et une réponse dans tous les cas.</h2><div>{steps.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="detail-body section-wide"><p className="eyebrow">Ce que nous pouvons examiner</p><div className="detail-grid">{scope.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{text}</p></article>)}</div></section>

    <section className="split-story section-wide"><img src="/images/assistance-listening.webp" alt="Trois femmes assises sur une natte, en conversation, l’une prenant des notes" /><div><p className="eyebrow">Nos limites, dites franchement</p><h2>Ce que nous ne pouvons pas faire.</h2><p>Nous ne versons pas d’aide financière individuelle, nous ne prenons pas en charge de frais médicaux ou de dettes, et nous n’intervenons pas en dehors de l’Extrême-Nord, du Nord et de l’Adamaoua. Nous ne sommes pas non plus un service d’urgence.</p><p>Le dire à l’avance n’est pas un refus déguisé : c’est ce qui nous permet de traiter sérieusement les demandes qui relèvent réellement de nous, et de vous éviter une attente inutile. Lorsque nous connaissons un acteur mieux placé, nous vous orientons vers lui.</p></div></section>

    <section className="impact-callout"><div><span>✦</span><h2>Une personne est en danger immédiat ? Indiquez-le dès la première ligne.</h2></div><a className="button button-ink" href="tel:+237694143610">Appeler la fondation <span>→</span></a></section>

    <section className="contact-layout section-wide">
      <aside>
        <div className="contact-badge">B<br />&amp;<br />B</div>
        <h2>Avant d’écrire.</h2>
        <p>Décrivez la situation en quelques lignes, simplement. Nous n’avons besoin ni de dossier, ni de certificat, ni de recommandation : les faits, la localité et un moyen de vous joindre suffisent pour ouvrir l’examen.</p>
        <p className="contact-note">Aucune aide n’est promise à ce stade, par personne et par aucun canal. Les informations que vous transmettez sont consignées dans un registre accessible uniquement à la direction et au référent protection, et ne sont jamais publiées ni communiquées à un tiers. Toute demande révélant une situation de danger est transmise immédiatement au référent protection.</p>
      </aside>
      <form onSubmit={submit}>
        <label>Votre nom<input name="name" required placeholder="Nom et prénom" /></label>
        <label>Téléphone ou WhatsApp<input name="phone" required placeholder="+237…" /></label>
        <label>Localité<input name="place" required placeholder="Village, quartier, arrondissement" /></label>
        <label>La situation<textarea name="message" required rows="6" placeholder="De qui s’agit-il, que se passe-t-il, depuis quand, et qu’est-ce qui a déjà été tenté ? Quelques lignes suffisent." /></label>
        <button className="button button-sun" type="submit">Envoyer ma demande <span>→</span></button>
        {sent && <p className="form-success" role="status">Votre demande est prête à partir. Raccordez le formulaire au registre officiel de la fondation avant la mise en ligne publique.</p>}
      </form>
    </section>

    <section className="back-band"><Link href="/actions">← Voir nos trois priorités</Link><Link className="button button-sun" href="/contact">Nous écrire autrement <span>→</span></Link></section>
  </main>;
}
