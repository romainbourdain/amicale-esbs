import Link from "next/link";

const PartiesPage = () => {
  return (
    <>
      <section>
        <h1>Soirées étudiantes à l'ESBS</h1>
        <p>
          L’Amicale partage les locaux et est en étroite collaboration avec le
          Bureau des Élèves de l’École Télécom Physique Strasbourg (TPS). Ainsi,
          chaque membre de l’Amicale ESBS est aussi membre du BDE TPS. Les
          élèves de l’ESBS peuvent donc intégrer les clubs de TPS (qui sont très
          nombreux!).
        </p>
        <p>
          ESBS et TPS partagent notamment le foyer étudiant ou Fouaille pour les
          intimes. C’est un bâtiment semi-indépendant placé dans la cour
          centrale de l’école où tu peux t’y rendre pour acheter à manger et
          chiller.
        </p>
        <p>
          Tu y trouveras: une grande salle avec bar, canapés et piste de danse,
          une salle geek, une salle de billard, une salle baby-foot, une salle
          de musculation, une salle de musique, une laverie, etc.
        </p>
        <p>
          La plupart des soirées se déroulent là-bas ! En effet, le BDE TPS
          organise la grande majorité des soirées aux Fouailles. De temps en
          temps, l’Amicale BS reprend les reines notamment pendant l’intégration
          des 1A BS (voire la page{" "}
          <Link href="/student-life/integration">Intégration</Link>).
        </p>
        <p>
          Pour chaque soirée, le Bureau des Fêtes (BDF), association mixte
          PS-BS, s’occupe de mettre l’ambiance, en prenant en charge la musique
          et les effets lumineux.
        </p>
        <p>
          Les soirées au Fouaille commencent vers 18h et se terminent à 23h,
          pour continuer de plus belle en after sur Strasbourg.
        </p>
        <p>
          Les afters se terminant généralement après minuit, il est avisé de
          prendre un logement entre Illkirch et Strasbourg pour pouvoir rentrer
          plus facilement : le tram s’arrête vers 0h30, bien qu’il existe des
          bus de nuit du jeudi au samedi (cf. Site de la{" "}
          <Link href="https://www.cts-strasbourg.eu/fr/se-deplacer/fiches-horaires/">
            CTS
          </Link>
          ).
        </p>
        <p>
          <strong>Info pratique :</strong> Nous travaillons en étroite relation
          avec les Fouailles TPS pour vous servir des repas et snacks tous les
          midis de 12h à 14h. On sera là quand tu auras la flemme de te faire un
          tupp ou de manger au RU. Rejoins-nous et tu goûteras nos fameuses
          pizzas du fouailles. Tarifs des Pizzas (4fro, royale, chèvre, 4
          saisons, …) = 2,60€
        </p>
      </section>
      <section>
        <h2>Soirées poly</h2>
        <p>
          Pour des événements de grandes envergures (soirée de remise des
          diplômes des 4A ou soirée de désintégration des 3A), l’Amicale utilise
          la grande salle polyvalente du Pôle API, située dans la coupole.
        </p>
        <p>
          Les soirées Poly débutent à 23h, pour se terminer vers 5h du matin.
        </p>
        <p>
          La salle polyvalente peut aussi être réquisitionnée par l’association
          du Poly, regroupant les VP Ext’ de tous les BDE et Amicales des 8
          Ecole d’ingénieurs de Strasbourg. Ces soirées sont l’occasion pour
          faire de nouvelles connaissances. L’association Poly organise aussi
          d’autres événements comme des tournois sportifs.
        </p>
      </section>
      <section>
        <h2>Soirée du Gala</h2>
        <p>
          Et une fois par an, un grand événement a lieu : la soirée du Gala. Il
          est organisé par l’association mixte Le Gala TPS-ESBS. Un vrai repas
          est servi par un traiteur et est suivi par un défilé. C’est l’occasion
          de se mettre sur son 31, et d’accorder sa tenue en fonction du thème
          choisi pour l’occasion.
        </p>
      </section>
    </>
  );
};

export default PartiesPage;
