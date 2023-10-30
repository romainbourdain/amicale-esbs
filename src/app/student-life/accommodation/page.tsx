import Link from "next/link";

const AccommodationPage = () => {
  return (
    <>
      <section>
        <h1>Se loger à Strasbourg</h1>
        <p>Bienvenue à Strasbourg !</p>
        <p>
          Vous venez d’apprendre votre adminssion à l’ESBS et vous cherchez
          désormais votre petit nid douillet ? Pas de soucis, nous sommes là
          pour vous aider ! La recherche de logements à Strasbourg est, soyons
          honnêtes, un peu difficile. Le mieux est de s’y prendre le plus tôt
          possible, et ainsi d’éviter le “rush”.
        </p>
        <p>
          Les prix sont variables mais vous pouvez généralement trouver un
          appartement d’une vingtaine de mètres carrés pour 400-450€ charges
          comprises. N’oubliez pas de vous renseigner concernant les bourses et
          APL.
        </p>
      </section>
      <section>
        <h2>Localisations</h2>
        <p>
          Deux choix possibles : vivre près du campus d’Illkirch (pour se
          réveiller plus tard le matin) ou près du centre-ville (pour sortir
          plus facilement dans la Grande-Île de Strasbourg).
        </p>
        <p>
          Pour ceux qui ne peuvent choisir, des logements sont bien évidemment
          disponibles à mi-chemin entre le centre de Strasbourg et l’école, dans
          les quartiers de la Meinau et de Neudorf.
        </p>
        <p>
          Privilégier les logements à proximité des lignes de tram A et E
          (dernier Tram vers 0h30).
        </p>
      </section>
      <section>
        <h2>Où chercher</h2>
        <p>
          Les recherches peuvent se faire via des sites d’annonces sur Internet,
          comme leboncoin.com, seloger.com, paruvendu.fr, ou des sites d’agences
          immobilières. Tu peux également rejoindre des groupes Facebook comme
          “Étudiants de Strasbourg”. La page Carte des Colocations Strasbourg
          peut aussi vous servir.
        </p>
        <div className="list-par">
          <p>
            Strasbourg et Illkirch comptent également un certain nombre de
            résidences étudiantes, privées ou gérées par le{" "}
            <Link href="https://www.crous-strasbourg.fr/logements/trouvez-votre-residence/">
              Crous
            </Link>
            . Voici une petite liste non exhaustive des résidences les plus
            connues par les étudiants de BS :
          </p>
          <ul>
            <li>
              Les Héliotropes (CROUS), 78 Rte du Rhin, 67400
              Illkirch-Graffenstaden – 03 88 67 80 18
            </li>
            <li>
              La Résidence du Parc d’Innovation, 78 route du Rhin 67400 Illkirch
              Graffenstaden, Geispolsheim – 08 99 49 05 31 (Numéro surtaxé, 3
              €/appel)
            </li>
            <li>
              La Strasbourgeoise, 79-81 Rte du Rhin, 67400
              Illkirch-Graffenstaden – 03 88 66 04 88
            </li>
            <li>Résidence 301, 301, avenue de Colmar – 03 88 45 50 70</li>
          </ul>
        </div>
        <p>
          Si vous avez l’occasion de passer par ces résidences avant ou après
          votre entretien, pensez à regarder à l’entrée de celles-ci, certains
          propriétaires ne s’embêtent pas à mettre leur annonce sur internet et
          la laissent simplement à l’entrée des résidences début Juillet.
        </p>
        <p>
          Notons que les 3A BS partent en stage en janvier et quittent souvent
          leurs apparts à cette période. Donc pas de panique si tu n’es pas bien
          installé, tu auras encore la possibilité de changer !
        </p>
        <p>
          Si à la rentrée tu n’as pas trouvé de logement, n’hésite pas à te
          renseigner sur le programme “Bed and CROUS” qui peut te permettre
          d’être loger pendant un mois.
        </p>
      </section>
    </>
  );
};

export default AccommodationPage;
