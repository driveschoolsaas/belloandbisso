import Link from "next/link";

export const metadata = {
  title: "Politique de confidentialité",
  description: "Données collectées par BELLO & BISSO CHARITY FOUNDATION, finalités, durée de conservation, destinataires, droits des personnes et protection de l’enfance."
};

export default function ConfidentialitePage() {
  return <main className="page-shell">
    <section className="page-intro legal-intro"><p className="eyebrow">Vos données</p><h1>Politique de <em>confidentialité.</em></h1><p>Ce que nous collectons, pourquoi, pendant combien de temps, qui y a accès, et comment demander la suppression de vos informations.</p></section>

    <article className="article"><div className="article-content">
      <h2>Responsable du traitement</h2>
      <p>BELLO &amp; BISSO CHARITY FOUNDATION, dont le siège est à Meskine, arrondissement de Maroua 1er, région de l’Extrême-Nord, Cameroun. Contact : <a href="mailto:contact@belloandbissocharity.org">contact@belloandbissocharity.org</a>.</p>

      <h2>Ce que nous collectons</h2>
      <p><b>Formulaire de contact</b> : votre nom, votre adresse électronique ou votre numéro WhatsApp, et le contenu de votre message.</p>
      <p><b>Formulaire de demande d’assistance</b> : votre nom, votre numéro de téléphone ou WhatsApp, votre localité et la description de la situation que vous nous soumettez.</p>
      <p><b>Bénévolat et partenariats</b> : les informations que vous nous transmettez volontairement pour instruire votre candidature ou votre proposition.</p>
      <p><b>Images et témoignages</b> : lorsqu’une personne accepte d’apparaître dans nos contenus, nous conservons son autorisation écrite ou filmée, ainsi que les éléments qu’elle a autorisés.</p>
      <p>Nous ne collectons aucune donnée à votre insu. Ce site ne dépose ni cookie publicitaire, ni cookie de mesure d’audience, et n’utilise aucun traceur tiers.</p>

      <h2>Pourquoi nous les collectons</h2>
      <p>Pour vous répondre, pour instruire une demande d’assistance selon la même procédure pour tout le monde, pour organiser le bénévolat et les partenariats, et pour tenir les registres internes qui alimentent nos rapports d’impact. Les données transmises ne servent à aucune autre finalité.</p>

      <h2>Qui y a accès</h2>
      <p>Les demandes d’assistance et les autorisations d’image sont consignées dans des registres accessibles uniquement à la direction de la fondation et au référent protection. Les autres demandes sont traitées par la personne en charge du sujet concerné.</p>
      <p>Nous ne vendons, ne louons ni ne cédons aucune donnée à un tiers. Nous ne publions jamais le contenu d’une demande reçue, même de façon anonymisée, sans l’accord explicite de la personne concernée.</p>

      <h2>Combien de temps nous les conservons</h2>
      <p>Durée de conservation : [à compléter par la direction, après avis du conseil juridique de la fondation]. Les autorisations d’image sont conservées pour la durée qu’elles mentionnent, puis détruites.</p>

      <h2>Vos droits</h2>
      <p>Vous pouvez à tout moment demander l’accès aux informations que nous détenons sur vous, leur rectification ou leur suppression. Il suffit d’une demande écrite ou orale adressée à la fondation, sans justification à fournir.</p>
      <p>Si vous avez autorisé la diffusion de votre image ou de votre témoignage, vous pouvez retirer cette autorisation à tout moment. Nous retirons alors les contenus concernés de nos propres supports dans un délai de quinze jours.</p>

      <h2>Protection des personnes accompagnées</h2>
      <p>Aucune publication concernant une personne n’est diffusée sans son consentement, et sans celui de son représentant légal lorsqu’elle est mineure. Avant chaque diffusion, nous retirons les informations sensibles - nom complet, âge exact, nom de l’école, quartier, situation médicale ou familiale détaillée - et nous vérifions les éléments d’identification indirecte, y compris un uniforme, une façade ou un panneau reconnaissable. Les métadonnées de localisation des photographies sont supprimées avant toute diffusion.</p>
      <p>Concernant les enfants, la règle est plus stricte encore : jamais de nom complet associé à un visage, jamais l’école et le quartier mentionnés ensemble, jamais un enfant présenté en situation de détresse, de dénuement ou de soins. La politique de protection de l’enfance de la fondation est écrite et signée par l’ensemble de l’équipe.</p>

      <h2>Sécurité</h2>
      <p>Les comptes et les outils de la fondation sont protégés par une double authentification et un gestionnaire de mots de passe. Les registres sensibles sont à accès restreint. Aucun contenu publié ne doit permettre de localiser une personne accompagnée, un domicile, un itinéraire d’équipe ou un site sensible.</p>

      <h2>Cadre applicable et contact</h2>
      <p>Cette politique s’applique dans le cadre de la réglementation camerounaise en vigueur [références légales précises à confirmer par le conseil juridique de la fondation]. Pour toute question relative à vos données ou pour exercer vos droits, écrivez-nous : votre demande sera transmise à la direction et, si elle concerne une personne accompagnée, au référent protection.</p>
      <Link className="button button-ink" href="/contact">Exercer mes droits <span>→</span></Link>
    </div></article>

    <section className="back-band"><Link href="/mentions-legales">← Mentions légales</Link><Link className="button button-sun" href="/transparence">Nos comptes rendus <span>→</span></Link></section>
  </main>;
}
