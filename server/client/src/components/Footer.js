import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import wordpress from "../images/wordpress.svg";
import styles from "../css/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>Follow me</div>

      <div>
        <a href="https://linkedin.com/in/kofi"><img src={linkedin} alt="linkedin profile" /></a>
        <a href="https://github.com/Kofi2g"><img src={github} alt="github profile" width={30} /></a>
        <a href="https://kofiscloud.wordpress.com/"><img src={wordpress} alt="wordpress-blog" /></a>
      </div>
    </div>
  );
};

export default Footer;
