import "./FoundersPage.css";
import founders from "./founders.jpeg";

export default function FoundersPage() {
  return (
    <div className="founders_body">
      <div className="founders_title">About Us</div>
      <div className="founders_message_container">
        <img
          src={founders}
          style={{
            height: "21rem",
            width: "40rem",
            justifySelf: "center",
            borderWidth: "0.05rem",
            borderStyle: "solid",
            marginTop: "2rem",
          }}
          alt="NONE"
        />
        <div className="founders_message_title">Founder's Purpose</div>
        <div className="founders_message">
          This trust was established to commemorate and celebrate the story of 5
          Indian boys who lived in poverty, but, through the sheer perseverance
          of their gutsy single mother, grew up to become highly successful
          professionals in their fields. This success would not have been
          possible without the help of a few remarkable individuals who guided
          the boys with thoughtful counseling and set up a value system that has
          stood the test of time. The boys and their mother grew up at 6541
          Kumarguda, Secunderabad, in a single room separated by flimsy
          cardboard structures. In the collective minds of the boys, 6541 Trust
          represents what can be accomplished with perseverance, hard work and
          most importantly, help and mentorship from generous individuals.
        </div>
      </div>
      {/* <div className="founders_section_1">
        <div className="founder_component">
          <div className="founder_component_content">
            <div className="founder_name">Lebron James</div>
            <div className="founder_description">
              LeBron James, in full LeBron Raymone James, byname King James,
              (born December 30, 1984, Akron, Ohio, U.S.), American professional
              basketball player who is widely considered one of the greatest
              all-around players of all time and who won National Basketball
              Association (NBA) championships with the Miami Heat (2012 and
              2013), the Cleveland Cavaliers (2016), and the Los Angeles Lakers
              (2020).
            </div>
          </div>
          <div className="founder_image">IMAGES</div>
        </div>
        <div className="founder_component">
          <div className="founder_component_content">
            <div className="founder_name">Anthony davis</div>
            <div className="founder_description">
              Anthony Marshon Davis Jr. (born March 11, 1993), nicknamed "AD",
              is an American professional basketball player for the Los Angeles
              Lakers of the National Basketball Association (NBA). He previously
              played for the New Orleans Pelicans. He plays the power forward
              and center positions.
            </div>
          </div>
          <div className="founder_image">IMAGES</div>
        </div>
        <div className="founder_component">
          <div className="founder_component_content">
            <div className="founder_name">Austin Reaves</div>
            <div className="founder_description">
              Austin Tyler Reaves (born May 29, 1998)[1] is an American
              professional basketball player for the Los Angeles Lakers of the
              National Basketball Association (NBA). He played college
              basketball for the Wichita State Shockers and the Oklahoma
              Sooners. He joined the Lakers as an undrafted free agent.
            </div>
          </div>
          <div className="founder_image">IMAGES</div>
        </div>
      </div> */}
    </div>
  );
}
