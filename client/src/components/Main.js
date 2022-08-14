import styles from "../css/main.module.css";

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
    <div className={styles.container}>
      <h1 className={styles.h1}>Data Visualized</h1>
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <img src={mediumIcon} alt="league-trophy" />
          <p>{leagueName}</p>
        </div>

        <div className={styles.headingInformation}>
          <div>
            <h2>Trophies</h2>
            <h2>Best Trophies</h2>
          </div>

          <div>
            <p>{trophies}</p>
            <p>{bestTrophies}</p>
          </div>
        </div>
      </div>

      <div className={styles.trophyData}>
        <h2>{currentTrophies}</h2>
        <h2>{bestSeasonTrophies}</h2>
        <h2>{previousTrophies}</h2>

        <p>information</p>
      </div>
    </div>
  );
};

export default Main;
