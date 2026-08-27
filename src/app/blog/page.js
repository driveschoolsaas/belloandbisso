import Link from "next/link";

const posts = [
  { slug:"bbcf-impact-report", category:"Transparence", date:"Rendez-vous mensuel", title:"BBCF Impact Report", excerpt:"Le même jour chaque mois : personnes accompagnées, activités menées, ressources reçues et affectées, partenaires impliqués, et ce qui n’a pas fonctionné.", image:"/images/transparency-register.webp" },
  { slug:"les-visages-de-lespoir", category:"Portraits", date:"Deux fois par mois", title:"Les visages de l’espoir", excerpt:"Une personne, une histoire, un parcours. La série qui nous impose les règles les plus strictes : consentement écrit, aucun mineur identifiable, aucune exposition.", image:"/images/elders-listening.webp" },
  { slug:"une-minute-pour-comprendre", category:"Pédagogie", date:"Chaque semaine", title:"Une minute pour comprendre", excerpt:"Des formats courts, en français simple ou en langue locale sous-titrée, pour répondre aux questions qui reviennent le plus souvent dans le Grand-Nord.", image:"/images/education-teaching.webp" }
];

export const metadata = {
  title: "Actualités",
  description: "Rapports d’impact, portraits et contenus pédagogiques de BELLO & BISSO CHARITY FOUNDATION dans le Grand-Nord du Cameroun."
};

export default function BlogPage(){
  return <main className="page-shell">
    <section className="page-intro blog-intro"><p className="eyebrow">Actualités</p><h1>Ce que nous faisons, <em>mois après mois.</em></h1><p>Nos publications suivent trois rendez-vous réguliers. Chacune indique ce qui a été fait, où, avec quels moyens et avec quel résultat. Le site vient d’être mis en ligne : les premières parutions arrivent avec notre première sortie terrain documentée.</p></section>

    <section className="blog-list section-wide">{posts.map((post,index)=><article className={`post-card post-${index+1}`} key={post.slug}><img src={post.image} alt="" /><div><p className="eyebrow">{post.category} · {post.date}</p><h2>{post.title}</h2><p>{post.excerpt}</p><Link className="text-link" href={`/blog/${post.slug}`}>Découvrir la série <span>→</span></Link></div></article>)}</section>

    <section className="impact-callout"><div><span>✦</span><h2>Recevoir nos publications sans dépendre d’un algorithme ?</h2></div><Link className="button button-ink" href="/contact">Rejoindre notre canal WhatsApp <span>→</span></Link></section>
  </main>;
}
