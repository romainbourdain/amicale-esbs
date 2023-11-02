import FacebookButton from "@/components/Buttons/FacebookButton";
import MailButton from "@/components/Buttons/MailButton";

const SportsPage = () => {
  return (
    <>
      <section>
        <h1>Sport à l'ESBS</h1>
        <p>
          Le Bureau des Sports de TPS (BDS) propose de nombreuses activités
          auxquelles les étudiants de l’ESBS ont accès. Après ta semaine de
          labeur, viens te défouler et taper dans un ballon (badminton, hand,
          basket, volley et foot). Souvent à partir de 18h le vendredi au lycée
          Couffignal (ligne A et E).
        </p>
        <div className="flex items-center gap-2">
          <FacebookButton
            link="https://www.facebook.com/bdstps/"
            title="BDS Télécom Physique Strasbourg"
          />
          <MailButton
            link="mailto:bds.telecom.ps@gmail.com"
            title="bds.telecom.ps@gmail.com"
          />
        </div>
        <p>
          Si tu veux faire de la gonflette pour plaire aux minettes, n’hésite
          pas à demander à un des membres de l’amicale comment avoir accès à la
          salle de muscu située au sous-sol du fouaille.
        </p>
        <p>
          Enfin, si tu veux diversifier tes activités, tu peux intégrer le club
          des arts martiaux ou le club de danse rock.
        </p>
        <p>
          Il existe aussi le Service Universitaire d’Activités Physiques et
          Sportives qui te propose un bon nombre de sports : gym, kayak,
          équitation, golf ou encore plongée. Tu devrais y trouver ton bonheur !
          La plupart des cours se déroulent au Centre Sportif Universitaire,
          situé sur le campus de l’Esplanade, qui ouvre du lundi au vendredi, de
          9h à 21h.
        </p>
        <div className="list-par">
          <p>
            Et qui dit sport, dit évènements sportifs ! Nous sommes conviés à au
            moins 6 grands évènements :
          </p>
          <ul>
            <li>le Tournoi Inter Télécoms (TIT) via TPS</li>
            <li>le Tournoi Inter Chimie (TIC) via les Chembiotech et l’ECPM</li>
            <li>
              le Tournoi du Poly, entre les écoles d’ingénieur de Strasbourg,
              organisé par l’association du Poly
            </li>
            <li>les tournois de l’Université</li>
            <li>le tournois InterAgros pour les 2A</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default SportsPage;
