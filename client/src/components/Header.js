import hero from "../images/hero_clash_wallpaper.jpg";
import styles from "../css/Header.module.css";

const Header = () => {
    return (
        <div className={styles.customDiv}>
            <img className={styles.img} src={hero} alt="hero" />
        </div>
    )
}

export default Header;