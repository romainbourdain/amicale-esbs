import MailButton from "@/components/Buttons/MailButton";
import WebsiteButton from "@/components/Buttons/WebsiteButton";
import Image from "next/image";

const ChembiotechPage = () => {
  return (
    <>
      <section>
        <h1>ChemBiotech ESBS-ECPM</h1>
        <Image
          src="/school/logo-cbt.png"
          alt="logo esbs"
          width={500}
          height={500}
        />
        <p>
          ChemBioTech est LA nouvelle formation d’ingénieur reconnue par la CTI
          qui te permet d’avoir une double compétence en chimie et en
          biotechnologie dans deux écoles d’ingénieur simultanément, un cursus
          unique en France fondé pour répondre aux demandes de professionnels !
        </p>
        <p>
          Etre un étudiant ChemBioTech, c’est être pionnier d’un nouveau genre
          d’ingénieur à l’interface entre deux domaines destinés à des secteurs
          comme la pharmacie, l’environnement, la chimie verte ou encore la
          cosmétologie. Mais c’est aussi faire partie de deux grandes familles
          d’étudiants que sont l’ECPM et l’ESBS !
        </p>
      </section>
      <section>
        <h2>Promotion</h2>
        <div className="list-par">
          <p>
            La formation ChemBioTech accueille par année un total de 20
            étudiants d’après la répartition suivante :
          </p>
          <ul>
            <li>3 CPI de la fédération Gay-Lussac</li>
            <li>5 Classe Préparatoire PC</li>
            <li>5 Classe Préparatoire BCPST</li>
            <li>
              7 Admissions sur titre – DUT, licences dans le domaine chimie ou
              biologie
            </li>
            <li>CPI Polytech</li>
          </ul>
          <p>
            Ces chiffres sont susceptibles à des modifications, la promotion est
            cependant toujours constituée de 10 chimistes et 10 biologistes.
          </p>
        </div>
        <p>
          Attention, la majorité des admis sur titre ont fait un parcours
          contenant les deux domaines. Rares sont ceux qui ont un parcours
          exclusivement en chimie ou en biologie.
        </p>
      </section>
      <section>
        <h2>Cursus</h2>
        <WebsiteButton
          title="Curriculum de la formation"
          link="http://ecpm.unistra.fr/uploads/media/2017_07-21_Curriculum_enseignements_CBT_2017-2018_02.pdf"
        />
        <div className="table-par">
          <p>La formation se réalise sur 3 années consécutives :</p>
          <table>
            <tbody>
              <tr>
                <th>SEMESTRES</th>
                <th></th>
                <th>STAGES (MINIMUM 1 À L’ÉTRANGER)</th>
              </tr>
              <tr>
                <td>S1-S2</td>
                <td>Remise à niveau en chimie et en biologie</td>
                <td>4 semaines min. (Privé)</td>
              </tr>
              <tr>
                <td>S3-S4</td>
                <td>Approfondissement des connaissances</td>
                <td>12 semaines min.</td>
              </tr>
              <tr>
                <td>S5-S6 </td>
                <td>Spécialisation en Santé ou Environnement</td>
                <td>
                  {" "}
                  4 semaines (Public) <br />
                  22 à 26 semaines
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Sur ces 3 années, 40 % des cours sont des travaux pratiques, le reste
          est réparti entre cours magistraux et travaux dirigés.
        </p>
        <p>
          Les cours se font donc dans les deux écoles, les cours de chimie et de
          langues à l’ECPM avec la promotion « Chimiste » constituée d’une
          centaine de personnes et les cours de biologie à l’ESBS avec la
          promotion « Biotechnologistes » constituée d’une quarantaine de
          personnes. Certains cours ne sont donnés qu’à notre promotion.
        </p>
        <p>
          La formation ChemBioTech est également très investie à l’international
          encouragée par le trilinguisme Français-Anglais-Allemand. En effet la
          LV2 Allemand est obligatoire, il n’y a cependant pas de niveau requis
          et des groupes de débutants sont formés, pas d’inquiétude ! Des
          options linguistiques sont à disposition.
        </p>
        <p>
          La plupart des cours sont en anglais, notamment à l’ESBS, certains
          sont en français et des cours de chimie sont dédoublés en allemand
          pour les plus bilingues d’entre nous.
        </p>
        <p>
          Les semaines ChemBio ont l’avantage d’être très peu répétitives,
          chaque semaine est différente d’une autre. Une semaine type en
          première année consiste à être la première moitié de celle-ci à l’ECPM
          (sur le campus de Cronenbourg) et la seconde à l’ESBS (sur le campus
          d’Illkirch) et inversement en deuxième année. Les emplois du temps
          sont faits de manière à éviter le plus possible d’avoir à faire le
          déplacement entre les deux écoles (maximum une fois par semaine).
        </p>
        <p>
          En première année des cours de soutien en biologie et en chimie
          organique sont réalisés pour remettre toute la promotion à niveau. De
          plus un fort esprit d’entraide entre les biologistes et les chimistes
          permet de comprendre sans trop de difficultés mais avec un peu
          d’investissement personnel.
        </p>
      </section>
      <section>
        <h2>Vie étudiante</h2>
        <p>
          La vie étudiante d’un « ChemBio » est assez active, si celui-ci a des
          cours dans les deux écoles il participe également aux animations de
          celles-ci ! Que ce soit du côté de l’ECPM au sein d’une promo d’une
          centaine d’étudiants ou d’une quarantaine à l’ESBS, l’intégration se
          fait très bien dans les deux écoles.
        </p>
        <p>
          En ChemBioTech tu as l’occasion unique de pouvoir participer
          activement dans deux écoles et ambiances différentes. Ainsi il peut y
          avoir des étudiants ChemBio dans toutes les associations étudiantes.
          Et un respo CBT est élu dans au Bureau des Etudiants des 2 écoles.
        </p>
      </section>
      <section>
        <h2>Entretien et admission</h2>
        <p>
          Les admissions sur titres se font très rapidement dans l’année
          (deadline début mai). Si tu es intéressé n’hésite pas !
        </p>
        <p>
          Après étude de dossier, si celui-ci est retenu, il y a un entretien à
          réaliser sur place à l’ECPM ou en visio si tu ne peux pas te déplacer.
          L’entretien pour cette année était composé de 4 personnes. Les
          questions sont orientées sur la motivation personnelle,
          l’investissement ainsi que sur des connaissances en chimie et en
          biologie. Il y a une trentaine de candidat dans toute la France dont
          les dossiers sont retenus pour les 7 places disponibles.
        </p>
      </section>
      <section>
        <h2>Accès et logement</h2>
        <p>
          L’ESBS est située dans le parc d’innovations au pôle API, celui-ci se
          trouve à 5 minutes à pied de l’arrêt Campus d’Illkirch (ligne A et E).
        </p>
        <p>
          L’ECPM est située dans le campus de Cronenbourg, celui-ci se trouve à
          5 minutes à pied de l’arrêt Arago (Bus G et 19).
        </p>
        <p>
          Les deux écoles se trouvent assez loin l’une de l’autre, en tram/bus
          il faut compter un peu moins d’une heure entre les deux. En voiture il
          y a une vingtaine de minutes, les ChemBio sont donc aussi adeptes de
          covoiturages !
        </p>
        <div className="list-par">
          <p>
            En ce qui concerne les logements, le plus pratique est de se trouver
            à mi-chemin entre l’ESBS et l’ECPM. Les bus pour rejoindre l’ECPM
            partent de la Gare ou de Rotonde, il y a trois quartiers notables de
            Strasbourg qui conviennent :
          </p>
          <ul>
            <li>
              Centre-Ville, bien situé mais un peu cher et difficile d’accès en
              voiture.
            </li>
            <li>
              Quartier de la gare et des Halles, moins cher que le centre ville
              et tout aussi bien placé.
            </li>
            <li>
              Cronenbourg, encore moins cher, accès assez simple en voiture mais
              obligation de prendre les transports pour aller dans le
              centre-ville, plus près de l’ECPM que de l’ESBS.
            </li>
          </ul>
        </div>
        <p>
          Les logements à Strasbourg partent très vite, notamment en
          centre-ville, il est donc important de chercher le plus tôt possible !
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <MailButton
          title="cbt.etudiants@gmail.com"
          link="mailto:cbt.etudiants@gmail.com"
        />
        <p>
          Pour toutes questions supplémentaires, nous nous montrons entièrement
          disponibles à vos requêtes par mail.
        </p>
        <p>
          Si tu as été accepté, contacte-nous qu’on puisse te mettre en relation
          avec ta future promotion !
        </p>
      </section>
    </>
  );
};

export default ChembiotechPage;
