import WebsiteButton from "@/components/Buttons/WebsiteButton";

const AdmissionsPage = () => {
  return (
    <>
      <section>
        <h1>Admissions</h1>
        <p>
          Pour l’admission, il faut distinguer deux types : l’entrée sur
          concours (classes préparatoires), et l’entrée sur dossier. Ici, nous
          ne parlerons pas de la formation Chembiotech.
        </p>
        <WebsiteButton
          title="Informations Admission"
          link="https://esbs.unistra.fr/scolarite/admissions"
        />
        <h2>Entrée sur concours</h2>
        <p>
          Il s’agit de la voie historique et peut-être la moins risquée. Elle
          est ouverte aux étudiants provenant des classes préparatoires de BCPST
          (Biologie, Chimie, Physique et Sciences de la Terre) à hauteur de 7 à
          12 places, ainsi qu’aux élèves de PC (Physique Chimie) pour 3 à 4
          places et TB (Technologie, Biologie) pour 1 place.
        </p>
        <p>
          60% des élèves qui entrent à l’ESBS avaient l’Ecole en premier vœu (la
          position n’influe pas sur l’admission), et le nombre de premiers vœux
          a doublé en 3 ans : nous gagnons en prestige !
        </p>
        <div className="title-par list-par">
          <h3>BCPST – Demain ingénieur et Agroveto</h3>
          <p>
            Les épreuves à passer sont récapitulées ci-dessous, via le
            sous-concours Polytech du concours AgroVeto, pour 80€ de frais
            d’inscription :
          </p>
          <ul>
            <li>Biologie, épreuve de synthèse (3h, coeff 4)</li>
            <li>Physique-Chimie, résolution de problèmes (3h, coeff 3)</li>
            <li>Modélisation mathématique et informatique (3h30, coeff 4)</li>
            <li>Composition de Français (3h, coeff 3)</li>
            <li>Anglais (2h, coeff 2)</li>
            <li>Epreuve orale de TIPE (coeff 4, si admissible)</li>
          </ul>
          <p>
            Une bonification de 15 points est accordée aux élèves 3/2 pour
            l’admissibilité. L’épreuve d’anglais compte bien pour
            l’admissibilité et non pour l’admission comme pour A Bio.
            Généralement, pour être sûr d’obtenir une place, il convient d’être
            dans les 500 premiers lors de l’admission, voire 800 sur 1300. Ce
            qui est parfaitement réalisable, même en cas d’échec aux écrits !
            C’est l’épreuve de TIPE qui départage le plus : dans ce cas, il faut
            avoir plus de 15 pour compenser. Rang du dernier intégré : 828° en
            2011, 690° en 2012, 537° en 2013, 813° en 2014 (1ère Ecole du
            concours Polytech)
          </p>
        </div>
        <div className="title-par list-par">
          <h3>PC – E3A</h3>
          <p>
            Pour présenter l’Ecole, il faut faire le concours E3A dans la banque
            « Concours Polytech » (inscription 70€ en 2014 pour les non
            boursiers et 0€ pour les boursiers). Attention il s’agit bien de
            présenter le concours e3a et non CCP.
          </p>
          <ul>
            <li>Maths A (4h, coeff 4)</li>
            <li>Physique-Modélisation (4h, coeff 3)</li>
            <li>Chimie (3h, coeff 3)</li>
            <li>Français (3h, coeff 2)</li>
            <li>Langue Vivante (3h, coeff 2)</li>
            <li>QCM Anglais (1h, coeff 2)</li>
            <li>Epreuve orale de TIPE (coeff 4, si admissible)</li>
          </ul>
          <p>
            Il y a 2 épreuves d’anglais si l’anglais est présenté en LV1.
            Attention (cité du livret officiel du concours e3a 2014) : “Depuis
            2008, le Concours POLYTECH (anciennement Commun Archimède) participe
            à l’épreuve nationale de TIPE, en lieu et place de son traditionnel
            entretien de motivation. A l’issue du TIPE, la note attribuée à
            l’épreuve est prise en compte dans le classement final du candidat.
            Une note inférieure à un minimum fixé par le jury est éliminatoire.”
            Il est à noter que peu de gens en PC connaissent l’ESBS ou s’y
            intéressent, ainsi même avec un classement faible il est quand même
            possible d’intégrer l’école (malgré le faible nombre de places).
          </p>
          <p>
            Rang du dernier intégré : 24° en 2011, 502° en 2012, 606° en 2013,
            544° en 2014. Voyez le témoignage de Laurent pour plus de détails.
          </p>
        </div>
        <div className="title-par list-par">
          <h3>TB – Demain ingénieur et Agroveto</h3>
          <p>Une seule place est offerte à l’ESBS aux prépas TB.</p>
          <p>Epreuves Ecrites :</p>
          <ul>
            <li>Maths (3h, coef 3)</li>
            <li>Physique-Chimie (3h, coef 3)</li>
            <li>Français (3h, coef 2)</li>
            <li>Langue Vivante (2h, coef 2)</li>
            <li>Algorithme et informatique (45min, coef 1)</li>
            <li>SVT (3h, coef 2)</li>
            <li>Biotechnologie (3h, coef 3)</li>
          </ul>
          <p>Epreuves Orales (sous réserve d’admissibilité) :</p>
          <ul>
            <li>TIPE (30min, coeff 4)</li>
            <li>Maths (1h, coeff 3)</li>
            <li>Physique-Chimie entretien (40min, coeff 2)</li>
            <li>Physique-Chimie, activité expérimentale (2h30, coeff 3)</li>
            <li>Langue Vivante (2h, coeff 2)</li>
            <li>SVT (1h, coeff 3)</li>
            <li>Biotechnologie (1h, coeff 3)</li>
            <li>Géographie (1h15, coef 2)</li>
            <li>Epreuve pratique SVT/biotechnologie (3h30, coeff 3)</li>
          </ul>
          <p>
            Puisqu’il n’y a qu’une place, il est très difficile de rentrer à
            l’ESBS. Le TIPE fait souvent la différence pour l’admission. Bon
            courage ! Le rang du dernier intégré : 3° en 2011, 4° en 2012, 13°
            en 2013, 10° en 2014.
          </p>
        </div>
      </section>
      <section>
        <h2>Entrée sur dossier</h2>
        <p>
          Il faut savoir que la formation est initialement réservée aux
          étudiants étrangers pour compléter les 24 places restantes (40 au
          total) en première année, mais les demandes ne sont pas élevées et
          donc l’Ecole recrute sur les autres formations françaises. Il faut
          alors avoir au minimum une L2 en sciences.
          <br />
          L’ESBS a reçu en 2022 pas moins de 450 dossiers, et environ 60
          personnes ont été convoquées aux entretiens. Finalement, une vingtaine
          de personnes (issus de BTS, DUT, Licence, …) ont été intégrées à la
          promotion 2022-2023.
          <br />
          L’admission au niveau master est très rare et réservée uniquement aux
          étudiants étrangers.
          <br />
          Il n’est pas nécessaire de maîtriser l’allemand, de connaître à fond
          la biologie ou même d’être encore dans les études pour intégrer l’ESBS
          (par exemple, un étudiant a déjà travaillé 3 ans avant l’Ecole), il
          faut surtout être bon, très motivé et savoir ce pourquoi vous
          postulez.
        </p>
        <p>
          Si vous venez d’un BTS/DUT/Licence la procédure est un peu longue et
          commence vers le mois de Février, période au cours de laquelle
          l’inscription administrative à l’école sera ouverte.
        </p>
        <p>
          Cette première étape consiste à remplir le dossier demandé par
          l’Ecole, qui comprend détails administratifs, dossier scolaire (notes
          depuis le Bac) et une lettre de motivation. Pensez aussi à y glisser
          quelques lettres de recommandation, cela ne peut pas faire de mal
          <br />. Si votre dossier est reçu par l’école, celle-ci vous
          convoquera à un entretien de motivation qui se déroule fin Juin. Pour
          ceux qui seraient en stage à l’étranger, des entretiens par Teams/Zoom
          peuvent être mis en place, si l’Ecole est prévenue suffisamment de
          temps à l’avance. Une fois l’entretien passé, l’Ecole vous enverra une
          réponse rapidement (moins d’une semaine, parfois juste 2 jours après
          les journées d’entretien). Encore une fois vous retrouverez les
          détails de la procédure sur le site officiel de l’ESBS, que vous
          pouvez commencer à surveiller dès Février.
        </p>
        <div className="title-par">
          <h3>Pourquoi ?</h3>
          <p>
            L’entretien individuel est destiné à établir un premier contact
            entre le candidat et des membres de l’équipe pédagogique de l’ESBS.
            L’établissement d’un dialogue permet principalement de tester les
            motivations du candidat à intégrer une école d’ingénieur en
            biotechnologie et de mieux cerner son profil en tant qu’individu,
            ainsi que de vérifier un certain niveau de connaissances en sciences
            et en langues de ce dernier. L’ensemble de ces points est pensé dans
            l’intérêt du candidat, ils permettent en effet de vérifier si
            l’école correspond bien à la fois à ses attentes en terme de
            formation, et si ses capacités à l’entrée lui confèrent les armes
            nécessaires pour réussir en son sein.
          </p>
        </div>
        <div className="title-par">
          <h3>Quand ?</h3>
          <p>
            Les entretiens de l’ESBS ont couramment lieu fin juin, la date
            précise varie selon les années. La convocation concerne les
            candidats dont le dossier a été retenu, et se fait par courrier via
            la scolarité. Vous aurez une réponse quelques jours après
            l’entretien.
          </p>
        </div>
        <div className="title-par">
          <h3>Où</h3>
          <p>
            Les entretiens se déroulent dans les locaux même de l’ESBS. Si vous
            n’êtes pas de Strasbourg, n’hésitez pas à arriver la veille sur
            Strasbourg.
          </p>
          <p>
            NB : si vous êtes actuellement sur un autre continent (USA, Canada
            par exemple) pour votre travail ou dans le cadre d’un stage, vous
            pouvez réaliser votre entretien en distanciel.
          </p>
        </div>
        <div className="title-par">
          <p>
            Chaque année, des étudiants de l’ESBS accueillent les candidats
            sélectionnés sur dossier la veille de leur entretien. Cette soirée
            est organisée dans une partie privatisée d’un bar partenaire au
            centre-ville de Strasbourg (variant selon les années), et permet
            d’établir un dialogue constructif et rassurant pour aborder au mieux
            cette dernière épreuve. Que ce soit pour obtenir de bons conseils,
            relâcher un peu la pression, ou simplement papoter avec vos futurs
            collègues, vous êtes les bienvenus !
          </p>
          <p>
            NB : Les étudiants chargés de l’accueil des candidats ont pour
            habitude d’établir un point de rendez-vous à la gare SNCF de
            Strasbourg, ainsi qu’à la cathédrale ! Suivez-nous sur nos réseaux
            pour être tenus au courant.
          </p>
        </div>
        <div className="title-par">
          <h3>Organisation des entretiens</h3>
          <p>
            Les candidats sont convoqués par courrier à une date et un créneau
            horaire précis pour leur entretien. L’Amicale sera présente pour
            vous soutenir.
          </p>
          <p>
            Concernant l’entretien en lui-même, il s’agit d’un DOUBLE entretien
            : le candidat rencontre successivement deux binômes composés de
            professeurs de l’école et se déroule dans deux salles différentes.
            La durée de l’entretien peut varier d’un candidat à l’autre, mais
            est généralement de l’ordre de 10 minutes par « demi-jury ». <br />
            Remarque : Il peut exister un petit temps de latence entre les deux
            entretiens.
          </p>
          <p>
            NB : Pour l’année 2022-2023, nous avons remarqué que 1 jury posait
            des questions difficiles d’ordre générale (si après l’entrevue vous
            avez le sentiment d’être un moins que rien, ne paniquez pas c’est
            normal) et que l’autre jury posait des questions plus personnelles,
            orientées sur votre personnalité et vos hobbits.
          </p>
        </div>
        <div className="title-par list-par">
          <h3>Questions potentielles</h3>
          <p>
            Avant toute chose, il est important de prendre conscience qu’un
            entretien reste une expérience unique : les informations suivantes
            ont pour but de donner aux candidats un avant-goût des événements à
            venir, mais ne doivent en aucun cas être pris pour argent comptant :
          </p>
          <ul>
            <li>
              Présentation personnelle (parcours, attentes professionnelles…)
            </li>
            <li>
              Les biotechnologies (secteurs, actualité, entreprises,
              publications éventuelles…)
            </li>
            <li>Le métier d’ingénieur</li>
            <li>L’ESBS (après tout, vous n’êtes pas là par hasard)</li>
            <li>Questions de culture générale sur la biologie, chimie, etc…</li>
            <li>Question sur l’actualité</li>
          </ul>
          <p>
            Remarques : L’entretien se déroule généralement en français.
            Cependant, selon votre parcours, il se peut que vous soyez invités à
            vous exprimer en anglais et/ou en allemand. Nous rappelons cependant
            que le niveau de langue n’est pas un critère de sélection à
            proprement dit dans notre école. De fait, même si cela vous paraît
            difficile, ne vous inquiétez pas outre mesure. Gardez votre calme,
            restez confiants et faites de votre mieux !
          </p>
        </div>
        <div className="title-par list-par">
          <h3>Les entretiens : nos conseils</h3>
          <p>
            Pour avoir vécu ces mêmes étapes, les étudiants de l’ESBS sommes
            heureux de pouvoir être présents pour vous prodiguer quelques
            conseils avisés. La soirée pré-entretien est entièrement consacrée à
            ce type d’accueil, tout comme notre présence sur place lors de la
            journée des entrevues. Afin d’aborder sereinement votre entretien,
            voici déjà une liste non-exhaustive de petits conseils généraux,
            d’étudiants à candidats : « Un entretien, ça se prépare ! »
          </p>
          <ul>
            <li>
              Si vous n’avez jamais été confrontés à un entretien, n’hésitez pas
              à regarder des vidéos sur Youtube du type “Entretien pour une
              école d’ingénieur”.
            </li>
            <li>
              N’hésitez pas à vous exercer pour la prise de parole en continu.
              Il s’agit évidemment d’un dialogue dans la forme, mais on attend
              de vous d’être éloquents et sûrs de votre discours une fois la
              question posée, sans qu’on doive nécessairement vous relancer à
              chaque fin de phrase.
            </li>
            <li>
              Un entretien doit être un mélange de spontanéité et de travail
              d’amont. Restez vous-même, et n’oubliez pas le message que vous
              voulez faire passer, peu importe l’ambiance instaurée (Certains
              professeurs vont faire en sorte de vous déstabiliser en regardant
              par la fenêtre ou en écrivant sur une feuille. Si une question est
              difficile, ou inattendue, c’est une démarche volontaire.).
            </li>
            <li>
              Ne vous relâchez pas entre les deux entrevues successives, peu
              importe comment s’est déroulée la première. Même si vous avez
              l’impression de vous répéter, n’oubliez pas que vos deux nouveaux
              interlocuteurs n’auront rien entendu de votre premier entretien,
              et qu’il faudra être tout aussi convainquant.
            </li>
            <li>
              Conseil personnel : Lorsque l’entretien se termine et que le jury
              vous demande “Avez-vous des questions”, NE DITES JAMAIS NON.
              Préparez en amont une question qui pourra surprendre. Exemple :
              dans la mesure du possible, je souhaiterais savoir ce que vous
              pensez de ma candidature. J’aimerais savoir si vous avez encore
              des doutes, et si oui je serais ravi d’en discuter avec vous.”
            </li>
            <li>
              Évitez de: vous décontenancer, être trop sûr de vous, mentir !
            </li>
            <li>
              Restez : souriant, ouvert d’esprit, curieux, et surtout fidèles à
              vous-même.
            </li>
            <li>
              Pour plus d’informations, ou des conseils personnalisés, n’hésitez
              pas à nous contacter sur les réseaux sociaux et à venir à la
              soirée pré-entretien !
            </li>
          </ul>
        </div>
        <div className="title-par">
          <h3>Candidature sur dossier : les résultats</h3>
          <p>
            Les résultats seront publiés sur le site de l’ESBS et par mail,
            quelques jours après les entretiens (la date vous sera précisée).
            Ils sont fournis sous forme de deux listes d’admission :
          </p>
          <h4>La liste principale</h4>
          <p>
            Elle contient la vingtaine de noms des candidats admis sur dossier +
            entretien. Ces candidats sont officiellement autorisés à s’inscrire
            à l’ESBS, et devront confirmer leur désir d’intégrer l’école au plus
            tôt via un coupon-réponse qui leur sera envoyé par courrier.
          </p>
          <h4>La liste d’attente</h4>
          <p>
            Les noms figurant sur cette liste sont classés par ordre numérique
            (de 1 à 10). Le numéro associé à chacun des noms correspond à son
            rang sur la liste d’attente. Ainsi, si un candidat admis sur liste
            principale renonce à son droit d’inscription dans l’école, sa place
            sera proposée au premier candidat sur la liste d’attente (1), et
            ainsi de suite, jusqu’à compléter à nouveau le nombre d’admis sur la
            liste principale. Chaque année, le nombre d’étudiants admis via
            liste d’attente varie considérablement. Il est donc important pour
            les candidats concernés de garder espoir malgré tout, et de rester
            prêt à entamer les démarches nécessaires pour l’inscription si la
            scolarité les contacte pour annoncer la bonne nouvelle !
          </p>
          <p>
            NB : Pour l’année 2022-2023, un jury nous a assuré que généralement,
            les 5 premiers de la liste d’attente étaient assurément pris à
            l’ESBS, à cause des désistements. Si l’ESBS est votre premier choix,
            et que vous n’êtes pas retenus, ne perdez pas espoir et n’hésitez
            pas à retenter votre chance l’année suivante ! Chaque année, des
            candidats sont admis sur liste principale après avoir expérimenté la
            liste d’attente l’année précédente… Alors courage !
          </p>
        </div>
      </section>
    </>
  );
};

export default AdmissionsPage;
