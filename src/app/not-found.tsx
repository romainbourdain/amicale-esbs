import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Erreur 404</h2>
      <p>Cette page n'existe pas</p>
      <p>
        <Link href="/">Revenir à la page d'accueil</Link>
      </p>
    </div>
  );
};

export default NotFound;
