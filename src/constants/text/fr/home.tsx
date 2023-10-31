import Link from "next/link";

const HomeText = {
  headSection: {
    title: "Bienvenue sur le site de l'amicale",
    description: (
      <p>
        Ici, tu trouveras des conseils pour l'entretien d’admissibilité, des
        informations sur les formations proposées par l’école et leurs
        débouchés.
      </p>
    ),
    facebookButton: "Amicale ESBS",

    instagramButton: "@amicale_esbs",
  },

  discoverSection: {
    title: "Découvrir l'école",
    cards: {
      amicale: {
        title: "L'amicale",
        description:
          "L’Amicale étudiante de l’ESBS a pour rôle de promouvoir, organiser et financer les évènements de la vie étudiante.",
      },
      esbs: {
        title: "L'ESBS",
        description:
          "L’ESBS est une école publique, qui enseigne un programme trinational. Nous étudions les bases de la biotechnologie, les sciences de l’ingénieur et les sciences humaines, économiques et sociales (HES). La plupart des cours se déroulent à Strasbourg, mais des cours pratiques et des projets sont également dispensés en Allemagne et en Suisse.",
      },
      chembiotech: {
        title: "ChemBioTech",
        description:
          "ChemBioTech est LA nouvelle formation d’ingénieur reconnue par la CTI qui te permet d’avoir une double compétence en chimie et en biotechnologie dans deux écoles d’ingénieur simultanément, un cursus unique en France fondé pour répondre aux demandes de professionnels !",
      },
      integration: {
        title: "Mois d'intégration",
        description: "",
      },
      parties: {
        title: "Soirées ESBS",
        description: "Toutes les informations sur les soirées à l'ESBS",
      },
      strasbourg: {
        title: "Sortir à Strasbourg",
        description:
          "Liste non exaustive des adresses que nous vous recommandons à Strasbourg.",
      },
    },
  },

  partnersSection: {
    title: "Nos partenaires",
    bde: {
      title: "BDE Telecom Physique Strasbourg",
      description: (
        <>
          <p>
            L’ESBS partage une partie de ses locaux ainsi que le foyer étudiant
            (le Fouaille) avec l’école de physique TPS. L’Amicale BS et le BDE
            TPS sont donc en étroite collaboration.
          </p>
          <p>
            Le BDE est l’équivalent de l’amicale mais pour les TPS. Il est
            composé de 13 membres avec quelques postes qui varient. L’élection
            du BDE est très spéciale puisqu’elle s’organise en un mois complet
            de campagne en janvier. Pendant ce mois, plusieurs listes vous
            organiseront des soirées quotidiennement pour que vous votiez pour
            eux. De quoi passer un mois inoubliable, enfin peut être que
            certains vont en oublier une partie.
          </p>
          <p>
            Pour plus d’informations sur le BDE et les associations/clubs de
            TPS, voici le <Link href="https://bde-tps.fr/">lien internet</Link>{" "}
            du BDE.
          </p>
          <p>
            Il est important de se rappeler que les TPS ne mordent pas et que la
            cohabitation de nos deux écoles est surtout un moyen de se faire
            encore plus d’amis.
          </p>
        </>
      ),
      facebookButton: "BDE Télécom Physique Strasbourg",
      instagramButton: "@bdetps2023",
      mailButton: "contact@bde-tps.fr",
    },
    bdf: {
      title: "Bureau des fêtes",
      description: (
        <p>
          Le BDF est une association PS-BS, s’occupant du son et des effets
          lumineux lors des évènements. Elle forme aussi les élèves à utiliser
          les platines, afin de devenir de vrai DJ.
        </p>
      ),
      facebookButton: "BDF PS",
    },
  },
};

export default HomeText;
