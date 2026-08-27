"use client";
import Link from "next/link";
import { useState } from "react";
import SocialLinks from "../../components/SocialLinks";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  function submit(e) { e.preventDefault(); setSent(true); e.currentTarget.reset(); }

  return <main className="page-shell">
    <section className="page-intro contact-intro"><p className="eyebrow">Contact</p><h1>Une question, un signalement, <em>une envie d’agir ?</em></h1><p>Nous répondons à chaque message de bonne foi sous 48 heures ouvrées. Si votre message concerne une personne en danger, indiquez-le dès la première ligne : il sera traité en priorité par notre référent protection.</p></section>

    <section className="contact-layout section-wide">
      <aside>
        <div className="contact-badge">B<br />&amp;<br />B</div>
        <h2>Restons en lien.</h2>
        <p>Notre siège est à Meskine, dans l’arrondissement de Maroua 1er. Nous intervenons dans l’Extrême-Nord, le Nord et l’Adamaoua, avec la bande sahélienne comme zone prioritaire, et nous le disons franchement lorsqu’une demande sort de ce périmètre.</p>
        <div className="contact-details">
          <p><b>Adresse</b>Meskine, arrondissement de Maroua 1er<br />Département du Diamaré, région de l’Extrême-Nord, Cameroun</p>
          <p><b>Téléphone et WhatsApp</b><a href="tel:+237694143610">+237 694 14 36 10</a><br /><a href="tel:+237651267053">+237 651 26 70 53</a><br /><a href="tel:+447946023371">+44 7946 023371</a> (international)</p>
          <p><b>E-mail</b><a href="mailto:contact@belloandbissocharity.org">contact@belloandbissocharity.org</a></p>
          <p><b>Nous suivre</b><SocialLinks className="social-links-ink" /></p>
        </div>
        <p className="contact-note">Vous sollicitez une aide personnelle ? Passez par notre <Link href="/demande-assistance">formulaire de demande d’assistance</Link> : il recueille les mêmes informations pour tout le monde et garantit un examen équitable. Nous accusons réception sous 72 heures, quelle que soit la suite donnée. Aucune aide n’est promise par message privé : seule la commission compétente décide.</p>
      </aside>
      <form onSubmit={submit}>
        <label>Votre nom<input name="name" required placeholder="Nom et prénom" /></label>
        <label>Votre e-mail ou numéro WhatsApp<input name="contact" required placeholder="vous@exemple.com ou +237…" /></label>
        <label>Votre message<textarea name="message" required rows="5" placeholder="Bénévolat, partenariat, demande d’assistance, question sur nos actions : dites-nous en quelques lignes de quoi il s’agit." /></label>
        <button className="button button-sun" type="submit">Envoyer le message <span>→</span></button>
        {sent && <p className="form-success" role="status">Merci, votre message est prêt à partir. Raccordez le formulaire à l’adresse officielle de la fondation avant la mise en ligne publique.</p>}
      </form>
    </section>
  </main>;
}
