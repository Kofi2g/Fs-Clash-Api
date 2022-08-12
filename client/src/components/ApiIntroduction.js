import phone from "../phone_clash.png";
import styles from "../css/ApiIntroduction.module.css";

const ApiIntroduction = (props) => {

  const {name, townHall, trophies} = props;

  return (
    <div className={styles.ApiIntroductionContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={phone} alt="phone_clash_of_clans" />
      </div>

      <div className={styles.contentContainer}>
        <h1 className={styles.h1}>Data visualized</h1>

        <div className={styles.contentHeading}>
          <h2>Name</h2>
          <h2>Townhall</h2>
          <h2>Trophies</h2>
        </div>

        <div className={styles.contentInformation}>
          <h2>{name}</h2>
          <h2>{townHall}</h2>
          <h2>{trophies}</h2>
        </div>

        <div>
          <p className={styles.p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            doloribus hic temporibus ipsa repellendus quidem deleniti labore
            minima consequatur fugit. Molestiae fugiat ullam, distinctio rem
            nobis natus dignissimos. Id, quam. Molestias aperiam illo excepturi
            ducimus? Ex ratione quibusdam quos minus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApiIntroduction;
