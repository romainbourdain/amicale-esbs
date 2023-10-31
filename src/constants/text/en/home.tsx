import Link from "next/link";
import { HomeTextType } from "../types";

const HomeText: HomeTextType = {
  headSection: {
    title: "Welcome to our website",
    description: (
      <p>
        Here you'll find advice on the eligibility interview, information on the
        courses offered by the school and their opportunities.
      </p>
    ),
    facebookButton: "Amicale ESBS",
    instagramButton: "@amicale_esbs",
  },

  discoverSection: {
    title: "Discover the school",
    cards: {
      amicale: {
        title: "The association",
        description:
          "The role of the ESBS Student Association is to promote, organize and finance student events.",
      },
      esbs: {
        title: "ESBS",
        description:
          "ESBS is a public school, teaching a trinational curriculum. We study the basics of biotechnology, engineering sciences and human, economic and social sciences. Most courses take place in Strasbourg, but practical courses and projects are also taught in Germany and Switzerland.",
      },
      chembiotech: {
        title: "ChemBioTech",
        description:
          "ChemBioTech is THE new CTI-accredited engineering course that gives you dual skills in chemistry and biotechnology at two engineering schools simultaneously, a unique curriculum in France founded to meet the demands of professionals!",
      },
      integration: {
        title: "Month of integration",
        description: "",
      },
      parties: {
        title: "ESBS parties",
        description: "More information on ESBS evening events.",
      },
      strasbourg: {
        title: "Going out in Strasbourg",
        description:
          "Non-exhaustive list of recommended addresses in Strasbourg.",
      },
    },
  },

  partnersSection: {
    title: "Our partners",
    bde: {
      title: "BDE Telecom Physique Strasbourg",
      description: (
        <>
          <p>
            ESBS shares part of its premises as well as the student hall
            (fouaille) with the TPS physics school. The Amicale BS and the BDE
            TPS work closely together.
          </p>
          <p>
            The BDE is the equivalent of the amicale but for TPS. It has
            composed of 13 members, with a few positions that vary. The election
            of the BDE is very special, since it takes place over a whole month
            of campaigning in January. During this month, several lists organize
            daily parties for you to vote for them. for them. It's sure to be an
            unforgettable month. some of you will forget.
          </p>
          <p>
            For more information on the BDE and the associations/clubs at
            associations/clubs, here's{" "}
            <Link href="https://bde-tps.fr/">the link</Link> of the BDE.
          </p>
          <p>
            It's important to remember that TPS doesn't bite, and that the
            cohabitation of our two schools is above all a way of making even
            more friends.
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
          The BDF is a PS-BS association, providing sound and lighting effects
          at events. It also trains students to use turntables to become real
          DJs.
        </p>
      ),
      facebookButton: "BDF PS",
    },
  },
};

export default HomeText;
