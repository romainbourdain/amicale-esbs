import Link from "next/link";

const NotFound = () => {
  return (
    <section>
      <div>
        <h2>Erreur 404</h2>
        <p>Cette page n'existe pas</p>
      </div>
      <p>
        <Link href="/">Revenir à la page d'accueil</Link>
      </p>
    </section>
  );
};

export default NotFound;
