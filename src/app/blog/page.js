import Link from "next/link";

const posts = [
  { slug:"ensemble-pour-education-des-filles", category:"Éducation", date:"À venir", title:"Ensemble pour l’éducation des filles", excerpt:"Pourquoi accompagner la scolarisation des filles reste une action essentielle pour les familles et les communautés.", image:"/images/education-program.png" },
  { slug:"activites-generatrices-de-revenus", category:"Autonomie", date:"À venir", title:"Des activités qui renforcent l’autonomie des femmes", excerpt:"Agrobusiness, élevage de lapins et initiatives collectives : des voies concrètes vers des revenus durables.", image:"/images/volunteers-banner.png" },
  { slug:"proteger-les-plus-vulnerables", category:"Protection", date:"À venir", title:"Protéger les personnes les plus vulnérables", excerpt:"Un regard sur les engagements de la fondation auprès des jeunes filles, des aînés et des personnes sans abri.", image:"/images/health-program.png" }
];

export const metadata = { title: "Actualités | Bello et Bisso" };

export default function BlogPage(){ return <main className="page-shell"><section className="page-intro blog-intro"><p className="eyebrow">Actualités</p><h1>Les histoires qui font <em>avancer nos actions.</em></h1><p>Suivez les initiatives, les regards et les avancées de la Fondation Bello et Bisso.</p></section><section className="blog-list section-wide">{posts.map((post,index)=><article className={`post-card post-${index+1}`} key={post.slug}><img src={post.image} alt="" /><div><p className="eyebrow">{post.category} · {post.date}</p><h2>{post.title}</h2><p>{post.excerpt}</p><Link className="text-link" href={`/blog/${post.slug}`}>Lire l’article <span>→</span></Link></div></article>)}</section></main>; }
