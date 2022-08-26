import styles from "../css/main.module.css";
import icon from "../images/league_icon.png";

const Main = (props) => {
  const {
    leagueName,
    trophies,
    bestTrophies,
    mediumIcon,
    previousTrophies,
    bestSeasonTrophies,
    currentTrophies,
  } = props;

  return (
    <div>
      <h1 className={styles.h1}>Data Visualized</h1>

      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <div className={styles.imageContainer}>
            <img src={typeof mediumIcon === "undefined" ? icon : {mediumIcon}} alt="league-trophy" />
            <p>{leagueName}</p>
          </div>

          <div className={styles.headingInformation}>
            <div className={styles.headingTitles}>
              <p>Trophies</p>
              <h2>{typeof trophies === "undefined" ? "5000+" : {trophies}}</h2>
            </div>

            <div className={styles.headingData}>
              <p>Best Trophies</p>
              <h2>{typeof bestTrophies === "undefined" ? "5304+" : {bestTrophies}}</h2>
            </div>
          </div>
        </div>

        <div className={styles.trophyDataContainer}>
          <div className={styles.trophyData}>
            <h2>{typeof currentTrophies === "undefined" ? "5000+" : {currentTrophies}}</h2>
            <h2>{typeof bestSeasonTrophies === "undefined" ? "5162+" : {bestSeasonTrophies}}</h2>
            <h2>{typeof previousTrophies === "undefined" ? "4900+" : {previousTrophies}}</h2>
          </div>

          <div className={styles.trophyCaption}>
            <p>CURRENT BEST PREVIOUS</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Main;
