import WebsiteButton from "@/components/Buttons/WebsiteButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Formation = () => {
  return (
    <>
      <section>
        <h1>L'école</h1>
        <Image
          src="/school/logo-esbs.png"
          alt="logo esbs"
          width={500}
          height={500}
          className="bg-white p-12"
        />
        <p>
          Tu auras la chance d’étudier dans le cluster{" "}
          <Link href="https://www.biovalley-france.com/fr/">
            Alsace Biovalley
          </Link>
          , un pôle dynamique regroupant de nombreuses entreprises, travaillant
          dans les domaines pharmaceutique et biotech. De nombreuses entreprises
          sont installées à proximité de l’école, notamment Transgène ou encore
          Thermo Fischer.
        </p>
      </section>
      <section>
        <h2>Le campus d’Illkirch, au sein du Parc d’Innovation</h2>
        <p>
          Le campus se trouve ainsi dans l’Alsace Biovalley et est accessible
          par les lignes de tram A et E. Il inclut le pôle API, la faculté de
          pharmacie et les IUT.
        </p>
      </section>
      <section>
        <h2>Le pôle API, au sein du campus d’Illkirch</h2>
        <p>
          Le Pôle API regroupe les 2 écoles d’ingénieur ESBS et TPS, ainsi que
          des centres de recherches ou encore des start-up.
        </p>
        <p>
          Un Centre de Ressources de Langue (CRL) fait également partie du Pôle
          API. C’est là que les cours d’anglais et d’allemand ont lieu.
        </p>
        <p>
          L’IGBMC (Institut de Génétique et Biologie Moléculaire et Cellulaire)
          présente également un lien étroit avec l’école. L’IGBMC occupe un
          grand bâtiment dédié à la recherche à proximité de l’école, ainsi que
          les étages situés au-dessus de l’ESBS.
        </p>
        <p>
          De nombreux Professeurs de l’ESBS réalisent leurs recherches dans cet
          institut.
        </p>
        <Image
          src="/school/map.jpg"
          alt="carte pôle api"
          width={500}
          height={500}
        />
      </section>
      <section>
        <h2>L'Ecole Supérieure de Biotechnologies de Strasbourg</h2>
        <p>
          L’école se trouve donc à moins de 10 minutes à pied de l’arrêt de tram
          Campus d’Illkirch et est accessible en vélo grâce aux pistes
          cyclables. Des parkings sont également à disposition des étudiants.
        </p>
        <p>
          L’ESBS est une école publique, qui enseigne un programme trinational.
          Nous étudions les bases de la biotechnologie, les sciences de
          l’ingénieur et les sciences humaines, économiques et sociales (HES).
          La plupart des cours se déroulent à Strasbourg, mais des cours
          pratiques et des projets sont également dispensés en Allemagne et en
          Suisse.
        </p>
        <p>
          Voici le lien du site officiel de l’école :{" "}
          <Link href="https://esbs.unistra.fr/lesbs">
            https://esbs.unistra.fr/lesbs
          </Link>
        </p>
        <p>
          Au bout des 3 ans de formation, les élèves obtiennent un diplôme
          d’Ingénieur en Biotechnologie. Il est reconnu par la Commission des
          Titres d’Ingénieur et dispensé par les universités de Strasbourg, Bâle
          et Fribourg.
        </p>
        <p>
          Depuis 2014, l’ESBS et l’Ecole européenne de Chimie, Polymères et
          Matériaux, l’ECPM, se sont associées pour créer le diplôme d’ingénieur
          en chimie et biotechnologie “ChemBiotech”, premier de ce genre en
          France. N’hésitez pas à aller voir{" "}
          <Link href="https://amicaleesbs.eu/formation-chembiotech-cbt-esbsecpm/">
            la page
          </Link>{" "}
          qui leur est consacrée sur notre site !
        </p>
      </section>
      <section>
        <h2>Formations ESBS</h2>
        <div className="title-par">
          <h3>Diplôme d’ingénieur</h3>
          <p>
            Etudier à l’ESBS permet l’obtention d’un des deux diplômes
            d’ingénieurs suivants: Diplôme d’ingénieur en Biotechnologie OU
            Diplôme d’ingénieur en Chimie-Biotechnologie.
          </p>
          <WebsiteButton
            title="Plus d'infos sur les diplômes d'ingénieur"
            link="https://esbs.unistra.fr/formations/diplomes-dingenieur"
          />
        </div>
        <div className="title-par">
          <h3>Double diplôme – Master</h3>
          <p>
            Le diplôme d’ingénieur reste assez peu reconnu au niveau
            international. Il est donc nécessaire d’avoir un équivalent master
            pour pouvoir s’exporter plus facilement à l’étranger. L’ESBS propose
            de suivre un Master, en parallèle avec le diplôme d’ingénieur, à
            partir du 2nd semestre de la 2e année.
          </p>
          <p>
            Il y 3 Masters disponibles : Bioproduction, Biologie Synthétique OU
            Haut-débit.
          </p>
          <WebsiteButton
            title="Plus d'infos sur les Masters"
            link="https://esbs.unistra.fr/formations/masters"
          />
        </div>
        <div className="title-par">
          <h3>Alternance</h3>
          <p>
            Si l’élève intègre un Master en 2ème année (en parallèle de son
            diplôme d’ingénieur), il lui sera alors possible de faire une
            alternance en 3ème année.
          </p>
          <WebsiteButton
            title="Plus d'infos sur l'Alternance"
            link="https://esbs.unistra.fr/formations/alternance"
          />
        </div>
        <div className="title-par">
          <h3>Diplôme Universitaire</h3>
          <p>
            2 Diplômes Universitaires sont proposés par l’école : Ingénieur
            éco-responsable et Recherche et innovation thérapeutique (accessible
            que sur sélection, 20 places pour TOUTE l’école).
          </p>
          <WebsiteButton
            title="Plus d'infos sur les DU"
            link="https://esbs.unistra.fr/formations/du"
          />
        </div>
      </section>
    </>
  );
};

export default Formation;
